import { screen, fireEvent, render } from "@testing-library/react";
import { PriceGroupOptions } from "../../types";

import PriceGroupControl, { Props } from "./index";

const defaultProps: Props = {
  priceGroup: PriceGroupOptions[0],
  onChange: jest.fn(),
};

function arrangeTest(props = defaultProps) {
  return render(<PriceGroupControl {...props} />);
}

describe("PriceGroupControl", () => {
  it("renders the initial price group", () => {
    const priceGroup = PriceGroupOptions[1];
    const props: Props = {
      ...defaultProps,
      priceGroup,
    };

    arrangeTest(props);

    expect(screen.getByText("Price Group 2.50")).toBeInTheDocument();
  });

  it("changes to the next price group", () => {
    const onChange = jest.fn();
    const currentPriceGroup = PriceGroupOptions[0];
    const nextPriceGroup = PriceGroupOptions[1];
    const props: Props = { priceGroup: currentPriceGroup, onChange };

    arrangeTest(props);

    const nextButton = screen.getByTitle("Increase order grouping");

    fireEvent.click(nextButton);

    expect(onChange).toHaveBeenCalledTimes(1);
    expect(onChange).toHaveBeenCalledWith(currentPriceGroup, nextPriceGroup);
  });

  it("changes to the previous price group", () => {
    const onChange = jest.fn();
    const currentPriceGroup = PriceGroupOptions[3];
    const prevPriceGroup = PriceGroupOptions[2];
    const props: Props = { priceGroup: currentPriceGroup, onChange };

    arrangeTest(props);

    const prevButton = screen.getByTitle("Decrease order grouping");

    fireEvent.click(prevButton);

    expect(onChange).toHaveBeenCalledTimes(1);
    expect(onChange).toHaveBeenCalledWith(currentPriceGroup, prevPriceGroup);
  });

  describe("when on the first price group option", () => {
    it("disables the button to change to the previous price group", () => {
      const firstPriceGroup = PriceGroupOptions[0];
      const props: Props = {
        ...defaultProps,
        priceGroup: firstPriceGroup,
      };

      arrangeTest(props);

      const prevButton = screen.getByTestId(
        "price-control-button-Decrease order grouping"
      );

      expect(prevButton).toBeDisabled();
    });
  });

  describe("when on the last price group option", () => {
    it("disables the button to change to the next price group", () => {
      const lastPriceGroup = PriceGroupOptions[PriceGroupOptions.length - 1];
      const props: Props = {
        ...defaultProps,
        priceGroup: lastPriceGroup,
      };

      arrangeTest(props);

      const prevButton = screen.getByTestId(
        "price-control-button-Increase order grouping"
      );

      expect(prevButton).toBeDisabled();
    });
  });
});
