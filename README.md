# OrderBook

## How to run the project?

1. Open the terminal
2. Clone the repo: `git clone git@github.com:leocristofani/leonardo-20210523.git`
3. Go inside: `cd leonardo-20210523`
4. Install the dependecies: `yarn install`
5. Copy sample env. variables: `cp .env.example .env`
6. Start the local dev. server: `yarn start`

## How to build the project?

Run `yarn build` to create a production version of the project in the `build` folder. If you're going to build the project in a CI env. like CircleCI or hosting provider like Netlify, Amazon, don't forget to supply the necessary environment variables. Refer to `.env.sample`.

As you can see from the env. variables file, you can build the orderbook to show information about any project, as long as you sypply the correct project id and project name.

## Environment Variables

PS. Environment variables have to be prefixed with `REACT_APP_` because it's required by [Create React App](https://create-react-app.dev/docs/adding-custom-environment-variables/).

`REACT_APP_ORDERBOOK_MIN_UPDATE_INTERVAL=150`: is how often (in milliseconds) we update the UI based on price level deltas that come from the server. The realtime API that we use is very fast, so in order not to cause issues on the user machine due to too many UI updates, we use this interval to throttle the UI updates. I made this configurable to make it easy to change based on product/design feedback.

`REACT_APP_ORDERBOOK_INITIAL_PRICE_GROUP=1`: How the orderbook groups order pricing.

`REACT_APP_ORDERBOOK_PRODUCT_ID=PI_XBTUSD`: The id of the product which you want to display information.

`REACT_APP_ORDERBOOK_PRODUCT_NAME=XBT/USD` The name of the product which you want to display information.

`REACT_APP_ORDERBOOK_API_URL=wss://www.cryptofacilities.com/ws/v1`: URL to the realtime (web socket) API service.

## Technology Stack

- React
- Material UI
- Create React App
- Web Socket (native browser API)

## Code Considerations

- Use a service like Sentry to report errors
- Use socket.io instead because it supports older browsers by falling back to `long polling`
- Make `isBid` avaiable via context from OrderBook. The advantage is that I would not have to prop drill it, but then to test every component I would have to wrapped the tested component with this context.
- Save the selected price group in LocalStorage, so when the user reloads the page it still shows the last selected price group.
