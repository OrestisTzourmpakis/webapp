import http from "./httpService";
import config from "../config.json";

const apiEndpoint = config.apiUrl + "/Statistics/";


export async function getTotalUsers(email = null)
{
    let totalUsers = apiEndpoint + "getTotalUsers";
    const { data } = await http.post(totalUsers, {
    });
    return data;
}
export async function getTotalActiveSales(email = null)
{
    let totalActiveSales = apiEndpoint + "getTotalActiveSales";
    const { data } = await http.post(totalActiveSales, {
    });
    return data;
}


export async function getTotalCompanies(email = null)
{
    let totalCompanies = apiEndpoint + "getTotalCompanies";
    const { data } = await http.post(totalCompanies, {
    });
    return data;
}