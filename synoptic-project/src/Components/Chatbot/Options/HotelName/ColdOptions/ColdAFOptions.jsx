import React from 'react';
import '../../Options.css';

const ColdAFOptions = (props) => {
    const options = [
        {
            text: 'Twighlight',
            price: 50,
            handler: props,
            id: 4
        }
    ]

    const buttons = options.map((options) => (
        <button key = {options.id} onCLick={options.handler} className={'option-button'}>
            {options.text} - £{options.price}/Night
        </button>
    ))

    return <div className="options-container">{buttons}</div>;
};

export default ColdAFOptions;