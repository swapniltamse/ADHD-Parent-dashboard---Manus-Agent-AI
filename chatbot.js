// Client-side code to connect the chatbot to the backend AI service

document.addEventListener('DOMContentLoaded', function() {
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
                // Add user message to chat
                addMessage(message, 'user');
                
                // Clear input
                chatbotInput.value = '';
                
                // Show typing indicator
                const typingIndicator = document.createElement('div');
                typingIndicator.className = 'chat-message bot typing';
                typingIndicator.innerHTML = `
                    <div class="message-content">
                        <div class="typing-indicator">
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </div>
                `;
                chatbotBody.appendChild(typingIndicator);
                
                // Scroll to bottom
                chatbotBody.scrollTop = chatbotBody.scrollHeight;
                
                // Send message to backend API
                fetch('/api/chatbot', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ message: message }),
                })
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }
                    return response.json();
                })
                .then(data => {
                    // Remove typing indicator
                    const typingIndicator = document.querySelector('.typing-indicator');
                    if (typingIndicator) {
                        typingIndicator.parentElement.parentElement.remove();
                    }
                    
                    // Add bot response
                    addMessage(data.response, 'bot');
                })
                .catch(error => {
                    console.error('Error:', error);
                    
                    // Remove typing indicator
                    const typingIndicator = document.querySelector('.typing-indicator');
                    if (typingIndicator) {
                        typingIndicator.parentElement.parentElement.remove();
                    }
                    
                    // If API fails, use fallback response
                    getBotResponse(message).then(response => {
                        addMessage(response, 'bot');
                    });
                });
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
        
        // Fallback response function using HuggingFace Inference API
        async function getBotResponse(message) {
            try {
                // Using HuggingFace's free Inference API as a fallback
                const response = await fetch(
                    "https://api-inference.huggingface.co/models/facebook/blenderbot-400M-distill",
                    {
                        headers: { 
                            Authorization: "Bearer hf_demo_api_key",
                            "Content-Type": "application/json" 
                        },
                        method: "POST",
                        body: JSON.stringify({ inputs: message }),
                    }
                );
                
                const result = await response.json();
                if (result && result.generated_text) {
                    return result.generated_text;
                } else {
                    return getLocalFallbackResponse(message);
                }
            } catch (error) {
                console.error("Error with HuggingFace API:", error);
                return getLocalFallbackResponse(message);
            }
        }
        
        // Local fallback responses if both APIs fail
        function getLocalFallbackResponse(message) {
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
                return "Emotional regulation can be challenging with ADHD. Try to recognize emotional triggers, develop calming strategies together, and create a safe space for expressing feelings. Remember that emotional intensity is often part of ADHD and not intentionally disrespectful.";
            }
            else if (message.includes('school') || message.includes('teacher') || message.includes('iep') || message.includes('504')) {
                return "Educational accommodations can be very helpful. Consider discussing an IEP or 504 plan with your school. Effective accommodations might include preferential seating, extended time for tests, or breaking assignments into smaller parts.";
            }
            else if (message.includes('sleep') || message.includes('bedtime') || message.includes('tired')) {
                return "Sleep issues are common with ADHD. Try establishing a consistent bedtime routine, limiting screen time before bed, ensuring the bedroom is cool and dark, and considering whether medication timing might be affecting sleep.";
            }
            else if (message.includes('empathy') || message.includes('understand')) {
                return "Building empathy involves trying to see the world through your child's eyes. ADHD can make everyday tasks much more challenging. What might seem like laziness or defiance is often the result of executive function challenges. Validate their struggles while still encouraging growth.";
            }
            else if (message.includes('thank')) {
                return "You're welcome! I'm here to help whenever you have questions about supporting someone with ADHD.";
            }
            else if (message.includes('hello') || message.includes('hi') || message.includes('hey')) {
                return "Hello! I'm here to help with ADHD-related questions. What would you like to know about?";
            }
            else {
                return "That's a great question about ADHD. While I can provide general information, remember that each person's experience with ADHD is unique. Would you like to know about specific strategies, resources, or understanding ADHD behaviors?";
            }
        }
        
        // Show chatbot after a short delay
        setTimeout(() => {
            chatbotContainer.classList.add('open');
        }, 1000);
    }
});
