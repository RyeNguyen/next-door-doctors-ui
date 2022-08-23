import React, {Component} from 'react';
import {connect} from 'react-redux';
import {push} from "connected-react-router";
import * as actions from "../../store/actions";
import {handleLoginApi} from "../../services/userService";
import './Login.scss';

import IconTrust from '../../assets/icons/icon-trust.svg';
import IconGoogle from '../../assets/icons/icon-google.svg';
import IconProfile from '../../assets/icons/icon-profile.svg';
import IconFacebook from '../../assets/icons/icon-facebook.svg';
import IconLock from '../../assets/icons/icon-lock.svg';
import BgVid from '../../assets/videos/bg-video-3.webm';
import Button from "../../components/Button/Button";
import InputField from "../../components/InputField/InputField";

class Login extends Component {
    constructor(props) {
        super(props);
        this.btnLogin = React.createRef();
        this.state = {
            username: '',
            password: '',
            passwordVisible: false,
            errMessage: ''
        }
    }

    handleChangeInput = (fieldText, event) => {
        this.setState({[fieldText]: event.target.value});
    }

    handleClearText = fieldText => {
        this.setState({[fieldText]: ''});
    }

    handlePasswordVisible = visible => {
        this.setState({
            passwordVisible: visible
        })
    }

    handleLogin = async () => {
        this.setState({
            errMessage: ''
        });

        try {
            const data = await handleLoginApi(this.state.username, this.state.password);
            if (data && data.errCode !== 0) {
                this.setState({
                    errMessage: data.message
                })
            }
            if (data && data.errCode === 0) {
                this.props.userLoginSuccess(data.user);
                console.log('Login succeed!!');
            }
        } catch (error) {
            if (error.response) {
                if (error.response.data) {
                    this.setState({
                        errMessage: error.response.data.message
                    })
                }
            }
        }
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
                            <div className='auth__content-inputs'>
                                <InputField
                                    fieldName='username'
                                    labelName='Tên đăng nhập'
                                    isRequired
                                    inputValue={this.state.username}
                                    inputType='text'
                                    handleChange={this.handleChangeInput}
                                    handleClick={this.handleClearText}
                                    preIcon={IconProfile}
                                />

                                <InputField
                                    fieldName='password'
                                    labelName='Mật khẩu'
                                    isRequired
                                    inputValue={this.state.password}
                                    inputType='text'
                                    handleChange={this.handleChangeInput}
                                    handleClick={this.handleClearText}
                                    preIcon={IconLock}
                                    errMessage={this.state.errMessage}
                                    hasForgot
                                />
                            </div>

                            <div className='container--center'>
                                <Button text='Đăng nhập' toDo={this.handleLogin} isLarger/>
                            </div>

                            <div className='auth__separator'>
                                <div className='auth__separator-line'/>
                                <p>hoặc đăng nhập với</p>
                                <div className='auth__separator-line'/>
                            </div>

                            <div className='auth__footer'>
                                <Button text='Google' icon={IconGoogle}/>
                                <Button text='Facebook' icon={IconFacebook}/>
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
        //userLoginFail: () => dispatch(actions.adminLoginFail()),
        userLoginSuccess: userInfo => dispatch(actions.userLoginSuccess(userInfo)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);