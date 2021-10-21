import React from 'react';
import '../Options.css';

const CategoryOptions = (props) => {
	const options = [
		{
			text: 'Lazy',
			handler: props,
			id: 1
		},
		{
			text: 'Active',
			handler: props,
			id: 2
		}
	];

	const buttons = options.map((options) => (
		<button key={options.id} onCLick={options.handler} className={'option-button'}>
			{options.text}
		</button>
	));

	return <div className="options-container">{buttons}</div>;
};

export default CategoryOptions;
