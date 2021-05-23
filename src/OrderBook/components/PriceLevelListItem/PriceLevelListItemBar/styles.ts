import { makeStyles, Theme } from "@material-ui/core";

interface StyleProps {
  isBid: boolean;
}

const useStyles = makeStyles<Theme, StyleProps>((theme) => ({
  root: {
    zIndex: -1,
    height: "100%",
    position: "absolute",
    left: 0.5,
    [theme.breakpoints.up("sm")]: {
      left: ({ isBid }) => (isBid ? "auto" : 0.5),
      right: ({ isBid }) => (isBid ? 0.5 : "auto"),
    },
    backgroundColor: ({ isBid }) =>
      isBid ? theme.palette.success.light : theme.palette.error.light,
  },
}));

export default useStyles;
