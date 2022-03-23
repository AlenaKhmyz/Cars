export type Car = {
  id: number;
  name: string;
  model: string;
  year: number;
  vin: string | null;
  company: string;
  note: string;
  rightHand: boolean;
  currency: string;
  price: number;
  phone: string;
  ein: string;
  dateFrom: string;
  dateTo: string;
};

export interface Item {
  item: Car;
}