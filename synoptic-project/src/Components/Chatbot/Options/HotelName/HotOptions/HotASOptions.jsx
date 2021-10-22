import React from 'react';
import '../../Options.css';

const HotASOptions = (props) => {
    const options = [
        {
            text: 'DesertDreams',
            price: 67,
            handler: props,
            id: 9
        },
        {
            text: 'HotTimes',
            price: 67,
            handler: props,
            id: 16
        }
    ]

    const buttons = options.map((options) => (
        <button key = {options.id} onCLick={options.handler} className={'option-button'}>
            {options.text} - £{options.price}/Night
        </button>
    ))

    return <div className="options-container">{buttons}</div>;
};

export default HotASOptions;