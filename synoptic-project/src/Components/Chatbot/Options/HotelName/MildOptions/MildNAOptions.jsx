import React from 'react';
import '../../Options.css';

const MildNAOptions = (props) => {
    const options = [
        {
            text: 'Casablanca',
            price: 29,
            handler: props,
            id: 1
        },
        {
            text: 'Relaxamax',
            price: 28,
            handler: props,
            id: 2
        },
        {
            text: 'Apple City',
            price: 27,
            handler: props,
            id: 3
        }
    ]

    const buttons = options.map((options) => (
        <button key = {options.id} onCLick={options.handler} className={'option-button'}>
            {options.text} - £{options.price}/Night
        </button>
    ))

    return <div className="options-container">{buttons}</div>;
};

export default MildNAOptions;