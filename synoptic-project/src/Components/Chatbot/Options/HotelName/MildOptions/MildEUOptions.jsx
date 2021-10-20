import React from 'react';
import '../../Options.css';

const MildEUOptions = (props) => {
    const options = [
        {
            text: 'WindyBeach',
            price: 42,
            handler: props,
            id: 1
        },
        {
            text: 'Eiffel Park',
            price: 45,
            handler: props,
            id: 2
        },
        {
            text: 'Castle Town',
            price: 42,
            handler: props,
            id: 3
        },
        {
            text: 'WineValley',
            price: 25,
            handler: props,
            id: 4
        },
        {
            text: 'IslandHopper',
            price: 78,
            handler: props,
            id: 5
        },
    ]

    const buttons = options.map((options) => (
        <button key = {options.id} onCLick={options.handler} className={'option-button'}>
            {options.text} - £{options.price}/Night
        </button>
    ))

    return <div className="options-container">{buttons}</div>;
};

export default MildEUOptions;