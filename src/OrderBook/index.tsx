import { useCallback } from "react";
import { Box, Grid, Paper } from "@material-ui/core";

import OrderBookErrorBoundary from "./components/OrderBookErrorBoundary";
import OrderBookLoader from "./components/OrderBookLoader";
import PriceGroupControl from "./components/PriceGroupControl";
import PriceLevelList from "./components/PriceLevelList";
import ProductName from "./components/ProductName";
import useOrderBookApi from "./hooks/useOrderBookApi";
import useOrderBookState from "./hooks/useOrderBookState";
import { OrderBookConfig, PriceGroup } from "./types";

type Props = OrderBookConfig;

function OrderBook({
  apiUrl,
  productId,
  productName,
  initialPriceGroup,
  minUpdateInterval,
}: Props) {
  /**
   * TODO: Turn into an env. variable
   */
  const maxNumberOfPriceLevels = 15;

  const { bids, asks, onSnapshot, onDelta } = useOrderBookState(
    maxNumberOfPriceLevels
  );

  const { emitEvent, connecting } = useOrderBookApi({
    apiUrl,
    productId,
    minUpdateInterval,
    onDelta,
    onSnapshot,
    initialEvent: { type: "subscribe", priceGroup: initialPriceGroup },
  });

  const handlePriceGroupChange = useCallback(
    (currentPriceGroup: PriceGroup, nextPriceGroup: PriceGroup) => {
      emitEvent({ type: "unsubscribe", priceGroup: currentPriceGroup });
      emitEvent({ type: "subscribe", priceGroup: nextPriceGroup });
    },
    [emitEvent]
  );

  return (
    <>
      <ProductName>{productName}</ProductName>
      <Paper elevation={2}>
        <Box p={3}>
          {connecting ? (
            <OrderBookLoader />
          ) : (
            <>
              <Box mb={2}>
                <PriceGroupControl
                  priceGroup={initialPriceGroup}
                  onChange={handlePriceGroupChange}
                />
              </Box>
              <Grid container>
                <Grid item xs={12} sm={6}>
                  <PriceLevelList priceLevels={bids} isBid />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <PriceLevelList priceLevels={asks} />
                </Grid>
              </Grid>
            </>
          )}
        </Box>
      </Paper>
    </>
  );
}

export default function OrderBookWrapper(props: Props) {
  return (
    <OrderBookErrorBoundary productName={props.productName}>
      <OrderBook {...props} />
    </OrderBookErrorBoundary>
  );
}
