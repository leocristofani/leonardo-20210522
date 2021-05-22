import { Box, Grid, Typography, TypographyProps } from "@material-ui/core";

export interface Props {
  align: TypographyProps["align"];
  children: TypographyProps["children"];
}

export default function PriceLevelListHeaderItem({ align, children }: Props) {
  return (
    <Grid item xs={4}>
      <Box px={1}>
        <Typography variant="overline" display="block" align={align}>
          {children}
        </Typography>
      </Box>
    </Grid>
  );
}
