import { Box, BoxProps } from "@material-ui/core";

export interface Props {
  left: BoxProps["left"];
  right: BoxProps["right"];
  width: BoxProps["width"];
  bgcolor: BoxProps["bgcolor"];
}

export default function PriceLevelListItemBar({
  left,
  right,
  width,
  bgcolor,
}: Props) {
  return (
    <Box
      left={left}
      right={right}
      zIndex={-1}
      height="100%"
      bgcolor={bgcolor}
      position="absolute"
      /**
       * For performance reason
       */
      style={{ width }}
    />
  );
}
