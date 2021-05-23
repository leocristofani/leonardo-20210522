import { Box, Grid, Typography, TypographyProps } from "@material-ui/core";

import useStyles from "./styles";

export interface Props {
  isBid: boolean;
  children: TypographyProps["children"];
}

export default function PriceLevelListHeaderItem({ isBid, children }: Props) {
  const styles = useStyles({ isBid });

  return (
    <Grid item xs={4}>
      <Box px={1}>
        <Typography variant="overline" className={styles.text}>
          {children}
        </Typography>
      </Box>
    </Grid>
  );
}
