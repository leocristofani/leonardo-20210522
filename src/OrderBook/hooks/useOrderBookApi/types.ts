import { PriceGroup } from "../../types";

export interface OrderBookApiEvent {
  type: "subscribe" | "unsubscribe";
  priceGroup: PriceGroup;
}
