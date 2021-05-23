import { useCallback, useState } from "react";
import { OrderBookDeltas } from "../../types";

import { OrderBookState } from "./types";
import {
  applyDeltas,
  getFirst,
  mapByPrice,
  sortByPrice,
  setTotal,
} from "./utils";

export default function useOrderBookState() {
  const [state, setState] = useState<OrderBookState>({
    bids: {},
    asks: {},
  });

  const onSnapshot = useCallback((snapshot: OrderBookDeltas) => {
    setState({
      bids: mapByPrice(snapshot.bids),
      asks: mapByPrice(snapshot.asks),
    });
  }, []);

  const onDelta = useCallback((deltas: OrderBookDeltas) => {
    setState((prevState: OrderBookState) => ({
      bids: applyDeltas(prevState.bids, deltas.bids),
      asks: applyDeltas(prevState.asks, deltas.asks),
    }));
  }, []);

  return {
    onDelta,
    onSnapshot,
    bids: setTotal(getFirst(sortByPrice(state.bids, "desc"), 15)),
    asks: setTotal(getFirst(sortByPrice(state.asks, "asc"), 15)),
  };
}
