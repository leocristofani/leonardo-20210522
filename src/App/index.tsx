import { Box, Container, CssBaseline, ThemeProvider } from "@material-ui/core";

import theme from "./theme";
import AppBg from "./AppBg";
import OrderBook from "../OrderBook";
import getConfig from "../config";

function App() {
  const config = getConfig();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBg />
      <Container maxWidth="md">
        <Box mt={6}>
          <OrderBook {...config} />
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default App;
