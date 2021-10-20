import React from 'react';
import '../Options.css';

const ColdContinentOptions = (props) => {
	const options = [
		{
			text: 'Africa',
			temp: 'cold',
			handler: props,
			id: 1
		},

		{
			text: 'Antarctica',
			temp: 'cold',
			handler: props,
			id: 2
		},
		{
			text: 'Arctic',
			temp: 'cold',
			handler: props,
			id: 3
		}
	];

	const buttons = options.map((options) => (
		<button key={options.id} onCLick={options.handler} className={'option-button'}>
			{options.text}, {options.temp}
		</button>
	));

	return <div className="options-container">{buttons}</div>;
};

export default ColdContinentOptions;
