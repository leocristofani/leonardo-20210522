export interface OrderBookConfig {
  apiUrl: string;
  productId: string;
  productName: string;
  minUpdateInterval: number;
  initialPriceGroup: PriceGroup;
}

export interface PriceLevel {
  price: number;
  size: number;
  total: number;
}

export const PriceGroupOptions = [
  1, 5, 10, 20, 50, 100, 200, 500, 1000, 2000, 5000,
];

export type PriceGroup =
  | typeof PriceGroupOptions[0]
  | typeof PriceGroupOptions[1]
  | typeof PriceGroupOptions[2]
  | typeof PriceGroupOptions[3]
  | typeof PriceGroupOptions[4]
  | typeof PriceGroupOptions[5]
  | typeof PriceGroupOptions[6]
  | typeof PriceGroupOptions[7]
  | typeof PriceGroupOptions[8]
  | typeof PriceGroupOptions[9];

export type PriceLevelDelta = [price: number, size: number];

export interface OrderBookDeltas {
  bids: PriceLevelDelta[];
  asks: PriceLevelDelta[];
}
