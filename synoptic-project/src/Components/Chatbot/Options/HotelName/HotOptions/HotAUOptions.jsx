import React from 'react';
import '../../Options.css';

const HotAUOptions = (props) => {
    const options = [
        {
            text: 'TooHot',
            price: 67,
            handler: props,
            id: 5
        }
    ]

    const buttons = options.map((options) => (
        <button key = {options.id} onCLick={options.handler} className={'option-button'}>
            {options.text} - £{options.price}/Night
        </button>
    ))

    return <div className="options-container">{buttons}</div>;
};

export default HotAUOptions;