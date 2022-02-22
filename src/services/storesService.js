import http from "./httpService";
import config from "../config.json";


const apiEndpoint = config.apiUrl + "/stores/";


export async function getStoreById(id)
{
    let getStores = apiEndpoint+`getStores?id=${id}`;
    const { data } = await http.get(getStores);
    return data;
}

export async function getStores(id)
{
    let getStores = apiEndpoint +`getStores?id=${id}`;
    const {data} = await http.get(getStores);
    return data;
}

export async function getStoreByEmail(email)
{
    let getStores = apiEndpoint +`getStores?email=${email}`;
    const {data} = await http.get(getStores);
    return data;
}