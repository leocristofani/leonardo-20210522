import { Box, Typography } from "@material-ui/core";
import AddIcon from "@material-ui/icons/AddCircleOutlineOutlined";
import RemoveIcon from "@material-ui/icons/RemoveCircleOutlineOutlined";

import PriceGroupControlButton from "./PriceGroupControlButton";

export default function PriceGroupControl() {
  return (
    <>
      <PriceGroupControlButton
        onClick={() => {}}
        title="Decrease order grouping"
      >
        <RemoveIcon />
      </PriceGroupControlButton>

      <PriceGroupControlButton
        onClick={() => {}}
        title="Increase order grouping"
      >
        <AddIcon />
      </PriceGroupControlButton>

      <Box ml={1} display="inline">
        <Typography display="inline">Price Group 5.0</Typography>
      </Box>
    </>
  );
}
