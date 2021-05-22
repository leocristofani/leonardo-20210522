import { Box, Container, CssBaseline, ThemeProvider } from "@material-ui/core";

import theme from "./theme";
import AppBg from "./AppBg";
import OrderBook from "../OrderBook";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBg />
      <Container maxWidth="md">
        <Box mt={6}>
          <OrderBook />
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default App;
