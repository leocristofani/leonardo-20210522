import { Grid, useTheme } from "@material-ui/core";

import { PriceLevel, PriceLevelType } from "../../types";
import PriceLevelListItemBar from "./PriceLevelListItemBar";
import PriceLevelListItemValue from "./PriceLevelListItemValue";
import useStyles from "./styles";

export interface Props {
  maxTotal: number;
  priceLevel: PriceLevel;
  priceLevelType: PriceLevelType;
}

export function PriceLevelListItem({
  priceLevel,
  priceLevelType,
  maxTotal,
}: Props) {
  const { palette } = useTheme();
  const styles = useStyles();

  const isBid = priceLevelType === "bid";
  const priceColor = isBid ? palette.success.main : palette.error.main;
  const barBgColor = isBid ? palette.success.light : palette.error.light;
  const valueAlign = isBid ? "right" : "left";
  const gridDirection = isBid ? "row" : "row-reverse";

  return (
    <>
      <Grid container direction={gridDirection} className={styles.root}>
        <PriceLevelListItemBar
          bgcolor={barBgColor}
          left={!isBid && 0.5}
          right={isBid && 0.5}
          width={`${(priceLevel.total / maxTotal) * 100}%`}
        />
        <PriceLevelListItemValue
          align={valueAlign}
          color={palette.text}
          value={priceLevel.total}
          minimumFractionDigits={0}
        />
        <PriceLevelListItemValue
          align={valueAlign}
          color={palette.text}
          value={priceLevel.size}
          minimumFractionDigits={0}
        />
        <PriceLevelListItemValue
          align={valueAlign}
          color={priceColor}
          value={priceLevel.price}
          minimumFractionDigits={2}
        />
      </Grid>
    </>
  );
}
