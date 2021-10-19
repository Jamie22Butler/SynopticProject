import { React, useState } from 'react';
import Chatbot from 'react-chatbot-kit';
import './Chatbot.css';

import ChatIcon from '@material-ui/icons/Chat';
import CloseIcon from '@material-ui/icons/Close';
import styled from 'styled-components';
import FeedbackModal from '../Feedback/Feedback';

import Config from './Utils/Config';
import MessageParser from './Utils/MessageParser';
import ActionProvider from './Utils/ActionProvider';

const CloseButton = styled(CloseIcon)`
    color: #00A59C;
    transition: all 0.3s ease-in-out;
    &:hover {
        color: #898D8D;
    }
`;

const ChatButton = styled(ChatIcon)`
    color: #00A59C;
    transition: all 0.3s ease-in-out;
    &:hover {
        color: #898D8D;
    }
`;

const ChatbotComponent = () => {
	const [ showBot, setShowBot ] = useState(false);
	const [ showButton, setShowButton ] = useState(false);
	const [ showFeedback, setShowFeedback ] = useState(false);

	//Toggles the visibility of the chatbot
	const toggleChat = () => {
		setShowBot(true);
		setShowButton(true);
	};

	const toggleFeedback = () => {
		setShowBot(false);
		setShowFeedback(true);
		setShowButton(false);
	};

	return (
		<div className="chatbot-wrapper">
			<div className="modal" data-testid="chat-bot" showmodal={showBot ? true : undefined}>
				<div className="modal-buttons">
					<button className="toggle-button" data-testid="toggle-button">
						<ChatButton onClick={toggleChat} />
					</button>
					<button className="toggle-button" data-testid="toggle-button">
						{showButton ? <CloseButton onClick={toggleFeedback} /> : null}
					</button>
				</div>
				<div className="modal-body">
					{showBot ? (
						<Chatbot config={Config} messageParser={MessageParser} actionProvider={ActionProvider} />
					) : null}
				</div>
				<div className = 'feedback-modal'>
					{
						showFeedback ? (
							<FeedbackModal />
						) : null
					}
				</div>
			</div>
		</div>
	);
};

export default ChatbotComponent;
