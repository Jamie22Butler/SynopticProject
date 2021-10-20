import React from 'react';
import '../../Options.css';

const MildAFOptions = (props) => {
    const options = [
        {
            text: 'Castaway',
            price: 120,
            handler: props,
            id: 6
        },
        {
            text: 'The Cape',
            price: 78,
            handler: props,
            id: 8
        },
    ]

    const buttons = options.map((options) => (
        <button key = {options.id} onCLick={options.handler} className={'option-button'}>
            {options.text} - £{options.price}/Night
        </button>
    ))

    return <div className="options-container">{buttons}</div>;
};

export default MildAFOptions;