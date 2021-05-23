import { OrderBookApiEvent } from "./types";

export function makeRawApiEvent(event: OrderBookApiEvent, productId: string) {
  return JSON.stringify({
    event: event.type,
    feed: `book_ui_${event.priceGroup}`,
    product_ids: [productId],
  });
}

/**
 * Helper to throttle functions
 * @param fn function to be throttled
 * @param interval in milliseconds
 * @returns fn throttled
 */
export function throttle(fn: (...args: any[]) => void, interval: number) {
  let lastInvokedAt = -1;

  return function throttledFn(...args: any[]) {
    let now = Date.now();

    /** don't throttle the invokation call */
    if (lastInvokedAt === -1) {
      lastInvokedAt = now;
      return fn(...args);
    }

    let diff = now - lastInvokedAt;

    if (diff >= interval) {
      lastInvokedAt = now;
      fn(...args);
    }
  };
}
