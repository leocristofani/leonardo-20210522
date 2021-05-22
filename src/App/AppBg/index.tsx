import { Box, useTheme } from "@material-ui/core";

export default function AppBg() {
  const { palette } = useTheme();

  return (
    <Box
      top={0}
      left={0}
      height={164}
      width={1}
      zIndex={-2}
      position="fixed"
      bgcolor={palette.primary.dark}
    />
  );
}
