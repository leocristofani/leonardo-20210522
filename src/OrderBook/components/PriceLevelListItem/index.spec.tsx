import { Theme } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/styles";
import { screen, render } from "@testing-library/react";

import appTheme from "../../../App/theme";
import PriceLevelListItem, { Props } from "./";

const defaultProps: Props = {
  isBid: false,
  maxTotal: 200000,
  priceLevel: {
    price: 10000,
    total: 8000,
    size: 50,
  },
};

function arrangeTest(props = defaultProps, theme: Theme = appTheme) {
  return render(
    <ThemeProvider theme={theme}>
      <PriceLevelListItem {...props} />
    </ThemeProvider>
  );
}

describe("PriceLevelListItem", () => {
  it("renders the formatted total", () => {
    const total = 650000;
    const props = {
      ...defaultProps,
      priceLevel: { ...defaultProps.priceLevel, total },
    };

    arrangeTest(props);

    expect(screen.getByText("650,000")).toBeInTheDocument();
  });

  it("renders the formatted size", () => {
    const size = 200;
    const props = {
      ...defaultProps,
      priceLevel: { ...defaultProps.priceLevel, size },
    };

    arrangeTest(props);

    expect(screen.getByText("200")).toBeInTheDocument();
  });

  describe("renders the price", () => {
    it("formatted", () => {
      const price = 3000;
      const props = {
        ...defaultProps,
        priceLevel: { ...defaultProps.priceLevel, price },
      };

      arrangeTest(props);

      expect(screen.getByText("3,000.00")).toBeInTheDocument();
    });

    it("with bid color (green)", () => {
      const price = 3000;
      const props = {
        ...defaultProps,
        isBid: true,
        priceLevel: {
          ...defaultProps.priceLevel,
          price,
        },
      };

      arrangeTest(props);

      expect(screen.getByText("3,000.00")).toHaveStyle(
        'color: "rgb(211, 47, 47)"'
      );
    });

    it("with ask color (red)", () => {
      const price = 3000;
      const props = {
        ...defaultProps,
        priceLevel: {
          ...defaultProps.priceLevel,
          price,
        },
      };

      arrangeTest(props);

      expect(screen.getByText("3,000.00")).toHaveStyle(
        'color: "rgb(56, 142, 60)"'
      );
    });
  });

  describe("renders the relative total bar", () => {
    it("renders the relative total bar", () => {
      const maxTotal = 1000;
      const total = 200;
      const props = {
        ...defaultProps,
        priceLevel: {
          ...defaultProps.priceLevel,
          total,
        },
        maxTotal,
      };

      arrangeTest(props);

      expect(screen.getByTestId("price-level-list-item-bar")).toHaveStyle(
        "width: 20%"
      );
    });

    it("with bid color (green)", () => {
      const props = { ...defaultProps, isBid: true };
      const lightGreen = "#c8e6c9";

      const theme: Theme = {
        ...appTheme,
        palette: {
          ...appTheme.palette,
          success: {
            ...appTheme.palette.success,
            light: lightGreen,
          },
        },
      };

      arrangeTest(props, theme);

      expect(screen.getByTestId("price-level-list-item-bar")).toHaveStyle(
        `background-color: ${lightGreen}`
      );
    });

    it("with ask color (red)", () => {
      const props = { ...defaultProps, isBid: true };
      const lightRed = "#ffcdd2";

      const theme: Theme = {
        ...appTheme,
        palette: {
          ...appTheme.palette,
          success: {
            ...appTheme.palette.success,
            light: lightRed,
          },
        },
      };

      arrangeTest(props, theme);

      expect(screen.getByTestId("price-level-list-item-bar")).toHaveStyle(
        `background-color: ${lightRed}`
      );
    });
  });
});
