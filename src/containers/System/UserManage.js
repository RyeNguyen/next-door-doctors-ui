import React, { Component } from "react";
import { connect } from "react-redux";
import { getUsers, addNewUserService, deleteUserService, editUserDataService } from "../../services/userService";
import { Table } from "reactstrap";
import {emitter} from "../../utils/emitter";

import "./UserManage.scss";
import IconAdd from '../../assets/icons/icon-add-user.svg';
import IconEdit from '../../assets/icons/icon-edit.svg';
import IconDelete from '../../assets/icons/icon-delete.svg';

import ModalUser from "./ModalUser";
import Button from "../../components/Button/Button";

class UserManage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      arrUsers: [],
      isModalOpened: false
    };
  }

  async componentDidMount() {
    await this.getAllUsers();
  }

  getAllUsers = async () => {
    const response = await getUsers();
    if (response && response.errCode === 0) {
      this.setState({
        arrUsers: response.users,
      });
    }
  };

  handleOpenModal = () => {
    this.setState({
      isModalOpened: true
    });
  };

  toggleUserModal = () => {
    this.setState({
      isModalOpened: !this.state.isModalOpened,
    });
  };

  addNewUser = async (data) => {
    try {
      const response = await addNewUserService(data);
      if (response && response.errCode !== 0) {
        alert(response.message);
      } else {
        await this.getAllUsers();
        this.setState({
          isModalOpened: false,
        });
        emitter.emit('EVENT_CLEAR_MODAL_DATA');
      }
    } catch (error) {
      console.log(error);
    }
  };

  deleteUser = async userId => {
    try {
        const response = await deleteUserService(userId);
        if (response && response.errCode !== 0) {
            alert(response.message);
        } else {
            await this.getAllUsers();
        }
    } catch (error) {
        console.log(error);
    }
  }

  editUserData = async data => {
    try {
        const response = await editUserDataService(data);
        if (response && response.errCode !== 0) {
          alert(response.message);
        } else {
          await this.getAllUsers();
          this.setState({
            isModalOpened: false,
          });
        }
      } catch (error) {
        console.log(error);
      }
  }

  render() {
    return (
      <div className="user-container">
        <div className="title text-center">Manage users</div>
        <div className="manager__add">
          <Button text="Add new users" icon={IconAdd} toDo={this.handleOpenModal} parentValue='ADD'/>
        </div>

        <div className="manager__table-container">
          <Table striped hover bordered responsive>
            <thead>
              <tr>
                <th>ID</th>
                <th>Email</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Phone Number</th>
                <th>Address</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {this.state.arrUsers.map((user) => (
                <tr key={user.id}>
                  <th scope="row">{user.id}</th>
                  <td>{user.email}</td>
                  <td>{user.firstName}</td>
                  <td>{user.lastName}</td>
                  <td>{user.phoneNumber}</td>
                  <td>{user.address}</td>
                  <td className='manager__table-buttons'>
                    <Button icon={IconEdit} toDo={this.handleOpenModal}/>
                    <Button icon={IconDelete} toDo={this.deleteUser} parentValue={user.id} />
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>

        <ModalUser
          isOpen={this.state.isModalOpened}
          toggle={this.toggleUserModal}
          addNewUser={this.addNewUser}
          editUserData={this.editUserData}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(UserManage);
