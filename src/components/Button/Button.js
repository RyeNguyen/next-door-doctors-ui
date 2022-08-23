import React from 'react';

import './Button.scss';

const Button = (props) => {
    const {icon, text, isLarger, toDo} = props;

    const handleToDo = event => {
        event.preventDefault();
        toDo();
    }

    return (
        <div className='btn__border'>
            <button className={`${isLarger ? 'btn btn--larger' : 'btn'} ${!text ? 'btn--icon' : ''}`} onClick={event => handleToDo(event)}>
                {text}
                {!icon || <img src={icon} alt="button-icon"/>}
            </button>
        </div>
    )
}

export default Button;