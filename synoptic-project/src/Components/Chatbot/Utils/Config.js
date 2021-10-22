import { createChatBotMessage } from 'react-chatbot-kit';
import CategoryOptions from '../Options/Category/CategoryOptions';
import ColdContinentOptions from '../Options/Continent/ColdContinentOptions'
import MildContinentOptions from '../Options/Continent/MildContinentOptions'
import HotContinentOptions from '../Options/Continent/HotContinentOptions'

import MildNAOptions from '../Options/HotelName/MildOptions/MildNAOptions';
import MildEUOptions from '../Options/HotelName/MildOptions/MildEUOptions';
import MildAFOptions from '../Options/HotelName/MildOptions/MildAFOptions'
import MildASOptions from '../Options/HotelName/MildOptions/MildASOptions'
import MildAUOptions from '../Options/HotelName/MildOptions/MildAUOptions'

import ColdARCOptions from '../Options/HotelName/ColdOptions/ColdARCOptions';
import ColdANTOptions from '../Options/HotelName/ColdOptions/ColdANTOptions';
import ColdAFOptions from '../Options/HotelName/ColdOptions/ColdAFOptions';

import HotASOptions from '../Options/HotelName/HotOptions/HotASOptions';
import HotAUOptions from '../Options/HotelName/HotOptions/HotAUOptions';

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
			widgetName: 'ColdContinentOptions',
			widgetFunc: (props) => <ColdContinentOptions {...props} />
		},
        {
			widgetName: 'HotContinentOptions',
			widgetFunc: (props) => <HotContinentOptions {...props} />
		},
        {
			widgetName: 'MildContinentOptions',
			widgetFunc: (props) => <MildContinentOptions {...props} />
		},
		{
		    widgetName: 'MildNAOptions',
		    widgetFunc: (props) => <MildNAOptions {...props} />
		},
		{
		    widgetName: 'MildEUOptions',
		    widgetFunc: (props) => <MildEUOptions {...props} />
		},
		{
		    widgetName: 'MildAFOptions',
		    widgetFunc: (props) => <MildAFOptions {...props} />
		},
		{
		    widgetName: 'MildAUOptions',
		    widgetFunc: (props) => <MildAUOptions {...props} />
		},
		{
		    widgetName: 'MildASOptions',
		    widgetFunc: (props) => <MildASOptions {...props} />
		},
		{
		    widgetName: 'ColdANTOptions',
		    widgetFunc: (props) => <ColdANTOptions {...props} />
		},
		{
		    widgetName: 'ColdARCOptions',
		    widgetFunc: (props) => <ColdARCOptions {...props} />
		},
		{
		    widgetName: 'ColdAFOptions',
		    widgetFunc: (props) => <ColdAFOptions {...props} />
		},
		{
		    widgetName: 'HotAUOptions',
		    widgetFunc: (props) => <HotAUOptions {...props} />
		},
		{
		    widgetName: 'HotASOptions',
		    widgetFunc: (props) => <HotASOptions {...props} />
		}
	]
};

export default config;
