import { createChatBotMessage } from 'react-chatbot-kit';
import CategoryOptions from '../Options/Category/CategoryOptions';
import CountryOptions from '../Options/Country/MildCountryOptions';
import HotelOptions from '../Options/HotelName/HotelOptions';
import TempOptions from '../Options/TempRating/TempOptions';

const botName = 'Holiday Bot';
const config = {
	botName: botName,
	initialMessages: [
		createChatBotMessage(`Hey there I'm ${botName}!`),
		createChatBotMessage(`How can I help?`, {
			// Delay for cosmetic purposes in the render of the initial messages.
			delay: 1250
		})
	],
	widgets: [
		{
			widgetName: 'CategoryOptions',
			widgetFunc: (props) => <CategoryOptions {...props} />
		},
		{
			widgetName: 'tempOptions',
			widgetFunc: (props) => <TempOptions {...props} />
		},
		{
			widgetName: 'CountryOptions',
			widgetFunc: (props) => <CountryOptions {...props} />
		}
		// {
		//     widgetName: 'HotelOptions',
		//     widgetFunc: (props) => <HotelOptions {...props} />
		// }
	]
};

export default config;
