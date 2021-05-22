import { Grid } from "@material-ui/core";

import { PriceLevelType } from "../../types";
import PriceLevelListHeaderItem from "./PriceLevelListHeaderItem";

interface Props {
  priceLevelType: PriceLevelType;
}

export default function PriceLevelListHeader({ priceLevelType }: Props) {
  const isBid = priceLevelType === "bid";

  const direction = isBid ? "row" : "row-reverse";
  const align = isBid ? "right" : "left";

  return (
    <Grid container direction={direction}>
      <PriceLevelListHeaderItem align={align}>Total</PriceLevelListHeaderItem>
      <PriceLevelListHeaderItem align={align}>Size</PriceLevelListHeaderItem>
      <PriceLevelListHeaderItem align={align}>Price</PriceLevelListHeaderItem>
    </Grid>
  );
}
