import { useCallback, useEffect, useRef, useState } from "react";

import { OrderBookDeltas } from "../../types";
import { OrderBookApiEvent } from "./types";
import { makeRawApiEvent, throttle } from "./utils";

interface Props {
  apiUrl: string;
  productId: string;
  minUpdateInterval: number;
  initialEvent: OrderBookApiEvent;
  onDelta: (delta: OrderBookDeltas) => void;
  onSnapshot: (snapshot: OrderBookDeltas) => void;
}

export default function useOrderBookApi({
  apiUrl,
  productId,
  minUpdateInterval,
  initialEvent,
  onSnapshot,
  onDelta,
}: Props) {
  const [connecting, setConnecting] = useState<boolean>(true);

  const socket = useRef<WebSocket | null>(null);

  const emitEvent = useCallback(
    function emitEvent(event: OrderBookApiEvent) {
      socket.current?.send(makeRawApiEvent(event, productId));
    },
    [productId]
  );

  useEffect(
    function bindToSocketEvents() {
      if (socket.current) {
        return;
      }

      socket.current = new WebSocket(apiUrl);

      socket.current.onopen = () => {
        setConnecting(false);
        emitEvent(initialEvent);
      };

      const throttledOnDelta = throttle(onDelta, minUpdateInterval);

      socket.current.onmessage = (event: MessageEvent) => {
        try {
          const data = JSON.parse(event.data);

          /**
           * Process the initial snapshot and subsequent deltas
           */
          if (data.bids && data.asks) {
            if (data.numLevels) {
              onSnapshot(data);
            } else {
              throttledOnDelta(data);
            }
          }
        } catch {
          console.error("Unable to parse order book snapshot or deltas");
        }
      };
    },
    [initialEvent, emitEvent, onSnapshot, onDelta, apiUrl, minUpdateInterval]
  );

  return { emitEvent, connecting };
}
