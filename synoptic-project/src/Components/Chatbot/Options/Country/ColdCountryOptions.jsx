import React from 'react';
import '../Options.css';

const ColdCountryOptions = (props) => {
	const options = [
		{
			text: 'Morocco',
			type: 'cold',
			handler: props,
			id: 4
		},

		{
			text: 'Antarctica',
			type: 'cold',
			handler: props,
			id: 20
		},
		{
			text: 'Greenland',
			type: 'cold',
			handler: props,
			id: 21
		}
	];

	const buttons = options.map((options) => (
		<button key={options.id} onCLick={options.handler} className={'option-button'}>
			{options.text}
		</button>
	));

	return <div className="options-container">{buttons}</div>;
};

export default ColdCountryOptions;
