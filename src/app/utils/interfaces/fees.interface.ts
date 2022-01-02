export interface ICreateFees {
  admissionNo: number;
  feesDate: Date;

  feesAmount: number;
  feesBalance: number;
  feesDiscount: number;
  feesNotes: string;
}


export interface IUpdateFees {
    admissionNo: number;
    feesDate?: Date;
  
    feesAmount?: number;
    feesBalance?: number;
    feesDiscount?: number;
    feesNotes?: string;
  }
  