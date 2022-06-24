//create user
import axios from "axios";

const serverUrl = 'http://10.0.0.109:8080/users';

export const createUser = (data) => {
    return axios.post(serverUrl, data);
}

//get all users
export const getAllUsers = () => {
    return axios.get(serverUrl + '/all');
}

//get user
export const getUserById = (id) => {
    return axios.get(`${serverUrl}?id=${id}`);
}

//update user
export const updateUser = (data) => {
    return axios.put(serverUrl, data);
}

//delete user
export const deleteUser = (id) => {
    return axios.delete(`${serverUrl}?id=${id}`);
}
