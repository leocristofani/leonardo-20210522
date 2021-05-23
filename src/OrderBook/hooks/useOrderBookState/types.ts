import { PriceLevel } from "../../types";

export interface PriceLevelsByPrice {
  [price: number]: PriceLevel;
}

export interface OrderBookState {
  bids: PriceLevelsByPrice;
  asks: PriceLevelsByPrice;
}
