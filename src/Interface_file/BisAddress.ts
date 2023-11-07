export default interface BisAddress {
    careOf?: string,
    street?: string,
    postCode?: string,
    type: number,
    version: number,
    city?: string,
    country?: string,
    registrationDate: string,
    endDate?: string,
    language?: string,
    source?: number
}