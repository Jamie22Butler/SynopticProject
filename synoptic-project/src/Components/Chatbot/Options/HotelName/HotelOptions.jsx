import React from 'react';
import '../Options.css';

const HotelOptions = (props) => {
    const options = [
        {
            text: 'Uptown',
            handler: props,
            id: 1
        },
        {
            text: '',
            handler: props,
            id: 2
        },
        {
            text: 'Ireland',
            handler: props,
            id: 3
        },
        {
            text: 'Morocco',
            handler: props,
            id: 4
        },
        {
            text: 'Australia',
            handler: props,
            id: 5
        },
        {
            text: 'The Maldives',
            handler: props,
            id: 6
        },
        {
            text: 'France',
            handler: props,
            id: 7
        },
        {
            text: 'South Afrcia',
            handler: props,
            id: 8
        },
        {
            text: 'U.A.E',
            handler: props,
            id: 9
        },
        {
            text: 'French Polynesia',
            handler: props,
            id: 10
        },
        {
            text: 'USA',
            handler: props,
            id: 11
        },
        {
            text: 'Croatia',
            handler: props,
            id: 12
        },
        {
            text: 'Scotland',
            handler: props,
            id: 13
        },
        {
            text: 'Italy',
            handler: props,
            id: 14
        },
        {
            text: 'Bhutan',
            handler: props,
            id: 15
        },
        {
            text: 'India',
            handler: props,
            id: 16
        },
        {
            text: 'New Zealand',
            handler: props,
            id: 17
        },
        {
            text: 'Cuba',
            handler: props,
            id: 18
        },
        {
            text: 'Japan',
            handler: props,
            id: 19
        },
        {
            text: 'Antarctica',
            handler: props,
            id: 20
        },
        {
            text: 'Greenland',
            handler: props,
            id: 21
        }
    ]

    const buttons = options.map((options) => (
        <button key = {options.id} onCLick={options.handler} className={'option-button'}>
            {options.text}
        </button>
    ))

    return <div className="options-container">{buttons}</div>;
};

export default HotelOptions;