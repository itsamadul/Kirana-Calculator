
export enum CalculatorMode {
  PRICE_TO_WEIGHT = 'PRICE_TO_WEIGHT',
  WEIGHT_TO_PRICE = 'WEIGHT_TO_PRICE'
}

export interface CalculatorState {
  pricePerKg: string;
  inputValue: string;
  result: number | null;
}
