import React from 'react';

import './Button.scss';

const Button = (props) => {
    const {icon, text, isSmaller, toDo} = props;

    const handleToDo = event => {
        event.preventDefault();
        toDo();
    }

    return (
        <div className='btn__border'>
            <button className={isSmaller ? 'btn btn--smaller' : 'btn'} onClick={event => handleToDo(event)}>
                {text}
                {!icon || <img src={icon} alt="button-icon"/>}
            </button>
        </div>
    )
}

export default Button;