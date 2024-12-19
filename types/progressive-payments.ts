export interface ProgressivePaymentsSchema {
  id: string;
  address: string;
  expectedSettlmentDate: string | Date;
  total_commission: string;
}
