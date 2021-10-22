import { collection, addDoc } from '@firebase/firestore';
import db from '../../../Utils/Firebase';

const writeToFirebase = async (input) => {
	// eslint-disable-next-line -- docRef is never used outside of this  function due to the design
	const docRef = await addDoc(collection(db, 'Messages'), {
		message: input
	});
};

class MessageParser {
	constructor(actionProvider, state) {
		this.actionProvider = actionProvider;
		this.state = state;
	}

	parse = (message) => {
		writeToFirebase(message);
		const lowercase = message.toLowerCase();

		if (
			lowercase.includes('holiday') ||
			lowercase.includes('book') ||
			lowercase.includes('booking') ||
			lowercase.includes('travel') ||
			lowercase.includes('abroad')
		) {
			return this.actionProvider.handleTempOptions();
		} else if (lowercase.includes('hot')) {
			return this.actionProvider.handleHotContinentOptions();
		} else if (lowercase.includes('mild')) {
			return this.actionProvider.handleMildContinentOptions();
		} else if (lowercase.includes('cold')) {
			return this.actionProvider.handleColdContinentOptions();
		} else if (lowercase.includes('one')) {
			return this.actionProvider.handleColdAFOptions();
		} else if (lowercase.includes('two')) {
			return this.actionProvider.handleColdANTOptions();
		} else if (lowercase.includes('three')) {
			return this.actionProvider.handleColdARCOptions();
		} else if (lowercase.includes('four')) {
			return this.actionProvider.handleHotAUOptions();
		} else if (lowercase.includes('five')) {
			return this.actionProvider.handleHotASOptions();
		} else if (lowercase.includes('six')) {
			return this.actionProvider.handleMildASOptions();
		} else if (lowercase.includes('seven')) {
			return this.actionProvider.handleMildEUOptions();
		} else if (lowercase.includes('eight')) {
			return this.actionProvider.handleMildNAOptions();
		}  else if (lowercase.includes('nine')) {
			return this.actionProvider.handleMildAUOptions();
		} else if (lowercase.includes('ten')) {
			return this.actionProvider.handleMildAFOptions();
		}

		return this.actionProvider.handleDefault();
	};
}

export default MessageParser;
