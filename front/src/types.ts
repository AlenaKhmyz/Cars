export type Car = {
  id: number;
  name: string;
  model: string;
  year: number;
  vin: string | null;
  company: string;
  note: string | null;
  rightHand: boolean;
  currency: string;
  price: number;
  phone: string;
  ein: string;
  dateFrom: string | Date;
  dateTo: string | Date;
};

export interface Item {
  item: Car;
}