export interface PriceLevel {
  price: number;
  size: number;
  total: number;
}

export type PriceLevelType = "bid" | "ask";
