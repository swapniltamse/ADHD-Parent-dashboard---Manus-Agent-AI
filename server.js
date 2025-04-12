require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const OpenAI = require('openai');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB Atlas - using MongoDB Atlas free tier
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb+srv://adhd-dashboard:adhd-dashboard-demo@cluster0.mongodb.net/adhd-dashboard?retryWrites=true&w=majority';

mongoose.connect(MONGODB_URI)
  .then(() => console.log('Connected to MongoDB Atlas'))
  .catch(err => console.error('Could not connect to MongoDB Atlas', err));

// Define schemas
const taskSchema = new mongoose.Schema({
  title: { type: String, required: true },
  completed: { type: Boolean, default: false },
  priority: { type: String, enum: ['high', 'medium', 'low'], default: 'medium' },
  category: { type: String, default: 'general' },
  createdAt: { type: Date, default: Date.now }
});

const communicationSchema = new mongoose.Schema({
  type: { type: String, required: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
  userFeelings: { type: String },
  theirPerspective: { type: String },
  tags: [String],
  gratitudeNote: { type: String },
  createdAt: { type: Date, default: Date.now }
});

const moodSchema = new mongoose.Schema({
  mood: { type: String, required: true },
  notes: { type: String },
  date: { type: Date, default: Date.now }
});

const resourceSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  category: { type: String, required: true },
  source: { type: String },
  url: { type: String },
  isEmpathyBuilder: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now }
});

// Create models
const Task = mongoose.model('Task', taskSchema);
const Communication = mongoose.model('Communication', communicationSchema);
const Mood = mongoose.model('Mood', moodSchema);
const Resource = mongoose.model('Resource', resourceSchema);

// Initialize OpenAI API client
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY || 'demo-api-key', // Will use a free tier API for demo
});

// Routes for Tasks
app.get('/api/tasks', async (req, res) => {
  try {
    const tasks = await Task.find().sort({ createdAt: -1 });
    res.json(tasks);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

app.post('/api/tasks', async (req, res) => {
  const task = new Task({
    title: req.body.title,
    completed: req.body.completed || false,
    priority: req.body.priority || 'medium',
    category: req.body.category || 'general'
  });

  try {
    const newTask = await task.save();
    res.status(201).json(newTask);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

app.put('/api/tasks/:id', async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);
    if (!task) return res.status(404).json({ message: 'Task not found' });

    if (req.body.title) task.title = req.body.title;
    if (req.body.completed !== undefined) task.completed = req.body.completed;
    if (req.body.priority) task.priority = req.body.priority;
    if (req.body.category) task.category = req.body.category;

    const updatedTask = await task.save();
    res.json(updatedTask);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

app.delete('/api/tasks/:id', async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);
    if (!task) return res.status(404).json({ message: 'Task not found' });

    await task.remove();
    res.json({ message: 'Task deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Routes for Communication Logs
app.get('/api/communications', async (req, res) => {
  try {
    const communications = await Communication.find().sort({ createdAt: -1 });
    res.json(communications);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

app.post('/api/communications', async (req, res) => {
  const communication = new Communication({
    type: req.body.type,
    title: req.body.title,
    description: req.body.description,
    userFeelings: req.body.userFeelings,
    theirPerspective: req.body.theirPerspective,
    tags: req.body.tags,
    gratitudeNote: req.body.gratitudeNote
  });

  try {
    const newCommunication = await communication.save();
    res.status(201).json(newCommunication);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Routes for Mood Tracking
app.get('/api/moods', async (req, res) => {
  try {
    const moods = await Mood.find().sort({ date: -1 });
    res.json(moods);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

app.post('/api/moods', async (req, res) => {
  const mood = new Mood({
    mood: req.body.mood,
    notes: req.body.notes,
    date: req.body.date || new Date()
  });

  try {
    const newMood = await mood.save();
    res.status(201).json(newMood);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Routes for Resources
app.get('/api/resources', async (req, res) => {
  try {
    const resources = await Resource.find().sort({ createdAt: -1 });
    res.json(resources);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

app.post('/api/resources', async (req, res) => {
  const resource = new Resource({
    title: req.body.title,
    description: req.body.description,
    category: req.body.category,
    source: req.body.source,
    url: req.body.url,
    isEmpathyBuilder: req.body.isEmpathyBuilder || false
  });

  try {
    const newResource = await resource.save();
    res.status(201).json(newResource);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// AI Chatbot endpoint
app.post('/api/chatbot', async (req, res) => {
  try {
    const userMessage = req.body.message;
    
    // For demo purposes, we'll use a simple response system
    // In production, this would connect to OpenAI's API
    if (!userMessage) {
      return res.status(400).json({ message: 'Message is required' });
    }

    // Simulate OpenAI API call for demo
    // In production, this would be:
    /*
    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        { role: "system", content: "You are a helpful assistant specializing in ADHD support for parents." },
        { role: "user", content: userMessage }
      ],
    });
    const botResponse = completion.choices[0].message.content;
    */

    // Demo response logic
    let botResponse = '';
    const lowerCaseMessage = userMessage.toLowerCase();
    
    if (lowerCaseMessage.includes('medication') || lowerCaseMessage.includes('meds')) {
      botResponse = "Medication can be an important part of ADHD treatment. It's best to discuss specific medication questions with your healthcare provider. Remember that finding the right medication and dosage may take time and adjustments.";
    }
    else if (lowerCaseMessage.includes('routine') || lowerCaseMessage.includes('schedule')) {
      botResponse = "Consistent routines can be very helpful for people with ADHD. Try to establish regular times for meals, homework, play, and sleep. Visual schedules and timers can also be useful tools.";
    }
    else if (lowerCaseMessage.includes('homework') || lowerCaseMessage.includes('study')) {
      botResponse = "For homework success, try breaking assignments into smaller chunks, using timers for focused work periods (like the Pomodoro technique), and creating a distraction-free study environment. Praise effort rather than just results.";
    }
    else if (lowerCaseMessage.includes('focus') || lowerCaseMessage.includes('attention') || lowerCaseMessage.includes('concentrate')) {
      botResponse = "To help with focus, try breaking tasks into smaller steps, eliminating distractions, using timers for short work periods, and incorporating movement breaks. Remember that attention challenges are a core aspect of ADHD, not a lack of effort or willpower.";
    }
    else if (lowerCaseMessage.includes('angry') || lowerCaseMessage.includes('frustrat') || lowerCaseMessage.includes('emotion')) {
      botResponse = "Emotional regulation can be challenging with ADHD. Try to recognize emotional triggers, develop calming strategies together, and create a safe space for expressing feelings. Remember that emotional intensity is often part of ADHD and not intentionally disrespectful.";
    }
    else if (lowerCaseMessage.includes('school') || lowerCaseMessage.includes('teacher') || lowerCaseMessage.includes('iep') || lowerCaseMessage.includes('504')) {
      botResponse = "Educational accommodations can be very helpful. Consider discussing an IEP or 504 plan with your school. Effective accommodations might include preferential seating, extended time for tests, or breaking assignments into smaller parts.";
    }
    else if (lowerCaseMessage.includes('sleep') || lowerCaseMessage.includes('bedtime') || lowerCaseMessage.includes('tired')) {
      botResponse = "Sleep issues are common with ADHD. Try establishing a consistent bedtime routine, limiting screen time before bed, ensuring the bedroom is cool and dark, and considering whether medication timing might be affecting sleep.";
    }
    else if (lowerCaseMessage.includes('empathy') || lowerCaseMessage.includes('understand')) {
      botResponse = "Building empathy involves trying to see the world through your child's eyes. ADHD can make everyday tasks much more challenging. What might seem like laziness or defiance is often the result of executive function challenges. Validate their struggles while still encouraging growth.";
    }
    else {
      botResponse = "That's a great question about ADHD. While I can provide general information, remember that each person's experience with ADHD is unique. Would you like to know about specific strategies, resources, or understanding ADHD behaviors?";
    }

    res.json({ response: botResponse });
  } catch (err) {
    console.error('Chatbot error:', err);
    res.status(500).json({ message: 'Error processing your request' });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

module.exports = app;
