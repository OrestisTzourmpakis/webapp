import http from "./httpService";
import config from "../config.json";


const apiEndpoint =config.apiUrl + "/categories/";

export async function getCategories()
{
    let categories = apiEndpoint + "getCategories";
    const { data } = await http.get(categories);
    return data;
}

export async function getCategoryById(id)
{
    let category = apiEndpoint + `getCategory?Id=${id}`;
    const { data } = await http.get(category);
    return data;
}

