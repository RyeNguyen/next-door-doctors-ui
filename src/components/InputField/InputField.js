import React, {useEffect, useState} from 'react';

import './InputField.scss';
import IconVisible from "../../assets/icons/icon-visible.svg";
import IconInvisible from "../../assets/icons/icon-invisible.svg";
import IconClose from '../../assets/icons/icon-close.svg';

const InputField = ({
                        fieldName,
                        labelName,
                        isRequired = false,
                        inputValue,
                        inputPlaceholder,
                        inputType = 'text',
                        handleChange,
                        handleClick,
                        preIcon,
                        errMessage,
                        hasForgot = false,
                        inputDisabled = false
                    }) => {
    const [passwordVisible, setPasswordVisible] = useState(false);

    useEffect(() => {
        if (fieldName === 'password') {
            setPasswordVisible(true);
        }
    }, []);

    return (
        <div className="input__field">
            <label className='input__label'>{labelName}{isRequired &&
            <span className='input--required'>*</span>}</label>
            <div className='input__wrapper'>
                <input
                    value={inputValue}
                    className={preIcon ? 'input' : 'input input--indent'}
                    type={!passwordVisible ? inputType : 'password'}
                    placeholder={inputPlaceholder}
                    onChange={event => handleChange(fieldName, event)}
                    disabled={inputDisabled}
                />
                {
                    preIcon && <img src={preIcon} alt="input-icon" className='input__icon prefix'/>
                }
                <div className='input__icons'>
                    {
                        fieldName === 'password' &&
                        <div className='input__icon-wrapper'>
                            <div className='container--center input__icon postfix'
                                 onClick={() => setPasswordVisible(!passwordVisible)}>
                                <img src={passwordVisible ? IconVisible : IconInvisible}
                                     alt="icon-eye"/>
                            </div>
                        </div>
                    }

                    {inputValue && !inputDisabled &&
                    <div className='input__icon-wrapper'>
                        <div className='container--center input__icon postfix'
                             onClick={() => handleClick(fieldName)}>
                            <img src={IconClose} alt="input-icon"/>
                        </div>
                    </div>
                    }
                </div>

                {
                    errMessage && <div className='input__error'>{errMessage}</div>
                }

                {
                    hasForgot && <a href="#" className='input__forgot'>Quên mật khẩu?</a>
                }
            </div>
        </div>
    )
}

export default InputField;