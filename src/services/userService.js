import http from "./httpService";
import config from "../config.json";

const apiEndpoint = config.apiUrl + "/useraccount/";




export async function login(model)
{
    let login = apiEndpoint +"loginWebApp";
    const result = await http.post(login,model,{widthCredentials:true});
    console.log(result);
    // save the user info too..
    return result.data;
}

export async function authenticateUser()
{
    let endpoint = apiEndpoint + "authenticateUser";
    const { data } = await http.post(endpoint);
    return data;
}

export async function logOut()
{
    let endpoint = apiEndpoint + "logout";
    const result = await http.post(endpoint);
}

export async function register(user) {
    let registerUser = apiEndpoint +"register";
    const result = await http.post(registerUser,user);
    return result;
}

export async function updateUser(model)
{
    let update = apiEndpoint +"updateUser";
    const result = await http.post(update,model);
}

export async function requestResetPassword(email)
{
    let resetPassword = apiEndpoint + `requestResetPassword?email=${email}`;
    const result = await http.get(resetPassword);
}

export async function sendEmail(topic,message,email)
{
    const model = {
        topic,
        message,
        email
    };
    let send = apiEndpoint + `sendEmail`;
    const result = await http.post(send,model);
}