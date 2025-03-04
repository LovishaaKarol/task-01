// Chatbot logic with responses (could be expanded to use NLP.js or other libraries)

const responses = {
    "hi": "Hello! 👋 How can I assist you today?",
    "hello": "Hi there! How can I help?",
    "how are you": "I'm just a bot, but I'm doing great! 😊 How about you?",
    "bye": "Goodbye! Have a great day! 👋",
    "default": "Sorry, I didn't quite understand that. Can you try asking in a different way?"
};

function sendMessage() {
    const userInput = document.getElementById("user-input").value.trim().toLowerCase();
    const chatBox = document.getElementById("chat-box");

    if (userInput === "") return; // Prevent empty messages from being sent

    // Display user's message
    const userMessage = document.createElement("div");
    userMessage.classList.add("user-message");
    const userText = document.createElement("p");
    userText.textContent = userInput;
    userMessage.appendChild(userText);
    chatBox.appendChild(userMessage);

    // Get bot's response
    const botResponse = getBotResponse(userInput);

    // Display bot's message
    const botMessage = document.createElement("div");
    botMessage.classList.add("bot-message");
    const botText = document.createElement("p");
    botText.textContent = botResponse;
    botMessage.appendChild(botText);
    chatBox.appendChild(botMessage);

    // Scroll to the bottom
    chatBox.scrollTop = chatBox.scrollHeight;

    // Clear input field
    document.getElementById("user-input").value = "";
}

function getBotResponse(userInput) {
    if (responses[userInput]) {
        return responses[userInput];
    } else {
        return responses["default"];
    }
}

