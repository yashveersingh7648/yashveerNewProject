import React, { useState } from 'react';
import { Chatbot } from 'react-chatbot-kit'; // Chatbot import kiya
import 'react-chatbot-kit/build/main.css'; // CSS import ki
import MessageParser from './MessageParser'; // MessageParser import kiya
import ActionProvider from './ActionProvider'; // ActionProvider import kiya

const ChatbotComponent = () => {
  const [isOpen, setIsOpen] = useState(false); // State for toggling chatbot visibility

  // Function to toggle chatbot visibility
  const handleChatbotToggle = () => {
    setIsOpen(!isOpen);
  };

  const config = {
    botName: "CipherBot", // Bot ka naam
    initialMessages: [
      {
        text: "Hello! How can I assist you today?", // Initial message
        sender: "bot",
      },
    ],
    customStyles: {
      botMessageBox: {
        backgroundColor: "#2D87F0", // Bot message box ka color
      },
      chatButton: {
        backgroundColor: "#2D87F0", // Chatbot button ka color
      },
    },
  };

  return (
    <div>
      {/* Chatbot toggle karne ka button */}
      <button className="chatbot-button" onClick={handleChatbotToggle}>
        🗨️ {/* Chatbot icon */}
      </button>

      {/* Agar isOpen state true hai, toh chatbot ko render karen */}
      {isOpen && (
        <div className="chatbot-container">
          <Chatbot
            config={config} // Chatbot configuration pass ki
            messageParser={MessageParser} // MessageParser ko pass kiya
            actionProvider={ActionProvider} // ActionProvider ko pass kiya
          />
        </div>
      )}
    </div>
  );
};

export default ChatbotComponent;
