import http from "./httpService";
import config from "../config.json";

const apiEndpoint = config.apiUrl + "/points/";

export async function updatePoints(user)
{
    let updatePoints = apiEndpoint + `setPoints`;
    const { data } = await http.put(updatePoints, user);
    return data;
}

export async function getUserPointsPerCompany(id)
{
    let userPoints = apiEndpoint + `getUserPointsPerCompany?id=${id}`;
    const { data } = await http.get(userPoints);
    return data;
}

export async function getUserPointsAllCompanies(email)
{
    let userPoints = apiEndpoint + `getUserPointsAllCompanies?email=${email}`;
    const { data } = await http.get(userPoints);
    return data;
}
