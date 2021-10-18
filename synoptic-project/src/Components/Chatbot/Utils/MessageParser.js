class MessageParser {
    constructor(actionProvier, state) {
        this.actionProvier = actionProvier;
        this.state = state;
    }

    parse = (message) => {
        const lowercase = message.toLowerCase();

        // Proper message parsing logic will be implemented in a later commit.
        console.log(lowercase)
    }
}

export default MessageParser;