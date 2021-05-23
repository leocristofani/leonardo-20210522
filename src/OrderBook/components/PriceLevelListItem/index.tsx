import { Grid, useTheme } from "@material-ui/core";

import useStyles from "./styles";
import { PriceLevel } from "../../types";
import PriceLevelListItemBar from "./PriceLevelListItemBar";
import PriceLevelListItemValue from "./PriceLevelListItemValue";

export interface Props {
  isBid: boolean;
  maxTotal: number;
  priceLevel: PriceLevel;
}

export default function PriceLevelListItem({
  isBid,
  priceLevel,
  maxTotal,
}: Props) {
  const styles = useStyles({ isBid });

  const { palette } = useTheme();
  const priceColor = isBid ? palette.success.main : palette.error.main;

  return (
    <>
      <Grid container className={styles.root}>
        <PriceLevelListItemBar
          isBid={isBid}
          width={`${(priceLevel.total / maxTotal) * 100}%`}
        />
        <PriceLevelListItemValue
          isBid={isBid}
          color={palette.text}
          value={priceLevel.total}
          minimumFractionDigits={0}
        />
        <PriceLevelListItemValue
          isBid={isBid}
          color={palette.text}
          value={priceLevel.size}
          minimumFractionDigits={0}
        />
        <PriceLevelListItemValue
          isBid={isBid}
          color={priceColor}
          value={priceLevel.price}
          minimumFractionDigits={2}
        />
      </Grid>
    </>
  );
}
