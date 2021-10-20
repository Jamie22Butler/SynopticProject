import React from 'react';
import '../../Options.css';

const MildASOptions = (props) => {
    const options = [
        {
            text: 'Uptown',
            price: 120,
            handler: props,
            id: 1
        },
        {
            text: 'WearyTraveller',
            price: 54,
            handler: props,
            id: 15
        },
        {
            text: 'TechCity',
            price: 71,
            handler: props,
            id: 19
        },
    ]

    const buttons = options.map((options) => (
        <button key = {options.id} onCLick={options.handler} className={'option-button'}>
            {options.text} - £{options.price}/Night
        </button>
    ))

    return <div className="options-container">{buttons}</div>;
};

export default MildASOptions;