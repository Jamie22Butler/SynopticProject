import React from 'react';
import '../Options.css';

const MildCountryOptions = (props) => {
	const options = [
		{
			text: 'Indonesia',
			temp: 'mild',
			handler: props,
			id: 1
		},
		{
			text: 'USA',
			temp: 'mild',
			handler: props,
			id: 2
		},
		{
			text: 'Ireland',
			temp: 'mild',
			handler: props,
			id: 3
		},
		{
			text: 'The Maldives',
			temp: 'mild',
			handler: props,
			id: 6
		},
		{
			text: 'France',
			temp: 'mild',
			handler: props,
			id: 7
		},
		{
			text: 'South Afrcia',
			temp: 'mild',
			handler: props,
			id: 8
		},
		{
			text: 'French Polynesia',
			temp: 'mild',
			handler: props,
			id: 10
		},
		{
			text: 'USA',
			temp: 'mild',
			handler: props,
			id: 11
		},
		{
			text: 'Croatia',
			temp: 'mild',
			handler: props,
			id: 12
		},
		{
			text: 'Scotland',
			temp: 'mild',
			handler: props,
			id: 13
		},
		{
			text: 'Italy',
			temp: 'mild',
			handler: props,
			id: 14
		},
		{
			text: 'Bhutan',
			temp: 'mild',
			handler: props,
			id: 15
		},
		{
			text: 'New Zealand',
			temp: 'mild',
			handler: props,
			id: 17
		},
		{
			text: 'Cuba',
			temp: 'mild',
			handler: props,
			id: 18
		},
		{
			text: 'Japan',
			temp: 'mild',
			handler: props,
			id: 19
		}
	];

	const buttons = options.map((options) => (
		<button key={options.id} onCLick={options.handler} className={'option-button'}>
			{options.text}
		</button>
	));

	return <div className="options-container">{buttons}</div>;
};

export default MildCountryOptions;
