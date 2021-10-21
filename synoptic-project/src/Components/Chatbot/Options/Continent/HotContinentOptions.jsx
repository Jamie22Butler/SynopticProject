import React from 'react';
import '../Options.css';

const HotContinentOptions = (props) => {
	const options = [
		{
			text: 'Australia',
			temp: 'hot',
			handler: props,
			id: 4
		},
		{
			text: 'Asia',
			temp: 'hot',
			handler: props,
			id: 5
		}
	];

	const buttons = options.map((options) => (
		<button key={options.id} onCLick={options.handler} className={'option-button'}>
			{options.id}.{options.text}
		</button>
	));

	return <div className="options-container">{buttons}</div>;
};

export default HotContinentOptions;
