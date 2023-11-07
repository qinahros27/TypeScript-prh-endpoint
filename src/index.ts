import axios, { AxiosError } from "axios";
import BisCompanyList from "./Interface_file/BisCompanyList";
import BisCompanyDetailResult from "./Interface_file/BisCompanyDetailResult";
import ValidationError from "./Interface_file/ValidationError";
import BisCompanyDetails from "./Interface_file/BisCompanyDetais";
const getData = async <T>(endpoint: string) => {
    try {
        const result = await axios<T>(endpoint);
        return result.data;
    } catch (error) {
        if (axios.isAxiosError<ValidationError, Record<string, unknown>>(error)) {
          console.log(error.status)
          console.error(error.response);
        } else {
          console.error(error);
        }
    }
}

const findCompany = async (maxResult: number, resultFrom: number, streetAddressPostCode:string,date: string) => {
    let companyList:BisCompanyDetails[] = [];
    let endpoint = `http://avoindata.prh.fi/bis/v1?totalResults=false&maxResults=${maxResult}&resultsFrom=${resultFrom}&streetAddressPostCode=${streetAddressPostCode}&companyRegistrationFrom=${date}`;
    const searchCompany = await getData<BisCompanyList>(endpoint);

    if (searchCompany!= undefined) {
        for(let company of searchCompany.results) {
            const companyDetail = await getData<BisCompanyDetailResult>(`http://avoindata.prh.fi/opendata/bis/v1/${company.businessId}`);
            if(companyDetail != undefined) {
                let result: BisCompanyDetails[] = companyDetail.results;
                companyList.push(...result);
            }
            else {
                return "There might be something wrong!";
            }
        }
        return companyList;
    }
    else {
        return "There might be something wrong!";
    }
    

}

const companiesfound = async () => {
    let companies = await findCompany(10,0,"60420","2014-02-28");
    console.log(companies.length);
    console.log(companies);
}

companiesfound();