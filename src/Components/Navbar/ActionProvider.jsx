

// ActionProvider.js
class ActionProvider {
    constructor(createChatBotMessage, setStateFunc, createClientMessage) {
        this.createChatBotMessage = createChatBotMessage;
        this.setStateFunc = setStateFunc;
        this.createClientMessage = createClientMessage;
    }

    // Action handle karne ka function
    handleHello() {
        const message = this.createChatBotMessage("Hello! How can I assist you today?");
        this.setStateFunc(prevState => ({
            ...prevState,
            messages: [...prevState.messages, message]  // Yahan message add karo
        }));
    }

    // Additional messages handle karne ka new action
    handleAdditionalMessage(text) {
        const message = this.createChatBotMessage(text);
        this.setStateFunc(prevState => ({
            ...prevState,
            messages: [...prevState.messages, message]  // Yahan message add karo
        }));
    }
}

export default ActionProvider;
