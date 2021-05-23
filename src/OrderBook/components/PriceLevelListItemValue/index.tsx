import React from "react";
import { Box, BoxProps, Grid, Typography } from "@material-ui/core";

import useStyles from "./styles";

export interface Props {
  isBid: boolean;
  value: number;
  color: BoxProps["color"];
  minimumFractionDigits: number;
}

function PriceLevelListItemValue({
  value,
  color,
  isBid,
  minimumFractionDigits,
}: Props) {
  const styles = useStyles({ isBid });

  return (
    <Grid item xs={4}>
      <Box px={1} color={color}>
        <Typography className={styles.text}>
          {value.toLocaleString(undefined, { minimumFractionDigits })}
        </Typography>
      </Box>
    </Grid>
  );
}

export default React.memo(PriceLevelListItemValue);
