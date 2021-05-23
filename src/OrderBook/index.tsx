import { Box, Grid, Paper } from "@material-ui/core";
// import Loader from "./components/Loader";

import PriceGroupControl from "./components/PriceGroupControl";
import PriceLevelList from "./components/PriceLevelList";
import ProductName from "./components/ProductName";

export default function OrderBook() {
  return (
    <>
      <ProductName>XBT/USD</ProductName>
      <Paper elevation={2}>
        <Box p={3}>
          {/* <Loader /> */}
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
