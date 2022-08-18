import React, {Component} from 'react';
import {connect} from 'react-redux';
import {push} from "connected-react-router";
import * as actions from "../../store/actions";
import './Login.scss';

import IconTrust from '../../assets/icons/icon-trust.svg';
import IconGoogle from '../../assets/icons/icon-google.svg';
import IconFacebook from '../../assets/icons/icon-facebook.svg';
import IconProfile from '../../assets/icons/icon-profile.svg';
import IconLock from '../../assets/icons/icon-lock.svg';
import IconClose from '../../assets/icons/icon-close.svg';
import IconVisible from '../../assets/icons/icon-visible.svg';
import IconInvisible from '../../assets/icons/icon-invisible.svg';
import BgVid from '../../assets/videos/bg-video-3.webm';

class Login extends Component {
    constructor(props) {
        super(props);
        this.btnLogin = React.createRef();
        this.state = {
            username: '',
            password: '',
            passwordVisible: false
        }
    }

    handleOnChangeUsername = event => {
        this.setState({
            username: event.target.value
        })
    }

    handleOnChangePassword = event => {
        this.setState({
            password: event.target.value
        })
    }

    handleClearText = fieldText => {
        if (fieldText === 'username') {
            this.setState({
                username: ''
            })
        } else {
            this.setState({
                password: ''
            })
        }
    }

    handlePasswordVisible = visible => {
        this.setState({
            passwordVisible: visible
        })
    }

    handleLogin = event => {
        event.preventDefault();
        console.log(this.state.username)
    }

    render() {
        return (
            <div className='auth__background'>
                <video autoPlay muted loop className='auth__background-video'>
                    <source src={BgVid} type="video/mp4"/>
                </video>
                <div className='auth__border'>
                    <div className='auth__container'>
                        <form className='auth__content'>
                            <img src={IconTrust} alt="auth-icon" className='auth__content-icon'/>
                            <h2 className='auth__content-header'>Chào mừng trở lại</h2>
                            <div className="auth__content-field">
                                <label className='auth__content-field-name'>Tên đăng nhập<span
                                    className='auth__content-required'>*</span></label>
                                <div className='auth__content-field-wrapper'>
                                    <input
                                        value={this.state.username}
                                        className='auth__content-field-input'
                                        type="text"
                                        onChange={event => this.handleOnChangeUsername(event)}
                                    />
                                    <img src={IconProfile} alt="icon-profile"
                                         className='auth__content-field-icon prefix'/>
                                    <div className='auth__content-field-icons'>
                                        {!this.state.username ||
                                        <div className='container--center auth__content-field-icon postfix'
                                             onClick={() => this.handleClearText('username')}>
                                            <img src={IconClose} alt="icon-profile"/>
                                        </div>}
                                    </div>
                                </div>
                            </div>

                            <div className="auth__content-field">
                                <label className='auth__content-field-name'>Mật khẩu<span
                                    className='auth__content-required'>*</span></label>
                                <div className='auth__content-field-wrapper'>
                                    <input
                                        value={this.state.password}
                                        className='auth__content-field-input'
                                        type={this.state.passwordVisible ? 'text' : 'password'}
                                        onChange={event => this.handleOnChangePassword(event)}
                                    />
                                    <img src={IconLock} alt="icon-lock" className='auth__content-field-icon prefix'/>
                                    <div className='auth__content-field-icons'>
                                        <div className='container--center auth__content-field-icon postfix'
                                             onClick={() => this.handlePasswordVisible(!this.state.passwordVisible)}>
                                            <img src={this.state.passwordVisible ? IconVisible : IconInvisible}
                                                 alt="icon-eye"/>
                                        </div>

                                        {!this.state.password ||
                                        <div className='container--center auth__content-field-icon postfix'
                                             onClick={() => this.handleClearText('password')}>
                                            <img src={IconClose} alt="icon-profile"/>
                                        </div>}
                                    </div>
                                </div>
                                <a href="#" className='auth__content-forgot'>Quên mật khẩu?</a>
                            </div>

                            <div className='container--center'>
                                <div className='btn__border'>
                                    <button className='btn' onClick={event => this.handleLogin(event)}>Đăng nhập
                                    </button>
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
                        </form>
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