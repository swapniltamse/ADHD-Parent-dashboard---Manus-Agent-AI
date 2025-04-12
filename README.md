# ADHD Connect Dashboard

A responsive, empathy-focused dashboard for parents of teenagers and adults with ADHD.

![ADHD Connect Dashboard](https://ghpvseod.manus.space/screenshot.png)

## Project Overview

ADHD Connect is a web-based dashboard designed to help parents better understand, support, and communicate with their teenagers and adult children with ADHD. The dashboard emphasizes building empathy, tracking positive interactions, and maintaining supportive routines.

This project was created as a demonstration of vibe coding using Manus AI, showcasing how rapid prototyping can be applied to create tools for sensitive areas like neurodiversity support. April is celebrated as Neurodiversity Awareness Month, making this an especially relevant tool for promoting understanding and acceptance.

### Purpose

The primary purpose of this dashboard is to bridge the communication gap between parents and their ADHD children by:

- Providing a structured way to track and celebrate positive interactions
- Encouraging parents to view situations from their child's perspective
- Offering evidence-based resources for understanding ADHD
- Creating a visual record of progress and growth
- Supporting daily routines and task management
- Building empathy through guided reflection

By focusing on empathy and positive communication, the dashboard helps transform potentially challenging relationships into supportive partnerships.

## Key Features

### 1. Task Tracking with Visual Cues

The task tracking system helps establish and maintain consistent routines, which are essential for individuals with ADHD.

- **Priority Visualization**: Tasks are color-coded by priority (high: red, medium: yellow, low: green) to help focus attention on the most important items
- **Daily Routines**: Separate sections for morning and evening routines to establish consistency
- **Weekly Goals**: Longer-term objectives that build positive habits over time
- **Visual Progress Indicators**: Colorful progress bars show completion rates at a glance
- **Completion Statistics**: Percentage-based metrics to track improvement over time
- **Empathy-Focused Approach**: Tasks are framed as supportive tools rather than demands
- **Non-Judgmental Interface**: Incomplete tasks don't trigger negative visual cues
- **Task Actions**: Easy editing and deletion of tasks as needs change

### 2. Communication Log

The communication log is the heart of the empathy-building functionality, designed to improve parent-child interactions.

- **Interaction Timeline**: Chronological record of communications with emotional context
- **Gratitude Journal**: Dedicated space for recording positive moments and expressions of appreciation
- **"Their Perspective" Feature**: Prompts parents to consider how situations feel from their child's viewpoint
- **Communication Types**: Categories for different interactions (positive, challenging, gratitude, milestone)
- **Emotion Indicators**: Visual cues showing the emotional tone of each interaction
- **Resolution Tracking**: Documentation of how challenges were resolved
- **Communication Statistics**: Metrics showing the percentage of positive interactions
- **Progress Visualization**: Charts showing improvement in communication quality over time
- **Tagging System**: Categorization of interactions for pattern recognition
- **Empathy Quotes**: Inspirational reminders about the importance of understanding

### 3. Resource Library

The resource library provides curated information to help parents better understand and support their children with ADHD.

- **Categorized Content**: Resources organized by topic (Understanding ADHD, Communication Strategies, Educational Support, Emotional Wellbeing, Adult ADHD, Support Groups)
- **Search Functionality**: Ability to find specific resources quickly
- **Filtering Options**: Sort by recency, popularity, or alphabetically
- **Empathy Builder Badges**: Special highlighting for resources that specifically build understanding
- **Resource Cards**: Visual presentation with icons, descriptions, and source information
- **External Links**: Connections to reputable ADHD information sources
- **Save Feature**: Ability to bookmark resources for later reference
- **Recommended Content**: Personalized suggestions based on previous interests
- **Neurodiversity Awareness**: Special section highlighting acceptance and understanding
- **Mobile-Friendly Design**: Resources accessible on any device

### 4. Mood Tracker

The mood tracker helps identify patterns and triggers, leading to better support strategies.

- **Daily Mood Logging**: Simple emoji-based system for recording emotional states
- **Context Notes**: Text area for adding details about factors affecting mood
- **Calendar View**: Monthly visualization of mood patterns
- **Correlation Analysis**: Identification of connections between mood and factors like:
  - Sleep quality
  - Medication consistency
  - Regular meals
  - Physical activity
  - Social interactions
  - Screen time
- **Perspective Prompts**: Questions that encourage understanding the emotions behind behaviors
- **Mood Trends**: Visual charts showing patterns over time
- **Insight Cards**: Automatically generated observations about potential triggers and positive influences
- **Journal Entries**: Detailed notes about significant mood events
- **Empathy Building Tips**: Suggestions for responding to different emotional states

### 5. AI-Powered Chatbot

The ADHD Support Assistant chatbot provides immediate answers to questions and concerns.

- **Natural Language Interface**: Conversational interaction for easy access to information
- **ADHD-Specific Knowledge Base**: Responses tailored to common questions about ADHD
- **Topic Coverage**:
  - Medication and treatment options
  - Establishing effective routines
  - Homework and study strategies
  - Focus and attention techniques
  - Emotional regulation approaches
  - School accommodations
  - Sleep, diet, and exercise recommendations
  - Supporting teenagers and adults with ADHD
  - Building empathy and understanding
- **AI Integration**: Connected to free AI services for dynamic responses
- **Fallback Systems**: Multiple response mechanisms to ensure helpful answers
- **Mobile-Friendly Interface**: Accessible on any device
- **Non-Judgmental Responses**: Supportive and understanding tone
- **Resource Recommendations**: Suggestions for further reading on topics of interest

## Technical Implementation

### Frontend Architecture

The frontend is built with modern web technologies focused on responsiveness and accessibility.

- **HTML5**: Semantic markup for better accessibility and SEO
- **CSS3**: Modern styling with flexbox and grid layouts
- **JavaScript**: Interactive elements and dynamic content
- **Responsive Design**: Fluid layouts that work on devices from mobile phones to large desktops
- **Component-Based Structure**: Modular design for maintainability
- **Event-Driven Programming**: JavaScript event listeners for interactive elements
- **Local Storage**: Temporary data caching for improved performance
- **Fetch API**: Modern AJAX requests to the backend services
- **Promise-Based Architecture**: Asynchronous operations for smooth user experience
- **DOM Manipulation**: Dynamic content updates without page reloads

### Accessibility Features

The dashboard is designed to be accessible to all users:

- **High Contrast Text**: Dark text on light backgrounds for readability
- **Keyboard Navigation**: Full functionality without requiring mouse input
- **Screen Reader Compatibility**: ARIA attributes and semantic HTML
- **Focus Indicators**: Visual cues for keyboard navigation
- **Alternative Text**: Descriptions for all meaningful images
- **Responsive Font Sizes**: Text scales appropriately on different devices
- **Color Accessibility**: Tested for color blindness compatibility
- **Form Labels**: All input elements properly labeled
- **Error Messaging**: Clear feedback for form validation
- **Reduced Motion Option**: Respects user preferences for animations

### Backend System Architecture

The backend provides data persistence and API services:

- **Node.js Runtime**: JavaScript server environment
- **Express.js Framework**: Lightweight web application framework
- **MVC Architecture**: Separation of concerns for maintainability
- **RESTful API Design**: Standard HTTP methods for resource operations
- **Middleware Pipeline**: Request processing with modular components
- **Error Handling Middleware**: Centralized error management
- **Input Validation**: Request data sanitization and validation
- **CORS Support**: Cross-origin resource sharing configuration
- **Rate Limiting**: Protection against excessive requests
- **Logging System**: Activity tracking for debugging and analytics

### Database Implementation

MongoDB Atlas provides a flexible, document-based storage solution:

- **Cloud Hosting**: Scalable database with automatic backups
- **Document Model**: JSON-like BSON documents for flexible schema
- **Indexing**: Optimized queries for frequently accessed fields
- **Aggregation Pipeline**: Advanced data processing capabilities
- **Data Validation**: Schema validation rules
- **Connection Pooling**: Efficient database connections
- **Transactions**: ACID compliance for critical operations
- **TTL Indexes**: Automatic document expiration for temporary data
- **Atlas Search**: Full-text search capabilities
- **Data Encryption**: Security for sensitive information

### API Endpoints

The server exposes the following RESTful endpoints:

- **Tasks API**:
  - `GET /api/tasks` - Retrieve all tasks
  - `POST /api/tasks` - Create a new task
  - `PUT /api/tasks/:id` - Update a task
  - `DELETE /api/tasks/:id` - Delete a task

- **Communications API**:
  - `GET /api/communications` - Retrieve all communication logs
  - `POST /api/communications` - Create a new communication entry
  - `GET /api/communications/:id` - Retrieve a specific communication
  - `PUT /api/communications/:id` - Update a communication entry
  - `DELETE /api/communications/:id` - Delete a communication entry

- **Moods API**:
  - `GET /api/moods` - Retrieve all mood entries
  - `POST /api/moods` - Create a new mood entry
  - `GET /api/moods/stats` - Get mood statistics and correlations

- **Resources API**:
  - `GET /api/resources` - Retrieve all resources
  - `GET /api/resources/search` - Search resources by keyword
  - `GET /api/resources/categories` - Get resources by category

- **Chatbot API**:
  - `POST /api/chatbot` - Send a message to the chatbot

### AI Integration

The chatbot leverages multiple AI services:

- **Primary Backend API**: Custom ADHD-specific responses
- **HuggingFace Inference API**: Free fallback service using blenderbot-400M-distill model
- **Local Fallback System**: Pattern-matching responses for common questions
- **Response Processing Pipeline**:
  1. Attempt backend API response
  2. If unsuccessful, try HuggingFace API
  3. If both fail, use local fallback system
- **Context Awareness**: Maintains conversation history for more relevant responses
- **Topic Detection**: Identifies ADHD-related topics in user queries
- **Response Formatting**: Ensures consistent, readable answers

### Security Measures

The application implements several security best practices:

- **Input Sanitization**: Prevention of injection attacks
- **HTTPS Only**: Secure data transmission
- **Content Security Policy**: Protection against XSS attacks
- **Rate Limiting**: Defense against brute force attempts
- **CORS Configuration**: Controlled cross-origin access
- **Dependency Scanning**: Regular checks for vulnerable packages
- **Error Handling**: No sensitive information in error messages
- **Environment Variables**: Secure storage of credentials
- **Database Security**: Proper access controls and encryption

### Performance Optimization

Several techniques ensure fast loading and responsive interaction:

- **Asset Minification**: Reduced file sizes for faster loading
- **Lazy Loading**: Deferred loading of non-critical resources
- **Caching Strategy**: Browser caching for static assets
- **Optimized Images**: Properly sized and compressed images
- **Code Splitting**: Loading only necessary JavaScript
- **Efficient DOM Updates**: Minimized reflows and repaints
- **Debounced Event Handlers**: Preventing excessive function calls
- **Connection Pooling**: Optimized database connections
- **Query Optimization**: Efficient database operations
- **CDN Integration**: Fast delivery of static assets

## Installation and Setup

### Prerequisites
- Node.js (v14+)
- MongoDB (local or Atlas)
- Modern web browser

### Local Development Setup

1. Clone the repository:
```bash
git clone https://github.com/yourusername/adhd-dashboard.git
cd adhd-dashboard
```

2. Install dependencies:
```bash
# Install frontend dependencies
npm install

# Install server dependencies
cd server
npm install
```

3. Configure environment variables:
Create a `.env` file in the server directory with the following variables:
```
MONGODB_URI=your_mongodb_connection_string
OPENAI_API_KEY=your_openai_api_key (optional)
HUGGINGFACE_API_KEY=your_huggingface_api_key (optional)
PORT=3000
NODE_ENV=development
```

4. Start the development server:
```bash
# Start backend server
cd server
npm run dev

# In a separate terminal, serve the frontend
cd ..
npx serve
```

5. Open your browser and navigate to `http://localhost:5000`

### Project Structure

```
adhd-dashboard/
├── css/
│   ├── styles.css          # Main stylesheet
│   ├── additional.css      # Component-specific styles
│   ├── mood-tracker.css    # Mood tracker styles
│   └── chatbot.css         # Chatbot interface styles
├── js/
│   ├── main.js             # Core functionality
│   └── chatbot.js          # Chatbot implementation
├── images/                 # Image assets
├── index.html              # Main dashboard page
├── server/
│   ├── server.js           # Express server setup
│   ├── models/             # MongoDB schemas
│   │   ├── Task.js
│   │   ├── Communication.js
│   │   ├── Mood.js
│   │   └── Resource.js
│   ├── routes/             # API endpoints
│   │   ├── tasks.js
│   │   ├── communications.js
│   │   ├── moods.js
│   │   ├── resources.js
│   │   └── chatbot.js
│   ├── middleware/         # Express middleware
│   │   ├── errorHandler.js
│   │   └── validation.js
│   ├── config/             # Configuration files
│   │   └── db.js
│   └── chatbot/            # AI integration
│       ├── responses.js
│       └── aiService.js
├── .env                    # Environment variables (not in repo)
├── .gitignore              # Git ignore file
├── package.json            # Project dependencies
└── README.md               # Project documentation
```

### Development Workflow

1. **Setup**: Follow the installation steps above
2. **Development**: Make changes to the codebase
3. **Testing**: Test changes locally
   ```bash
   # Run backend tests
   cd server
   npm test
   
   # Run frontend tests
   cd ..
   npm test
   ```
4. **Building**: Create production build
   ```bash
   npm run build
   ```
5. **Deployment**: Deploy to hosting service

## Deployment

The dashboard can be deployed as a static site with the backend hosted separately:

### Frontend Deployment

1. Build the frontend:
```bash
npm run build
```

2. Deploy the static files to your preferred hosting service:
   - **Netlify**: Connect your GitHub repository or upload the build folder
   - **Vercel**: Connect your GitHub repository or use the Vercel CLI
   - **GitHub Pages**: Push the build folder to a gh-pages branch
   - **AWS S3**: Upload the build folder and configure for static website hosting

3. Configure environment variables in your hosting service to point to your backend API

### Backend Deployment

1. Prepare the server for production:
```bash
cd server
npm run build
```

2. Deploy to a Node.js hosting platform:
   - **Heroku**: Connect your GitHub repository or use the Heroku CLI
   - **DigitalOcean App Platform**: Connect your GitHub repository
   - **AWS Elastic Beanstalk**: Upload the server code
   - **Google Cloud Run**: Deploy using Docker container

3. Configure environment variables in your hosting service:
   - MONGODB_URI
   - OPENAI_API_KEY (if using)
   - HUGGINGFACE_API_KEY (if using)
   - NODE_ENV=production
   - PORT (usually set automatically by the hosting service)

4. Update the API endpoint in the frontend configuration to point to your deployed server

## Usage Guidelines

### For Parents

The dashboard is designed to be intuitive and supportive for daily use.

- **Daily Check-ins**: Spend 5-10 minutes each day updating the dashboard
- **Morning Routine**: Review tasks and set intentions for the day
- **Evening Reflection**: Log communication highlights and mood observations
- **Gratitude Practice**: Record at least one thing you appreciate about your child daily
- **Resource Exploration**: Read one new resource each week to deepen understanding
- **Pattern Recognition**: Review mood and communication trends monthly to identify patterns
- **Perspective Taking**: Use the "Their Perspective" prompts to build empathy
- **Chatbot Assistance**: Ask the ADHD Support Assistant when you have specific questions
- **Progress Celebration**: Acknowledge improvements in communication and task completion
- **Consistency**: Regular use provides the most valuable insights and progress

### Best Practices for Supporting ADHD

The dashboard is designed around these evidence-based approaches:

1. **Focus on Strengths**: Recognize and celebrate your child's unique abilities
2. **Establish Routines**: Consistent structures help manage ADHD challenges
3. **Break Down Tasks**: Divide larger goals into manageable steps
4. **Provide Clear Expectations**: Be specific about what success looks like
5. **Offer Choices**: Promote autonomy within appropriate boundaries
6. **Use Visual Reminders**: Visual cues support memory and organization
7. **Practice Active Listening**: Give full attention during conversations
8. **Validate Feelings**: Acknowledge emotions before problem-solving
9. **Collaborate on Solutions**: Work together to address challenges
10. **Celebrate Progress**: Recognize improvement, not just perfection

### For Developers

The codebase is designed to be extensible and maintainable.

- **Modular Architecture**: Components are separated for easier maintenance
- **CSS Organization**: Styles are divided by feature area
- **API Documentation**: Server endpoints are documented in `/server/README.md`
- **Chatbot Customization**: Extend AI responses in `/server/chatbot.js`
- **Database Models**: MongoDB schemas are defined in `/server/models/`
- **Frontend JavaScript**: Organized by component in the `/js` directory
- **Responsive Testing**: Test all changes across multiple device sizes
- **Accessibility**: Maintain WCAG compliance for all new features
- **Performance**: Optimize asset sizes and minimize API calls
- **Documentation**: Update README and inline comments for any changes

## Future Enhancements

The roadmap for future development includes:

- **Mobile App Version**: Native applications with push notifications
- **Data Visualization Dashboard**: Advanced analytics for long-term trends
- **Collaborative Features**: Shared access for family members and support professionals
- **Calendar Integration**: Sync with Google Calendar, Apple Calendar, etc.
- **Customizable Dashboard**: User-configurable layout and widgets
- **Additional Language Support**: Internationalization for broader accessibility
- **Printable Reports**: Formatted summaries for healthcare provider visits
- **Goal Setting Module**: Structured approach to setting and tracking ADHD-friendly goals
- **Medication Tracking**: Detailed logging of medication effects and timing
- **Community Features**: Optional sharing of anonymized insights with other parents

## Troubleshooting

Common issues and their solutions:

- **Backend Connection Errors**: Verify the API endpoint in the frontend configuration
- **Database Connection Issues**: Check MongoDB Atlas connection string and network access settings
- **Missing Environment Variables**: Ensure all required variables are set in the .env file
- **CORS Errors**: Verify that the backend CORS configuration includes your frontend domain
- **Slow Performance**: Check for unoptimized images or excessive API calls
- **Mobile Display Problems**: Test on various device sizes and adjust responsive breakpoints
- **Chatbot Not Responding**: Verify AI service credentials and fallback mechanisms

## Acknowledgments

- Design inspired by Prudential.com branding elements
- Created during Neurodiversity Awareness Month (April)
- Built with Manus AI as a vibe coding demonstration
- Resources curated from CHADD, ADDitude Magazine, and Understood.org
- Special thanks to the ADHD community for insights and feedback

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Contact

For questions or feedback, please open an issue on this repository or contact the project maintainer.

---

*"The biggest gift you can give someone with ADHD is to understand that their brain works differently, not less effectively."* — Dr. Edward Hallowell, ADHD Expert
