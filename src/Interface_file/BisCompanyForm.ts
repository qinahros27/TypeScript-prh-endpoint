export default interface BisCompanyForm {
    version: number,
    name: string,
    type: string,
    registrationDate: string,
    endDate?: string,
    language?: string,
    source?: number
}