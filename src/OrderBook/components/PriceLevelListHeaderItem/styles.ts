import { makeStyles, Theme } from "@material-ui/core";

interface StyleProps {
  isBid: boolean;
}

const useStyles = makeStyles<Theme, StyleProps>((theme) => ({
  text: {
    display: "block",
    [theme.breakpoints.up("sm")]: {
      textAlign: ({ isBid }) => (isBid ? "right" : "left"),
    },
  },
}));

export default useStyles;
