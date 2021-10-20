import React from 'react';
import '../../Options.css';

const MildAUOptions = (props) => {
    const options = [
        {
            text: 'SeaViews',
            price: 54,
            handler: props,
            id: 10
        },
        {
            text: 'ForestRetreat',
            price: 89,
            handler: props,
            id: 17
        },
    ]

    const buttons = options.map((options) => (
        <button key = {options.id} onCLick={options.handler} className={'option-button'}>
            {options.text} - £{options.price}/Night
        </button>
    ))

    return <div className="options-container">{buttons}</div>;
};

export default MildAUOptions;