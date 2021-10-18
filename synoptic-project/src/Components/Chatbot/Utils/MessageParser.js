class MessageParser {
	constructor(actionProvider, state) {
		this.actionProvider = actionProvider;
		this.state = state;
	}

    parse = (message) => {
		const lowercase = message.toLowerCase();

		if (
			lowercase.includes('holiday') ||
			lowercase.includes('book') ||
			lowercase.includes('booking') ||
			lowercase.includes('travel') ||
			lowercase.includes('abroad')
		) {
			return this.actionProvider.handleTempOptions();
		}
		else if (
			lowercase.includes('hot') ||
			lowercase.includes('mild') ||
			lowercase.includes('cold') 
		) {
			return this.actionProvider.handleCountryOptions();
		}
	};
}

export default MessageParser;