import axios from "axios";



axios.interceptors.response.use(null, error => {
    const expectedError = 
        error.response &&
        error.response.status >= 400 &&
        error.response.status < 500;
    return Promise.reject(error);
});

export function setJwt(jwt)
{
    // axios.defaults.headers.common["x-auth-token"] = jwt;
    axios.defaults.headers = { 'Authorization': `Bearer ${jwt}` };
}

export default {
    get: axios.get,
    post: axios.post,
    put:axios.put,
    delete:axios.delete,
    setJwt
}
