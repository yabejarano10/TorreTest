export interface CompensationDetails{
    code:string,
    currency: string;
    minAmount: number;
    maxAmount:number;
    periodicity: string;
                
}

export interface Compensation{
    data:CompensationDetails;
}