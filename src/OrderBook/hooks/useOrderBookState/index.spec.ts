import { renderHook, act } from "@testing-library/react-hooks";

import useOrderBookState from ".";
import { OrderBookDeltas } from "../../types";
import { OrderBookState } from "./types";

describe("useOrderBookState", () => {
  it("starts with empty bids and asks", () => {
    const maxNumberOfPriceLevels = 3;
    const { result } = renderHook(() =>
      useOrderBookState(maxNumberOfPriceLevels)
    );

    expect(result.current.bids.length).toBe(0);
    expect(result.current.asks.length).toBe(0);
  });

  it("loads the state with a snapshot", () => {
    const maxNumberOfPriceLevels = 2;
    const { result } = renderHook(() =>
      useOrderBookState(maxNumberOfPriceLevels)
    );

    const snapshot: OrderBookDeltas = {
      bids: [
        [32911.5, 1882.0],
        [32888.5, 11043.0],
      ],
      asks: [
        [32927.5, 3172.0],
        [32928.5, 4766.0],
      ],
    };

    act(() => {
      result.current.onSnapshot(snapshot);
    });

    const state: OrderBookState = {
      bids: [
        { price: 32911.5, size: 1882, total: 1882 },
        { price: 32888.5, size: 11043, total: 12925 },
      ],
      asks: [
        { price: 32927.5, size: 3172, total: 3172 },
        { price: 32928.5, size: 4766, total: 7938 },
      ],
    };

    expect(result.current.bids).toEqual(state.bids);
    expect(result.current.asks).toEqual(state.asks);
  });

  it("updates the state with deltas", () => {
    const maxNumberOfPriceLevels = 2;
    const { result } = renderHook(() =>
      useOrderBookState(maxNumberOfPriceLevels)
    );

    const snapshot: OrderBookDeltas = {
      bids: [
        [32911.5, 1882.0],
        [32888.5, 11043.0],
      ],
      asks: [
        [32927.5, 3172.0],
        [32928.5, 4766.0],
      ],
    };

    act(() => {
      result.current.onSnapshot(snapshot);
    });

    const deltas: OrderBookDeltas = {
      bids: [[32911.5, 2992.0]],
      asks: [
        [32927.5, 4004.0],
        [32928.5, 5005.0],
      ],
    };

    act(() => {
      result.current.onDelta(deltas);
    });

    const state: OrderBookState = {
      bids: [
        { price: 32911.5, size: 2992, total: 2992 },
        { price: 32888.5, size: 11043, total: 14035 },
      ],
      asks: [
        { price: 32927.5, size: 4004, total: 4004 },
        { price: 32928.5, size: 5005, total: 9009 },
      ],
    };

    expect(result.current.bids).toEqual(state.bids);
    expect(result.current.asks).toEqual(state.asks);
  });

  it("sets the total on each price level as the sum of the size at the current level and every level below it", () => {
    const maxNumberOfPriceLevels = 4;
    const { result } = renderHook(() =>
      useOrderBookState(maxNumberOfPriceLevels)
    );

    const snapshot: OrderBookDeltas = {
      bids: [
        [800.5, 30.0],
        [500.5, 20.0],
        [400.5, 10.0],
      ],
      asks: [
        [50.5, 40.0],
        [100.5, 20.0],
        [200.5, 30.0],
      ],
    };

    act(() => {
      result.current.onSnapshot(snapshot);
    });

    const state: OrderBookState = result.current;

    expect(state.bids[0].total).toEqual(30);
    expect(state.bids[1].total).toEqual(50);
    expect(state.bids[2].total).toEqual(60);

    expect(state.asks[0].total).toEqual(40);
    expect(state.asks[1].total).toEqual(60);
    expect(state.asks[2].total).toEqual(90);
  });

  it("limits the number of bids and asks", () => {
    const maxNumberOfPriceLevels = 1;
    const { result } = renderHook(() =>
      useOrderBookState(maxNumberOfPriceLevels)
    );

    const snapshot: OrderBookDeltas = {
      bids: [
        [32911.5, 1882.0],
        [32888.5, 11043.0],
      ],
      asks: [
        [32927.5, 3172.0],
        [32928.5, 4766.0],
      ],
    };

    act(() => {
      result.current.onSnapshot(snapshot);
    });

    expect(result.current.bids.length).toEqual(maxNumberOfPriceLevels);
    expect(result.current.asks.length).toEqual(maxNumberOfPriceLevels);
  });

  it("sorts bids (desc) and asks (asc) by price", () => {
    const maxNumberOfPriceLevels = 4;
    const { result } = renderHook(() =>
      useOrderBookState(maxNumberOfPriceLevels)
    );

    const snapshot: OrderBookDeltas = {
      bids: [
        [400.5, 1882.0],
        [500.5, 11043.0],
        [800.5, 11043.0],
        [100.5, 11043.0],
      ],
      asks: [
        [100.5, 3172.0],
        [200.5, 4766.0],
        [50.5, 4766.0],
        [1000.5, 4766.0],
      ],
    };

    act(() => {
      result.current.onSnapshot(snapshot);
    });

    const state: OrderBookState = {
      bids: [
        { price: 800.5, size: 11043, total: 11043 },
        { price: 500.5, size: 11043, total: 22086 },
        { price: 400.5, size: 1882, total: 23968 },
        { price: 100.5, size: 11043, total: 35011 },
      ],
      asks: [
        { price: 50.5, size: 4766, total: 4766 },
        { price: 100.5, size: 3172, total: 7938 },
        { price: 200.5, size: 4766, total: 12704 },
        { price: 1000.5, size: 4766, total: 17470 },
      ],
    };

    expect(result.current.bids).toEqual(state.bids);
    expect(result.current.asks).toEqual(state.asks);
  });
});
