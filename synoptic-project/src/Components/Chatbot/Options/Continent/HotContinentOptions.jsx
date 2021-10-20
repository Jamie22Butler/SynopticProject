import React from 'react';
import '../Options.css';

const HotContinentOptions = (props) => {
	const options = [
		{
			text: 'Australia',
			temp: 'hot',
			handler: props,
			id: 1
		},
		{
			text: 'Asia',
			temp: 'hot',
			handler: props,
			id: 2
		}
	];

	const buttons = options.map((options) => (
		<button key={options.id} onCLick={options.handler} className={'option-button'}>
			{options.text}, {options.temp}
		</button>
	));

	return <div className="options-container">{buttons}</div>;
};

export default HotContinentOptions;
