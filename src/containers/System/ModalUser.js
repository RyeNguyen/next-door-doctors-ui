import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Modal, ModalBody, ModalFooter, ModalHeader} from 'reactstrap';

import IconClose from '../../assets/icons/icon-close--larger.svg';
import IconAdd from '../../assets/icons/icon-add-user.svg';
import IconCancel from '../../assets/icons/icon-cancel.svg';

import './ModalUser.scss';

import Button from '../../components/Button/Button';
import InputField from "../../components/InputField/InputField";

class ModalUser extends Component {
    closeButton = (
        <Button icon={IconClose} toDo={this.props.toggle}/>
    )

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            username: '',
            phoneNumber: '',
            firstName: '',
            lastName: '',
            address: ''
        }
    }

    componentDidMount() {
    }

    /**
     * Handle changing of input fields
     * Author: NQMinh (23/08/2022)
     */
    handleChangeInput = (fieldText, event) => {
        this.setState({[fieldText]: event.target.value});
    }

    /**
     * Clear value of input fields
     * @param {string} fieldText 
     * Author: NQMinh (23/08/2022)
     */
    handleClearText = fieldText => {
        this.setState({[fieldText]: ''});
    }

    validateInput = () => {
        let isValid = true;
        const arrInput = Object.keys(this.state);
        for (let item of arrInput) {
            if (!this.state[item]) {
                isValid = false;
                alert('Missing required parameter: ' + item);
                break;
            }
        }
        return isValid;
    }

    handleAddNewUser = () => {
        const isValid = this.validateInput();
        if (isValid) {
            this.props.addNewUser(this.state);
        }
    }

    render() {
        return (
            <Modal
                isOpen={this.props.isOpen}
                toggle={() => this.props.toggle()}
                centered
            >
                <ModalHeader toggle={() => this.props.toggle()} close={this.closeButton}/>
                <ModalBody>
                    <h2 className='modal__title'>Add a new User</h2>
                    <div className="modal__fields">
                        <div className='modal__field'>
                            <InputField
                                fieldName='email'
                                labelName='Email'
                                isRequired
                                handleChange={this.handleChangeInput}
                                handleClick={this.handleClearText}
                                inputType='email'
                                inputValue={this.state.email}
                            />
                        </div>

                        <div className='modal__field'>
                            <InputField
                                fieldName='password'
                                labelName='Password'
                                isRequired
                                handleChange={this.handleChangeInput}
                                handleClick={this.handleClearText}
                                inputType='text'
                                inputValue={this.state.password}
                            />
                        </div>

                        <div className='modal__field'>
                            <InputField
                                fieldName='username'
                                labelName='Username'
                                isRequired
                                handleChange={this.handleChangeInput}
                                handleClick={this.handleClearText}
                                inputType='text'
                                inputValue={this.state.username}
                            />
                        </div>

                        <div className='modal__field'>
                            <InputField
                                fieldName='phoneNumber'
                                labelName='Phone Number'
                                isRequired
                                handleChange={this.handleChangeInput}
                                handleClick={this.handleClearText}
                                inputType='phone'
                                inputValue={this.state.phoneNumber}
                            />
                        </div>

                        <div className='modal__field'>
                            <InputField
                                fieldName='firstName'
                                labelName='First Name'
                                handleChange={this.handleChangeInput}
                                handleClick={this.handleClearText}
                                inputType='text'
                                inputValue={this.state.firstName}
                            />
                        </div>

                        <div className='modal__field'>
                            <InputField
                                fieldName='lastName'
                                labelName='Last Name'
                                handleChange={this.handleChangeInput}
                                handleClick={this.handleClearText}
                                inputType='text'
                                inputValue={this.state.lastName}
                            />
                        </div>

                        <div className='modal__field isLarger'>
                            <InputField
                                fieldName='address'
                                labelName='Address'
                                handleChange={this.handleChangeInput}
                                handleClick={this.handleClearText}
                                inputType='text'
                                inputValue={this.state.address}
                            />
                        </div>
                    </div>
                </ModalBody>
                <ModalFooter>
                    <div className="modal__buttons">
                        <Button toDo={this.handleAddNewUser} isLarger text='Add user' icon={IconAdd}/>
                        <Button toDo={this.props.toggle} isLarger text='Cancel' icon={IconCancel}/>
                    </div>
                </ModalFooter>
            </Modal>
        )
    }

}

const mapStateToProps = state => {
    return {};
};

const mapDispatchToProps = dispatch => {
    return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(ModalUser);
