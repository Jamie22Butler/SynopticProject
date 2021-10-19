class ActionProvider {
	constructor(createChatBotMessage, setStateFunc) {
		this.createChatBotMessage = createChatBotMessage;
		this.setState = setStateFunc;
	}

	//Handles the parsing for Temp input
	handleTempOptions = () => {
		const tempMessage = this.createChatBotMessage("Great, let's get you started.");

		this.addMessageToBotState(tempMessage);

		const tempGreet = this.createChatBotMessage('First things first...', {
			delay: 2000
		});

		this.addMessageToBotState(tempGreet);

		const tempResponse = this.createChatBotMessage('What type of climate were you looking to travel to?', {
			widget: 'tempOptions',
			delay: 4000
		});
		this.addMessageToBotState(tempResponse);
	};

	//Handles the parsing for country input
	handleCountryOptions = () => {
		const countryMessage = this.createChatBotMessage('Now we need to select a country!', {
			widget: 'CountryOptions',
			delay: 1500
		});
		this.addMessageToBotState(countryMessage);
	};

	// Default message handler for the chatbot
	handleDefault = () => {
		const defaultOne = this.createChatBotMessage('Sorry, I couldn\'t quite answer that...');
		this.addMessageToBotState(defaultOne);
		const defaultTwo = this.createChatBotMessage('You\'ll have the opportunity to offer feedback when you close the chat agent.', {
			delay: 1500
		});
		this.addMessageToBotState(defaultTwo);
	};

	addMessageToBotState = (messages) => {
		if (Array.isArray(messages)) {
			this.setState((state) => ({
				...state,
				messages: [ ...state.messages, ...messages ]
			}));
		} else {
			this.setState((state) => ({
				...state,
				messages: [ ...state.messages, messages ]
			}));
		}
	};
}

export default ActionProvider;
