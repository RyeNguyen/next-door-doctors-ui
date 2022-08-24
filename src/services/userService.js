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

export { handleLoginApi, getUsers, addNewUserService };