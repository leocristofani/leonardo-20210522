# OrderBook

Live Demo: https://leonardo-20210523.netlify.app/

## How to run the project?

1. Open the terminal
2. Run `git clone git@github.com:leocristofani/leonardo-20210523.git` to clone the repo
3. Run `cd leonardo-20210523` to go inside the project
4. Run `yarn install` to install dependencies
5. Run `cp .env.example .env` to copy sample environment variables
6. Start the local dev. server: `yarn start`

## How to build the project?

Run `yarn build` to create a production version of the project in the `build` folder. If you're going to build the project in a CI env. like CircleCI or hosting provider like Netlify, Amazon, don't forget to supply the necessary environment variables. Refer to `.env.sample`.

As you can see from the env. variables file, you can build the orderbook to show information about any product, as long as you sypply the correct product id and product name.

## How to run tests?

#### Jest tests

- `yarn test` - run tests once
- `yarn test:watch` - run tests during development to watch for changes

#### Cypress tests

1. `yarn start` in one terminal window
2. in another terminal window, run `cypress:run` to run Cypress in the terminal or `cypress:open` to run Cypress on the browser

## Environment variables

PS. Environment variables have to be prefixed with `REACT_APP_` because it's required by [Create React App](https://create-react-app.dev/docs/adding-custom-environment-variables/).

- `REACT_APP_ORDERBOOK_MIN_UPDATE_INTERVAL=150`: is how often (in milliseconds) we update the UI based on price level deltas that come from the server. The realtime API that we use is very fast, so in order not to cause issues on the user machine due to too many UI updates, we use this interval to throttle the UI updates. I made this configurable to make it easy to change based on product/design feedback.

- `REACT_APP_ORDERBOOK_INITIAL_PRICE_GROUP=1`: How the orderbook groups order pricing.

- `REACT_APP_ORDERBOOK_PRODUCT_ID=PI_XBTUSD`: The id of the product which you want to display information.

- `REACT_APP_ORDERBOOK_PRODUCT_NAME=XBT/USD` The name of the product which you want to display information.

- `REACT_APP_ORDERBOOK_API_URL=wss://www.cryptofacilities.com/ws/v1`: URL to the realtime (web socket) API service.

## Technology stack

#### Implementation

- React
- Material UI
- Create React App
- Web Socket (native browser API)

#### Testing

- Cypress
- React Testing Library
- React Hooks Testing Library

## Roadmap

1. Use Sentry to report errors instead of `console.log`
2. Unsubscribe from deltas when the user blurs from the window tab, and subscribe when the user comes back
3. Increase test coverage - unit, integration and e2e tests
4. Persist the last selected price group in LocalStorage to provider the user with a better experience
5. Make the OrderBook vertically responsive, as well
6. Let the user select the OrderBook project
7. Consider [Socket.io](https://socket.io/) instead of native WebSocket in case we need to support older browsers
