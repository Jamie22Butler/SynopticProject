import React from 'react';
import '../Options.css';

import { createChatBotMessage } from 'react-chatbot-kit'

const handleCountryOptions = (props) => {
    createChatBotMessage(`So you've chosen a ${props.text} climate`, {
        widget: 'CountryOptions'
    })
}

    const TempOptions = (props) => {
        const options = [
            {
                text: 'hot',
                handler: props,
                id: 1
            },
            {
                text: 'mild',
                handler: props,
                id: 2
            },
            {
                text: 'cold',
                handler: props,
                id: 3
            },
        ]

        const buttons = options.map((option) => (
            <button key = {option.id} onCLick={option.handler} className={'option-button'}>
                {option.text}
            </button>
        ))

        return <div className="options-container">{buttons}</div>;
    };


export default TempOptions;