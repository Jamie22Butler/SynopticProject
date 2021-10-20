import React from 'react';
import '../Options.css';

const MildContinentOptions = (props) => {
	const options = [
		{
			text: 'Asia',
			temp: 'mild',
			handler: props,
			id: 1
		},
		{
			text: 'Europe',
			temp: 'mild',
			handler: props,
			id: 2
		},
		{
			text: 'North America',
			temp: 'mild',
			handler: props,
			id: 3
		},
		{
			text: 'Australia',
			temp: 'mild',
			handler: props,
			id: 4
		},
		{
			text: 'Africa',
			temp: 'mild',
			handler: props,
			id: 5
		},
	];

	const buttons = options.map((options) => (
		<button key={options.id} onCLick={options.handler} className={'option-button'}>
			{options.text}, {options.temp}
		</button>
	));

	return <div className="options-container">{buttons}</div>;
};

export default MildContinentOptions;
