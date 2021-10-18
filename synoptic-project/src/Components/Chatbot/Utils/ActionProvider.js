class ActionProvider {
	constructor(createChatBotMessage, setStateFunc) {
		this.createChatBotMessage = createChatBotMessage;
		this.setState = setStateFunc;
	}

	handleDefault = () => {
		const message = this.createChatBotMessage('How can I help?');
		this.addMessageToBotState(message);
	};

	addMessageToBotState = (message) => {
		if (Array.isArray(message)) {
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
