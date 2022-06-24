
import axios from "axios";

const serverUrl = "http://10.0.0.109:8080/tasks";

//create task
export const createTask = (data) => {
    return axios.post(serverUrl, data);
}

//get all tasks
export const getAllTasks = ()  => {
    return axios.get(serverUrl + '/all');
}

//get task
export const getTaskById = (id) => {
    return axios.get(`${serverUrl}?id=${id}`);
}

//update task
export const updateTask = (data) => {
    return axios.put(serverUrl, data);
}

//delete task
export const deleteTask = (id) => {
    return axios.delete(`${serverUrl}?id=${id}`);
}