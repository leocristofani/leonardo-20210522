import React, { useCallback, useState } from "react";
import { Box, Typography } from "@material-ui/core";
import AddIcon from "@material-ui/icons/AddCircleOutlineOutlined";
import RemoveIcon from "@material-ui/icons/RemoveCircleOutlineOutlined";

import PriceGroupControlButton from "../PriceGroupControlButton";
import { PriceGroup, PriceGroupOptions } from "../../types";

interface Props {
  initialPriceGroup: PriceGroup;
  onChange: (currentPriceGroup: PriceGroup, nextPriceGroup: PriceGroup) => void;
}

function PriceGroupControl({ initialPriceGroup, onChange }: Props) {
  const [priceGroupIndex, setPriceGroupIndex] = useState<PriceGroup>(
    PriceGroupOptions.indexOf(initialPriceGroup)
  );

  const makeClickHandler = useCallback(
    (indexUpdater: (currentIndex: number) => number) => {
      return () => {
        setPriceGroupIndex((currentPriceGroupIndex) => {
          const nextPriceGroupIndex = indexUpdater(currentPriceGroupIndex);

          onChange(
            PriceGroupOptions[currentPriceGroupIndex],
            PriceGroupOptions[nextPriceGroupIndex]
          );

          return nextPriceGroupIndex;
        });
      };
    },
    [onChange]
  );

  return (
    <>
      <PriceGroupControlButton
        onClick={makeClickHandler((currentIndex) => currentIndex - 1)}
        disabled={priceGroupIndex === 0}
        title="Decrease order grouping"
      >
        <RemoveIcon />
      </PriceGroupControlButton>

      <PriceGroupControlButton
        onClick={makeClickHandler((currentIndex) => currentIndex + 1)}
        disabled={priceGroupIndex === PriceGroupOptions.length - 1}
        title="Increase order grouping"
      >
        <AddIcon />
      </PriceGroupControlButton>

      <Box ml={1} display="inline">
        <Typography display="inline">
          Price Group {(PriceGroupOptions[priceGroupIndex] / 2).toFixed(2)}
        </Typography>
      </Box>
    </>
  );
}

export default React.memo(PriceGroupControl);
