import BisCompanyName from "./BisCompanyName";
import BisCompanyLiquidation from "./BisCompanyLiquidation";
import BisAddress from "./BisAddress";
import BisCompanyBusinessIdChange from "./BisCompanyBusinessIdChange";
import BisCompanyForm from "./BisCompanyForm";
import BisCompanyBusinessLine from "./BisCompanyBusinessLine";
import BisCompanyLanguage from "./BisCompanyLanguage";
import BisCompanyRegisteredEntry from "./BisCompanyRegisteredEntry";
import BisCompanyRegisteredOffice from "./BisCompanyRegisteredOffice";
import BisCompanyContactDetail from "./BisCompanyContactDetail";

export default interface BisCompanyDetails {
    businessId: string,
    name: string,
    registrationDate: string,
    companyForm: string,
    detailsUri: string,
    liquidations?: BisCompanyLiquidation[],
    names: BisCompanyName[],
    auxiliaryNames?: BisCompanyName[],
    addresses: BisAddress[],
    companyForms: BisCompanyForm[],
    businessLines?: BisCompanyBusinessLine[],
    languages?: BisCompanyLanguage[],
    registedOffices?: BisCompanyRegisteredOffice[],
    contactDetails?: BisCompanyContactDetail[],
    registeredEntries?: BisCompanyRegisteredEntry[],
    businessIdChanges?: BisCompanyBusinessIdChange[]
}