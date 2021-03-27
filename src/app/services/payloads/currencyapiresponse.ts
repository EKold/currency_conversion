export interface CurrencyApiResponse {
    rates: {
        [key: string]: number
    },
    base: string,
    date:string
}
