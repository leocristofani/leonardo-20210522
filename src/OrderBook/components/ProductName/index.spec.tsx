import { screen, render } from "@testing-library/react";
import faker from "faker";

import ProductName, { Props } from "./";

const defaultProps: Props = {
  children: faker.random.word(),
};

function arrangeTest(props = defaultProps) {
  return render(<ProductName {...props} />);
}

describe("ProductName", () => {
  it("renders the product name", () => {
    const productName = faker.random.word();

    arrangeTest({ ...defaultProps, children: productName });

    expect(screen.getByText(productName)).toBeInTheDocument();
  });
});
