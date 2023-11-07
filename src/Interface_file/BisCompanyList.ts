import BisCompany from "./BisCompany"

export default interface BisCompanyList {
    type: string,
    version: string,
    totalResults: number,
    resultsFrom: number,
    previousResultsUri?: string,
    nextResultsUri?: string,
    exceptionNoticeUri?: string,
    results: BisCompany[]
}