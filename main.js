// Add chatbot functionality to the ADHD dashboard

document.addEventListener('DOMContentLoaded', function() {
    // Set current date
    const currentDateElement = document.getElementById('current-date');
    if (currentDateElement) {
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        const today = new Date();
        currentDateElement.textContent = today.toLocaleDateString('en-US', options);
    }

    // Task checkbox functionality
    const taskCheckboxes = document.querySelectorAll('.task-checkbox');
    taskCheckboxes.forEach(checkbox => {
        checkbox.addEventListener('change', function() {
            const label = this.nextElementSibling;
            if (this.checked) {
                label.classList.add('task-completed');
            } else {
                label.classList.remove('task-completed');
            }
            updateTaskProgress();
        });
    });

    // Mobile menu toggle
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const nav = document.querySelector('.nav');
    if (mobileMenuBtn && nav) {
        mobileMenuBtn.addEventListener('click', function() {
            nav.classList.toggle('active');
        });
    }

    // Update task progress
    function updateTaskProgress() {
        const totalTasks = document.querySelectorAll('.task-checkbox').length;
        const completedTasks = document.querySelectorAll('.task-checkbox:checked').length;
        const progressPercentage = (completedTasks / totalTasks) * 100;
        
        const progressBar = document.querySelector('.task-section .progress-bar');
        if (progressBar) {
            progressBar.style.width = `${progressPercentage}%`;
            
            const progressText = progressBar.parentElement.nextElementSibling;
            if (progressText) {
                progressText.textContent = `${Math.round(progressPercentage)}% of tasks completed this week`;
            }
        }
    }

    // Initialize task progress
    updateTaskProgress();

    // Communication log modal functionality
    const addCommunicationBtn = document.getElementById('add-communication-btn');
    const communicationModal = document.getElementById('communication-modal');
    const closeModal = document.querySelector('.close-modal');
    const cancelComm = document.getElementById('cancel-comm');
    
    if (addCommunicationBtn && communicationModal) {
        addCommunicationBtn.addEventListener('click', function() {
            communicationModal.style.display = 'block';
        });
    }
    
    if (closeModal) {
        closeModal.addEventListener('click', function() {
            communicationModal.style.display = 'none';
        });
    }
    
    if (cancelComm) {
        cancelComm.addEventListener('click', function() {
            communicationModal.style.display = 'none';
        });
    }
    
    // Close modal when clicking outside
    window.addEventListener('click', function(event) {
        if (event.target === communicationModal) {
            communicationModal.style.display = 'none';
        }
    });
    
    // Communication form submission
    const communicationForm = document.getElementById('communication-form');
    if (communicationForm) {
        communicationForm.addEventListener('submit', function(event) {
            event.preventDefault();
            // Form processing would go here
            communicationModal.style.display = 'none';
            // Show success message or update timeline
            alert('Communication entry saved successfully!');
        });
    }

    // Resource category buttons
    const categoryBtns = document.querySelectorAll('.category-btn');
    categoryBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            categoryBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            // Filter resources based on category
        });
    });
    
    // Resource view toggle
    const viewBtns = document.querySelectorAll('.view-btn');
    const resourceGrid = document.querySelector('.resource-grid');
    viewBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            viewBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            
            // Toggle between grid and list view
            if (this.querySelector('.fa-list') && resourceGrid) {
                resourceGrid.classList.remove('resource-grid');
                resourceGrid.classList.add('resource-list');
            } else if (this.querySelector('.fa-th-large') && resourceGrid) {
                resourceGrid.classList.remove('resource-list');
                resourceGrid.classList.add('resource-grid');
            }
        });
    });

    // Mood option selection
    const moodOptions = document.querySelectorAll('.mood-option');
    moodOptions.forEach(option => {
        option.addEventListener('click', function() {
            moodOptions.forEach(o => o.classList.remove('selected'));
            this.classList.add('selected');
        });
    });
    
    // Calendar day selection
    const calendarDays = document.querySelectorAll('.calendar-day:not(.empty)');
    calendarDays.forEach(day => {
        day.addEventListener('click', function() {
            // Show mood details for selected day
            const date = this.querySelector('.calendar-date').textContent;
            const mood = this.querySelector('.calendar-mood')?.textContent || 'No mood recorded';
            
            // This would typically update a detail view, but for demo we'll use alert
            if (this.querySelector('.calendar-mood')) {
                alert(`Mood for April ${date}, 2025: ${mood}`);
            }
        });
    });
    
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
                
                // Close mobile menu after navigation
                if (nav.classList.contains('active')) {
                    nav.classList.remove('active');
                }
            }
        });
    });
    
    // Add fade-in animation to sections as they come into view
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };
    
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    document.querySelectorAll('.dashboard-section').forEach(section => {
        observer.observe(section);
    });

    // Sticky header functionality
    window.addEventListener('scroll', function() {
        const header = document.querySelector('.header');
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Chatbot functionality
    // Create chatbot container if it doesn't exist
    if (!document.querySelector('.chatbot-container')) {
        createChatbot();
    }

    function createChatbot() {
        const chatbotContainer = document.createElement('div');
        chatbotContainer.className = 'chatbot-container';
        
        chatbotContainer.innerHTML = `
            <div class="chatbot-header">
                <div class="chatbot-title">
                    <i class="fas fa-robot"></i>
                    ADHD Support Assistant
                </div>
                <button class="chatbot-toggle">
                    <i class="fas fa-chevron-up"></i>
                </button>
            </div>
            <div class="chatbot-body">
                <div class="chat-message bot">
                    <div class="message-content">
                        Hello! I'm here to help with ADHD-related questions. How can I assist you today?
                    </div>
                </div>
            </div>
            <div class="chatbot-input">
                <input type="text" placeholder="Type your question here..." id="chatbot-input-field">
                <button id="chatbot-send-btn">
                    <i class="fas fa-paper-plane"></i>
                </button>
            </div>
        `;
        
        document.body.appendChild(chatbotContainer);
        
        // Chatbot toggle functionality
        const chatbotToggle = chatbotContainer.querySelector('.chatbot-toggle');
        chatbotToggle.addEventListener('click', function() {
            chatbotContainer.classList.toggle('open');
            
            // Change icon based on state
            const icon = this.querySelector('i');
            if (chatbotContainer.classList.contains('open')) {
                icon.className = 'fas fa-chevron-down';
            } else {
                icon.className = 'fas fa-chevron-up';
            }
        });
        
        // Chatbot input functionality
        const chatbotInput = document.getElementById('chatbot-input-field');
        const chatbotSendBtn = document.getElementById('chatbot-send-btn');
        const chatbotBody = chatbotContainer.querySelector('.chatbot-body');
        
        function sendMessage() {
            const message = chatbotInput.value.trim();
            if (message) {
                // Add user message
                addMessage(message, 'user');
                
                // Clear input
                chatbotInput.value = '';
                
                // Get bot response after a short delay
                setTimeout(() => {
                    const response = getBotResponse(message);
                    addMessage(response, 'bot');
                    
                    // Scroll to bottom
                    chatbotBody.scrollTop = chatbotBody.scrollHeight;
                }, 500);
            }
        }
        
        chatbotSendBtn.addEventListener('click', sendMessage);
        
        chatbotInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                sendMessage();
            }
        });
        
        function addMessage(message, sender) {
            const messageElement = document.createElement('div');
            messageElement.className = `chat-message ${sender}`;
            
            messageElement.innerHTML = `
                <div class="message-content">
                    ${message}
                </div>
            `;
            
            chatbotBody.appendChild(messageElement);
            
            // Scroll to bottom
            chatbotBody.scrollTop = chatbotBody.scrollHeight;
        }
        
        function getBotResponse(message) {
            // Simple response logic based on keywords
            message = message.toLowerCase();
            
            if (message.includes('medication') || message.includes('meds')) {
                return "Medication can be an important part of ADHD treatment. It's best to discuss specific medication questions with your healthcare provider. Remember that finding the right medication and dosage may take time and adjustments.";
            }
            else if (message.includes('routine') || message.includes('schedule')) {
                return "Consistent routines can be very helpful for people with ADHD. Try to establish regular times for meals, homework, play, and sleep. Visual schedules and timers can also be useful tools.";
            }
            else if (message.includes('homework') || message.includes('study')) {
                return "For homework success, try breaking assignments into smaller chunks, using timers for focused work periods (like the Pomodoro technique), and creating a distraction-free study environment. Praise effort rather than just results.";
            }
            else if (message.includes('focus') || message.includes('attention') || message.includes('concentrate')) {
                return "To help with focus, try breaking tasks into smaller steps, eliminating distractions, using timers for short work periods, and incorporating movement breaks. Remember that attention challenges are a core aspect of ADHD, not a lack of effort or willpower.";
            }
            else if (message.includes('angry') || message.includes('frustrat') || message.includes('emotion')) {
                return "Emotional regulation can be challenging with ADHD. Try to recognize emotional triggers, develop calming strategies together, and create a safe space for expressing feelings. Remember that emotional intensity is often part of ADHD and not intentional defiance.";
            }
            else if (message.includes('school') || message.includes('teacher') || message.includes('iep') || message.includes('504')) {
                return "Educational accommodations can be very helpful. Consider discussing an IEP or 504 plan with your school. Effective accommodations might include preferential seating, extended time for tests, or breaking assignments into smaller parts.";
            }
            else if (message.includes('sleep') || message.includes('bedtime') || message.includes('tired')) {
                return "Sleep issues are common with ADHD. Try establishing a consistent bedtime routine, limiting screen time before bed, ensuring the bedroom is cool and dark, and considering whether medication timing might be affecting sleep.";
            }
            else if (message.includes('diet') || message.includes('food') || message.includes('eat')) {
                return "While there's no specific ADHD diet, regular healthy meals can help maintain stable energy and focus. Some find that reducing sugar and processed foods helps, but research is mixed. Pay attention to whether certain foods seem to affect symptoms.";
            }
            else if (message.includes('exercise') || message.includes('physical') || message.includes('active')) {
                return "Physical activity can be very beneficial for ADHD. Regular exercise can help improve attention, reduce hyperactivity and impulsivity, boost mood, and improve sleep. Even short movement breaks throughout the day can be helpful.";
            }
            else if (message.includes('teen') || message.includes('adolescent') || message.includes('teenager')) {
                return "Parenting teens with ADHD involves balancing support with growing independence. Focus on developing executive function skills, maintaining open communication, and collaborating on solutions rather than imposing rules.";
            }
            else if (message.includes('adult') || message.includes('college') || message.includes('work')) {
                return "Adults with ADHD may need different support strategies. Focus on strengths, develop organizational systems that work for them, and encourage self-advocacy skills. Remember that ADHD presents differently in adulthood but still impacts daily functioning.";
            }
            else if (message.includes('empathy') || message.includes('understand')) {
                return "Building empathy involves trying to see the world through your child's eyes. ADHD can make everyday tasks much more challenging. What might seem like laziness or defiance is often the result of executive function challenges. Validate their struggles while still encouraging growth.";
            }
            else if (message.includes('thank')) {
    
(Content truncated due to size limit. Use line ranges to read in chunks)