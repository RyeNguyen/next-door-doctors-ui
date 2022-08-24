import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getUsers, addNewUserService} from "../../services/userService";

import './UserManage.scss';

import ModalUser from "./ModalUser";
import Button from "../../components/Button/Button";

class UserManage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            arrUsers: [],
            isModalOpened: false
        }
    }

    async componentDidMount() {
        await this.getAllUsers();
    }

    getAllUsers = async () => {
        const response = await getUsers();
        if (response && response.errCode === 0) {
            this.setState({
                arrUsers: response.users
            })
        }
    }

    handleOpenModal = () => {
        this.setState({
            isModalOpened: true
        })
    }

    toggleUserModal = () => {
        this.setState({
            isModalOpened: !this.state.isModalOpened
        })
    }

    addNewUser = async data => {
        try {
            const response = await addNewUserService(data);
            if (response && response.errCode !== 0) {
                alert(response.message);
            } else {
                await this.getAllUsers();
                this.setState({
                    isModalOpened: false
                })
            }
        } catch (error) {
            console.log(error);
        }
    }

    render() {
        return (
            <div className='user-container'>
                <div className="title text-center">Manage users</div>
                <div className="mx-1">
                    <Button text='Add new users' toDo={this.handleOpenModal}/>
                </div>
                <div className="users-table mt-4 mx-3">
                    <table id="customers">
                        <thead>
                        <tr>
                            <th>Email</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Address</th>
                            <th>Actions</th>
                        </tr>
                        </thead>
                        <tbody>
                        {this.state.arrUsers.map(user => (
                            <tr key={user.id}>
                                <td>{user.email}</td>
                                <td>{user.firstName}</td>
                                <td>{user.lastName}</td>
                                <td>{user.address}</td>
                                <td>
                                    <Button text='Edit'/>
                                    <Button text='Delete'/>
                                </td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>

                <ModalUser
                    isOpen={this.state.isModalOpened}
                    toggle={this.toggleUserModal}
                    addNewUser={this.addNewUser}
                />
            </div>
        );
    }

}

const mapStateToProps = state => {
    return {};
};

const mapDispatchToProps = dispatch => {
    return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(UserManage);
