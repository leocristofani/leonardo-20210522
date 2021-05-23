import { Box, Grid, Paper } from "@material-ui/core";

import OrderBookErrorBoundary from "./components/OrderBookErrorBoundary";
// import OrderBookLoader from "./components/OrderBookLoader";
import PriceGroupControl from "./components/PriceGroupControl";
import PriceLevelList from "./components/PriceLevelList";
import ProductName from "./components/ProductName";
import { OrderBookConfig } from "./types";

type Props = OrderBookConfig;

function OrderBook({ productName }: Props) {
  return (
    <>
      <ProductName>{productName}</ProductName>
      <Paper elevation={2}>
        <Box p={3}>
          {/* <OrderBookLoader /> */}
          <Box mb={2}>
            <PriceGroupControl />
          </Box>
          <Grid container>
            <Grid item xs={12} sm={6}>
              <PriceLevelList isBid />
            </Grid>
            <Grid item xs={12} sm={6}>
              <PriceLevelList />
            </Grid>
          </Grid>
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
