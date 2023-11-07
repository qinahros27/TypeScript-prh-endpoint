export default interface BisCompanyRegisteredEntry {
    authority: number,
    register: number,
    status: number,
    registrationDate: string,
    endDate?: string,
    statusDate: string,
    language: string,
    description: string
}