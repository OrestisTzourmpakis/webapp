import http from "./httpService";
import config from "../config.json";


const apiEndpoint = config.apiUrl + "/companies/";

export async function getAllCompanies()
{
    let allCompanies = apiEndpoint + "GetAllCompaniesWithCount";
    console.log("getting the companies!!!");
    const { data } = await http.get(allCompanies);
    return data;
}



export async function getCompanyById(id)
{
    let getCompany = apiEndpoint+`getcompanybyid?Id=${id}`;
    const { data } = await http.get(getCompany);
    return data;
}


export async function getCompanyByUserEmail(email)
{
    let getCompany = apiEndpoint+`getcompanybyemail?email=${email}`;
    const { data } = await http.get(getCompany);
    return data;
}


