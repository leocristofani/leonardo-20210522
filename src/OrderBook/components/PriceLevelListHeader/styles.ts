import { makeStyles, Theme } from "@material-ui/core";

export interface StyleProps {
  isBid: boolean;
}

const useStyles = makeStyles<Theme, StyleProps>((theme) => ({
  root: {
    [theme.breakpoints.up("sm")]: {
      flexDirection: ({ isBid }) => (isBid ? "row" : "row-reverse"),
    },
  },
}));

export default useStyles;
