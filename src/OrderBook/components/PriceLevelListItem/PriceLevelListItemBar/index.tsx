import { Box, BoxProps } from "@material-ui/core";

import useStyles from "./styles";

export interface Props {
  isBid: boolean;
  width: BoxProps["width"];
}

export default function PriceLevelListItemBar({ isBid, width }: Props) {
  const styles = useStyles({ isBid });

  return (
    <Box
      data-testid="price-level-list-item-bar"
      className={styles.root}
      /**
       * PS. For performance reasons:
       *
       * Since "width" changes very frequently and has very random values if we define it in styles, Material UI
       * will create create a new class for every new width and this could end up causing a memory leak.
       */
      style={{ width }}
    />
  );
}
