// MessageParser.js
class MessageParser {
    constructor(actionProvider, state) {
        this.actionProvider = actionProvider;
        this.state = state;
    }

    // Ye method messages ko handle karta hai
    parse(message) {
        console.log("Received message: ", message);  // Debugging purpose ke liye

        // Lowercase message for easy comparison
        const lowercaseMessage = message.toLowerCase();

        // Check for "hello"
        if (lowercaseMessage.includes("hello")) {
            this.actionProvider.handleHello(); // Trigger the action
        }

        // Check for "bye"
        if (lowercaseMessage.includes("bye")) {
            this.actionProvider.handleAdditionalMessage("Goodbye! Have a great day!");
        }

        // Check for "thank you"
        if (lowercaseMessage.includes("thank you")) {
            this.actionProvider.handleAdditionalMessage("You're welcome!");
        } 
    }
}

export default MessageParser;
