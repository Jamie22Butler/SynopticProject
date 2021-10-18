import { createChatBotMessage } from 'react-chatbot-kit'

const botName = 'Holiday Bot'
const config = {
    botName: botName,
    initialMessages: [
        createChatBotMessage(`Hey there I'm ${botName}!`),
        createChatBotMessage(`How can I help?`, {
            // Delay for cosmetic purposes in the render of the initial messages.
            delay: 1250
        })
    ] 
};

export default config;