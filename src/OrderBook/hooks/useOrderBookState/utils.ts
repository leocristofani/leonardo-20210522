import { PriceLevelsByPrice } from "./types";
import { PriceLevel, PriceLevelDelta } from "../../types";

export function mapByPrice(priceLevelDeltas: PriceLevelDelta[]) {
  return priceLevelDeltas.reduce(
    (acc: PriceLevelsByPrice, [price, size]: PriceLevelDelta) => {
      acc[price] = { price, size, total: 0 };

      return acc;
    },
    {}
  );
}

export function applyDeltas(
  levelsByPrice: PriceLevelsByPrice,
  deltas: PriceLevelDelta[]
) {
  const updatedLevelsByPrice = { ...levelsByPrice };

  deltas.forEach(([price, size]: PriceLevelDelta) => {
    if (size === 0) {
      if (updatedLevelsByPrice[price]) {
        delete updatedLevelsByPrice[price];
      }
    } else {
      updatedLevelsByPrice[price] = { price, size, total: 0 };
    }
  });

  return updatedLevelsByPrice;
}

export function setTotal(priceLevels: PriceLevel[]) {
  return priceLevels.map((priceLevel: PriceLevel, index: number) => {
    return {
      ...priceLevel,
      total: priceLevels
        .slice(0, index)
        .reduce((acc, cur) => acc + cur.size, priceLevel.size),
    };
  });
}

export function sortByPrice(
  priceLevelsByPrice: PriceLevelsByPrice,
  sortDirection: "asc" | "desc"
): PriceLevel[] {
  return Object.values(priceLevelsByPrice).sort(
    (priceLevelA: PriceLevel, priceLevelB: PriceLevel) => {
      if (priceLevelA.price === priceLevelB.price) {
        return 0;
      }

      if (sortDirection === "desc") {
        return priceLevelA.price < priceLevelB.price ? 1 : -1;
      }

      return priceLevelA.price > priceLevelB.price ? 1 : -1;
    }
  );
}

export function getFirst(arr: any[], limit: number) {
  return arr.slice(0, limit);
}
