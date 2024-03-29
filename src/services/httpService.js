import axios from "axios";


axios.defaults.withCredentials = true;
axios.interceptors.response.use(null, error => {
    const expectedError = 
        error.response &&
        error.response.status >= 400 &&
        error.response.status < 500;
    return Promise.reject(error);
});



export default {
    get: axios.get,
    post: axios.post,
    put:axios.put,
    delete:axios.delete,
}
