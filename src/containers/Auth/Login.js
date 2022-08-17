import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from "connected-react-router";
import * as actions from "../../store/actions";
import './Login.scss';
import { FormattedMessage } from 'react-intl';

import IconTrust from '../../assets/icons/icon-trust.svg';
import IconGoogle from '../../assets/icons/icon-google.svg';
import IconFacebook from '../../assets/icons/icon-facebook.svg';
import IconProfile from '../../assets/icons/icon-profile.svg';
import IconLock from '../../assets/icons/icon-lock.svg';
import BgVid from '../../assets/videos/bg-video-3.mp4';

class Login extends Component {
    constructor(props) {
        super(props);
        this.btnLogin = React.createRef();
    }

    render() {
        return (
            <div className='auth__background'>
                <video autoPlay muted loop className='auth__background-video'>
                    <source src={BgVid} type="video/mp4"/>
                </video>
                <div className='auth__border'>
                    <div className='auth__container'>
                        <div className='auth__content'>
                            <img src={IconTrust} alt="auth-icon" className='auth__content-icon'/>
                            <h2 className='auth__content-header'>Chào mừng trở lại</h2>
                            <div className="auth__content-field">
                                <label className='auth__content-field-name'>Tên đăng nhập<span className='auth__content-required'>*</span></label>
                                <div className='auth__content-field-wrapper'>
                                    <input className='auth__content-field-input' type="text"/>
                                    <img src={IconProfile} alt="icon-profile" className='auth__content-field-icon'/>
                                </div>
                            </div>

                            <div className="auth__content-field">
                                <label className='auth__content-field-name'>Mật khẩu<span className='auth__content-required'>*</span></label>
                                <div className='auth__content-field-wrapper'>
                                    <input className='auth__content-field-input' type="password"/>
                                    <img src={IconLock} alt="icon-lock" className='auth__content-field-icon'/>
                                </div>
                                <a href="#" className='auth__content-forgot'>Quên mật khẩu?</a>
                            </div>

                            <div className='container__center'>
                                <div className='btn__border'>
                                    <button className='btn'>Đăng nhập</button>
                                </div>
                            </div>

                            <div className='auth__separator'>
                                <div className='auth__separator-line'/>
                                <p>hoặc đăng nhập với</p>
                                <div className='auth__separator-line'/>
                            </div>

                            <div className='auth__footer'>
                                <div className='btn__border'>
                                    <button className='btn secondary'>
                                        Google
                                        <img src={IconGoogle} alt="icon-google"/>
                                    </button>
                                </div>

                                <div className='btn__border'>
                                    <button className='btn secondary'>
                                        Facebook
                                        <img src={IconFacebook} alt="icon-facebook"/>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        language: state.app.language
    };
};

const mapDispatchToProps = dispatch => {
    return {
        navigate: (path) => dispatch(push(path)),
        adminLoginSuccess: (adminInfo) => dispatch(actions.adminLoginSuccess(adminInfo)),
        adminLoginFail: () => dispatch(actions.adminLoginFail()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);