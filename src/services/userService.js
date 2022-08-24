import axios from "../axios";

const handleLoginApi = (email, password) => {
    return axios.post('/api/login', {email, password});
}

const getUsers = inputId => {
    const id = inputId || '';
    return axios.get(`/api/get-users?id=${id}`);
}

const addNewUserService = data => {
    return axios.post('/api/create-new-user', data);
}

const deleteUserService = id => {
    return axios.delete('/api/delete-user', { data: {id} });
}

const editUserDataService = data => {
    return axios.put('/api/edit-user', data);
}

export { handleLoginApi, getUsers, addNewUserService, deleteUserService, editUserDataService };