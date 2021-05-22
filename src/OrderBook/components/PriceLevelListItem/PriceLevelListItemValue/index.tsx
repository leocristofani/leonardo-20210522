import {
  Box,
  BoxProps,
  Grid,
  Typography,
  TypographyProps,
} from "@material-ui/core";

export interface Props {
  value: number;
  color: BoxProps["color"];
  align: TypographyProps["align"];
  minimumFractionDigits: number;
}

export default function PriceLevelListItemValue({
  value,
  align,
  color,
  minimumFractionDigits,
}: Props) {
  return (
    <Grid item xs={4}>
      <Box px={1} color={color}>
        <Typography align={align}>
          {value.toLocaleString(undefined, { minimumFractionDigits })}
        </Typography>
      </Box>
    </Grid>
  );
}
