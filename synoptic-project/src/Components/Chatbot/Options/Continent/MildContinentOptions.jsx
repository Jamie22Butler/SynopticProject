import React from 'react';
import '../Options.css';

const MildContinentOptions = (props) => {
	const options = [
		{
			text: 'Asia',
			temp: 'mild',
			handler: props,
			id: 6
		},
		{
			text: 'Europe',
			temp: 'mild',
			handler: props,
			id: 7
		},
		{
			text: 'North America',
			temp: 'mild',
			handler: props,
			id: 8
		},
		{
			text: 'Australia',
			temp: 'mild',
			handler: props,
			id: 9
		},
		{
			text: 'Africa',
			temp: 'mild',
			handler: props,
			id: 10
		},
	];

	const buttons = options.map((options) => (
		<button key={options.id} onCLick={options.handler} className={'option-button'}>
			{options.id}.{options.text}
		</button>
	));

	return <div className="options-container">{buttons}</div>;
};

export default MildContinentOptions;
