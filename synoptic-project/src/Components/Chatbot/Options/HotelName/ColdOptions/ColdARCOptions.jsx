import React from 'react';
import '../../Options.css';

const ColdARCOptions = (props) => {
    const options = [
        {
            text: 'NorthStar',
            price: 25,
            handler: props,
            id: 21
        }
    ]

    const buttons = options.map((options) => (
        <button key = {options.id} onCLick={options.handler} className={'option-button'}>
            {options.text} - £{options.price}/Night
        </button>
    ))

    return <div className="options-container">{buttons}</div>;
};

export default ColdARCOptions;