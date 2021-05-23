import { OrderBookConfig, PriceGroup } from "./OrderBook/types";

export default function getConfig(): OrderBookConfig {
  const apiUrl = process.env.REACT_APP_ORDERBOOK_API_URL;
  const productName = process.env.REACT_APP_ORDERBOOK_PRODUCT_NAME;
  const productId = process.env.REACT_APP_ORDERBOOK_PRODUCT_ID;
  const minUpdateInterval = Number(
    process.env.REACT_APP_ORDERBOOK_MIN_UPDATE_INTERVAL
  );
  const initialPriceGroup = Number(
    process.env.REACT_APP_ORDERBOOK_INITIAL_PRICE_GROUP
  ) as PriceGroup;

  if (
    !apiUrl ||
    !productId ||
    !productName ||
    !initialPriceGroup ||
    !minUpdateInterval
  ) {
    throw new Error(`Missing required OrderBook environment variables`);
  }

  return {
    apiUrl,
    productId,
    productName,
    initialPriceGroup,
    minUpdateInterval,
  };
}
