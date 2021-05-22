import { Box, Grid, Paper, Typography } from "@material-ui/core";

import PriceGroupControl from "./components/PriceGroupControl";
import PriceLevelList from "./components/PriceLevelList";

export default function OrderBook() {
  return (
    <>
      <Typography variant="h6" component="h1" style={{ color: "white" }}>
        XBT/USD
      </Typography>
      <Paper elevation={2}>
        <Box p={3}>
          <Box mb={2}>
            <PriceGroupControl />
          </Box>
          <Grid container>
            <Grid item xs={12} sm={6}>
              <PriceLevelList priceLevelType="bid" />
            </Grid>
            <Grid item xs={12} sm={6}>
              <PriceLevelList priceLevelType="ask" />
            </Grid>
          </Grid>
        </Box>
      </Paper>
    </>
  );
}
