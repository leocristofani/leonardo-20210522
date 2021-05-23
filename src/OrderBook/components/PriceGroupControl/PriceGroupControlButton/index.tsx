import {
  IconButton,
  IconButtonProps,
  Tooltip,
  TooltipProps,
} from "@material-ui/core";

export interface Props {
  title: TooltipProps["title"];
  disabled: IconButtonProps["disabled"];
  onClick: IconButtonProps["onClick"];
  children: IconButtonProps["children"];
}

export default function PriceGroupControlButton({
  title,
  disabled,
  onClick,
  children,
}: Props) {
  const button = (
    <IconButton
      size="small"
      color="primary"
      onClick={onClick}
      disabled={disabled}
      data-testid={`price-control-button-${title}`}
    >
      {children}
    </IconButton>
  );

  return disabled ? button : <Tooltip title={title}>{button}</Tooltip>;
}
