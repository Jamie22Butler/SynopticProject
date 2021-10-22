import React from 'react';
import '../../Options.css';

const ColdANTOptions = (props) => {
    const options = [
        {
            text: 'IceHotel',
            price: 270,
            handler: props,
            id: 20
        }
    ]

    const buttons = options.map((options) => (
        <button key = {options.id} onCLick={options.handler} className={'option-button'}>
            {options.text} - £{options.price}/Night
        </button>
    ))

    return <div className="options-container">{buttons}</div>;
};

export default ColdANTOptions;