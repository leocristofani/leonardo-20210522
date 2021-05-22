import { colors, createMuiTheme } from "@material-ui/core";

const theme = createMuiTheme({
  palette: {
    text: {
      primary: colors.grey[900],
    },
    success: {
      light: colors.green[100],
      main: colors.green[700],
    },
    error: {
      light: colors.red[100],
      main: colors.red[700],
    },
  },
});

export default theme;
