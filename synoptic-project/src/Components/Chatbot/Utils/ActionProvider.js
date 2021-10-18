class ActionProvider {
	constructor(createChatBotMessage, setStateFunc) {
		this.createChatBotMessage = createChatBotMessage;
		this.setState = setStateFunc;
	}

	handleDefault = () => {
		const message = this.createChatBotMessage('How can I help?');
		this.addMessageToBotState(message);
	};

	addMessageToBotState = (messages) => {
		if (Array.isArray(messages)) {
			this.setState((state) => ({
				...state,
				message: [ ...state.messages, ...messages ]
			}));
		} else {
			this.setState((state) => ({
				...state,
				message: [ ...state.messages, messages ]
			}));
		}
	};
}

export default ActionProvider;