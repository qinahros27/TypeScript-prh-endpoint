export default interface BisCompanyBusinessIdChange {
    source?: number,
    description: string,
    reason: string,
    changeDate?: string,
    change: number
    oldBusinessId: string
    newBusinessId: string
    language?: string
}