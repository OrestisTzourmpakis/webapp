import http from "./httpService";
import config from "../config.json";


const apiEndpoint = config.apiUrl + "/sales/";

export async function getAllSales()
{
    let allSales = apiEndpoint + "getAllSales";
    const { data } = await http.get(allSales);
    return data;
}


export async function getAllActiveSales()
{
    let allSales = apiEndpoint + "getAllActiveSales";
    const { data } = await http.get(allSales);
    return data;
}
export async function getSaleById(email)
{
    let getSales = apiEndpoint+`getSales?email=${email}`;
    const { data } = await http.get(getSales);
    console.log("Ta sales!!!::::");
    console.log(data);
    return data;
}

export async function getSalesByCompanyId(id)
{
    let sales = apiEndpoint + `getActiveSalesByCompanyId?id=${id}`;
    const { data } = await http.get(sales);
    return data;
}

