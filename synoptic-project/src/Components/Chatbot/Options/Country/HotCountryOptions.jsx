import React from 'react';
import '../Options.css';

const HotCountryOptions = (props) => {
	const options = [
		{
			text: 'Australia',
			type: 'hot',
			handler: props,
			id: 5
		},
		{
			text: 'U.A.E',
			type: 'hot',
			handler: props,
			id: 9
		},
		{
			text: 'India',
			type: 'hot',
			handler: props,
			id: 16
		}
	];

	const buttons = options.map((options) => (
		<button key={options.id} onCLick={options.handler} className={'option-button'}>
			{options.text}
		</button>
	));

	return <div className="options-container">{buttons}</div>;
};

export default HotCountryOptions;
