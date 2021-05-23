import { Box } from "@material-ui/core";
import CircularProgress from "@material-ui/core/CircularProgress";

function OrderBookLoader() {
  return (
    <Box p={5} textAlign="center">
      <CircularProgress />
    </Box>
  );
}

export default OrderBookLoader;
