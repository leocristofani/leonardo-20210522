import { screen, render } from "@testing-library/react";

import ProductName, { Props } from "./";

const defaultProps: Props = {
  children: "XXX/YY",
};

function arrangeTest(props = defaultProps) {
  return render(<ProductName {...props} />);
}

describe("ProductName", () => {
  it("renders the product name", () => {
    const productName = "KRA/CSS";

    arrangeTest({ ...defaultProps, children: productName });

    expect(screen.getByText(productName)).toBeInTheDocument();
  });
});
