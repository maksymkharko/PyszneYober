export type Language = 'pl' | 'en' | 'ua';
export type Transport = 'bike' | 'scooter' | 'car';

export interface Translations {
  title: string;
  weekdayTitle: string;
  weekendTitle: string;
  resultsTitle: string;
  infoTitle: string;
  infoText: string;
  bike: string;
  scooter: string;
  car: string;
  authorText: string;
  quoteText: string;
  disclaimerText: string;
  hoursLabel: string;
  ordersLabel: string;
  tipsLabel: string;
  kilometersLabel: string;
  brutto: string;
  netto: string;
  hoursEarned: string;
  transportBonus: string;
  ordersBonus: string;
  tips: string;
  total: string;
  calculating: string;
}

export interface CalculationResult {
  hoursBrutto: number;
  transportBrutto: number;
  ordersBrutto: number;
  tipsBrutto: number;
  totalBrutto: number;
  hoursNetto: number;
  transportNetto: number;
  ordersNetto: number;
  tipsNetto: number;
  totalNetto: number;
  bhpNetto: number; 
}