import { Component, ErrorInfo } from "react";
import { Box, Paper, Typography } from "@material-ui/core";

import ProductName from "../ProductName";

interface Props {
  productName: string;
  children: React.ReactNode;
}

interface State {
  hasError: boolean;
}

export default class OrderBookErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    /**
     * PS. In a real world application, log this error to a service like Sentry instead.
     */
    console.log(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <>
          <ProductName>{this.props.productName}</ProductName>
          <Paper elevation={2}>
            <Box p={8} textAlign="center">
              <Typography variant="h4" color="primary">
                Sorry, something went wrong ;(
              </Typography>
              <Typography>
                We can't show you price ordering data for this product now. Our
                support team has already been informed and will solve this
                problem as soon as possible. In the meantime, you can try again
                by refreshing the page come back later.
              </Typography>
            </Box>
          </Paper>
        </>
      );
    }

    return this.props.children;
  }
}
