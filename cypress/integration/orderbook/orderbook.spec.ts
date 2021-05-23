import { WebSocket, Server } from "mock-socket";

const ORDERBOOK_URL = "http://localhost:3000";
const ORDERBOOK_API_URL = "wss://www.cryptofacilities.com/ws/v1";

function mockServer(onMessage: (socket: WebSocket) => void) {
  new Server(ORDERBOOK_API_URL).on("connection", (socket: WebSocket) => {
    socket.on("message", () => onMessage(socket));
  });
}

context("OrderBook", () => {
  it("renders properly with initial snapshot and first delta", () => {
    cy.visit(ORDERBOOK_URL, {
      onBeforeLoad(win) {
        mockServer((socket: WebSocket) => {
          // send initial snapshot
          socket.send(
            JSON.stringify({
              numLevels: 25,
              feed: "book_ui_1_snapshot",
              bids: [
                [30, 50],
                [20, 60],
                [10, 70],
              ],
              asks: [
                [20, 10],
                [30, 5],
                [40, 7],
              ],
            })
          );

          // send first delta
          socket.send(
            JSON.stringify({
              feed: "book_ui_1",
              bids: [],
              asks: [
                [20, 500],
                [30, 250],
              ],
            })
          );
        });
        cy.stub(win, "WebSocket", (url: string) => new WebSocket(url));
      },
    });

    // Verify it renders the product name
    cy.contains("XBT/USD");

    // Verify it renders the initial price group
    cy.contains("Price Group 0.50");

    // Verify first bid price and total
    cy.contains("30.00");
    cy.contains("50");

    // Verify second bid price and total
    cy.contains("20.00");
    cy.contains("110");

    // Verify first bid price and total
    cy.contains("10.00");
    cy.contains("180");

    // Verify ask totals after the first delta
    cy.contains("500");
    cy.contains("750");
    cy.contains("757");
  });
});
