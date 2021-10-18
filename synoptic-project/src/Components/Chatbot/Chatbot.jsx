import { React, useState } from 'react';
import Chatbot from 'react-chatbot-kit';
import './Chatbot.css'

import Config from './Utils/Config';
import MessageParser from './Utils/MessageParser';
import ActionProvider from './Utils/ActionProvider';

const ChatbotComponent = () => {
	return (
		<div className="chatbot-wrapper">
			<div className="chatbot-header">
				<p>Chatbot</p>
			</div>
			<div className="modal" data-testid="chat-bot">
				<div className="modal-body">
					<Chatbot config={Config} messageParser={MessageParser} actionProvider={ActionProvider} />
				</div>
			</div>
		</div>
	);
};

export default ChatbotComponent;