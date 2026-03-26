function toggleChat(){
    const chatbox = document.getElementById("chatbox");
    chatbox.classList.toggle("chatbox_hidden");

    if (!chatbox.classList.contains("chatbox_hidden") && chatlog.innerHTML.trim() === "") {
        chatlog.innerHTML += `<div><strong>Bot:</strong> How can I help you?</div>`;
    }
}

function sendMessage(){
    const input = document.getElementById("user-input");
    const message = input.value.trim();
    if(message === "") return;

    const chatlog = document.getElementById("chat-log");
    chatlog.innerHTML += `<div><strong>You:</strong> ${message}</div>`;

    const response = getBotResponse(message.toLowerCase());
    chatlog.innerHTML += `<div><strong>Bot:</strong> ${response}</div>`;

    input.value = "";
    chatlog.scrollTop = chatlog.scrollHeight;
}

function getBotResponse(input){
    if (input.includes("hello") || input.includes("hi")) {
        return "Hello! I'm your assistant. Ask me about my portfolio.";
    } else if (input.includes("skills")) {
        return "I know HTML, CSS, Tailwind CSS, JavaScript, React, C++, and WordPress.";
    } else if (input.includes("projects")) {
        return "I've built a To-Do List, Restaurant Finder, Discord Clone, RazorPay Clone, FAQs Page, etc.";
    } else if (input.includes("contacts")) {
        return "You can contact me on my email: naveenudit68@gmail.com";
    } else if (input.includes("about me")) {
        return "I'm a passionate web developer with strong front-end and back-end skills.";
    } else {
        return "Sorry, I didn't understand. Ask about skills, projects, contact, or about me.";
    }
}
