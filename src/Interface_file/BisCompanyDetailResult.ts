import BisCompanyDetails from "./BisCompanyDetais"

export default interface BisCompanyDetailResult {
    type: string,
    version: string,
    totalResults: number,
    resultsFrom: number,
    previousResultsUri?: string,
    nextResultsUri?: string,
    exceptionNoticeUri?: string,
    results: BisCompanyDetails[]
}