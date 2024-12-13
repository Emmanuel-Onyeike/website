document.addEventListener("DOMContentLoaded", function() {
    // Buttons for each option
    const paymentOption = document.getElementById("paymentOption");
    const loginOption = document.getElementById("loginOption");
    const registrationOption = document.getElementById("registrationOption");
    const userExperienceOption = document.getElementById("userExperienceOption");
    const chatMessages = document.getElementById("chatMessages");
    const messageInput = document.getElementById("messageInput");
    const sendBtn = document.getElementById("sendBtn");
    const sendSound = document.getElementById("sendSound");

    // Option solutions
    const solutions = {
        "Payments": "For payments, please follow our secure payment link: [payment link]",
        "Login": "To log in, please enter your username and password on the login page.",
        "Registration": "To register, click on the 'Register' button at the top of the page.",
        "User Experience": "For a better user experience, please update your app to the latest version."
    };

    // Handle click on options
    function handleOptionClick(option) {
        const solutionMessage = document.createElement("div");
        solutionMessage.classList.add("solution-message");
        solutionMessage.innerHTML = `<strong>Solution:</strong> ${solutions[option]}`;
        
        // Add email suggestion
        const emailMessage = document.createElement("div");
        emailMessage.classList.add("email-message");
        emailMessage.innerText = "For further assistance, you can email us at support@pa-learn.com";

        chatMessages.appendChild(solutionMessage);
        chatMessages.appendChild(emailMessage);

        // Scroll to the bottom
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }

    // Add event listeners to buttons
    paymentOption.addEventListener("click", function() {
        handleOptionClick("Payments");
    });
    loginOption.addEventListener("click", function() {
        handleOptionClick("Login");
    });
    registrationOption.addEventListener("click", function() {
        handleOptionClick("Registration");
    });
    userExperienceOption.addEventListener("click", function() {
        handleOptionClick("User Experience");
    });

    // Send user message
    sendBtn.addEventListener("click", function() {
        const userMessage = messageInput.value.trim();
        if (userMessage) {
            const messageDiv = document.createElement("div");
            messageDiv.classList.add("message", "sent");
            messageDiv.innerText = userMessage;
            chatMessages.appendChild(messageDiv);

            // Play send sound
            sendSound.play();

            // Clear input field
            messageInput.value = "";

            // Scroll to the bottom
            chatMessages.scrollTop = chatMessages.scrollHeight;

            // Check if the message contains "thanks" or "thank"
            if (userMessage.toLowerCase().includes("thanks") || userMessage.toLowerCase().includes("thank")) {
                setTimeout(function() {
                    const responseMessage = document.createElement("div");
                    responseMessage.classList.add("message", "received");
                    responseMessage.innerText = "You're welcome! Let us know if you need further assistance.";
                    chatMessages.appendChild(responseMessage);

                    // Play bell sound
                    const bellSound = new Audio("bell-sound.mp3"); // Replace with actual bell sound file
                    bellSound.play();

                    // Scroll to the bottom
                    chatMessages.scrollTop = chatMessages.scrollHeight;
                }, 500); // Delay for response
            }
        }
    });
});
