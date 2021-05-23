import { Typography, TypographyProps } from "@material-ui/core";

import useStyles from "./styles";

export interface Props {
  children: TypographyProps["children"];
}

export default function ProductName({ children }: Props) {
  const styles = useStyles();

  return (
    <Typography variant="h6" component="h1" className={styles.root}>
      {children}
    </Typography>
  );
}
