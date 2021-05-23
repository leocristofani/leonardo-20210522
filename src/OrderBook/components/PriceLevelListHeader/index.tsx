import { Grid } from "@material-ui/core";

import useStyles from "./styles";
import PriceLevelListHeaderItem from "../PriceLevelListHeaderItem";

interface Props {
  isBid: boolean;
}

export default function PriceLevelListHeader({ isBid }: Props) {
  const styles = useStyles({ isBid });

  return (
    <Grid container className={styles.root}>
      <PriceLevelListHeaderItem isBid={isBid}>Total</PriceLevelListHeaderItem>
      <PriceLevelListHeaderItem isBid={isBid}>Size</PriceLevelListHeaderItem>
      <PriceLevelListHeaderItem isBid={isBid}>Price</PriceLevelListHeaderItem>
    </Grid>
  );
}
