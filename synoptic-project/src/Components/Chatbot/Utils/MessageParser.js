import {collection, addDoc} from "@firebase/firestore";
import db from "../../../Utils/Firebase";

const writeToFirebase = async (input) => {
	const docRef = await addDoc(collection(db, "Messages"), {
		message: input
	});
};

class MessageParser {
	constructor(actionProvider, state) {
		this.actionProvider = actionProvider;
		this.state = state;
	}
	

    parse = (message) => {
		writeToFirebase(message)
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

		return this.actionProvider.handleDefault();
	};
}

export default MessageParser;