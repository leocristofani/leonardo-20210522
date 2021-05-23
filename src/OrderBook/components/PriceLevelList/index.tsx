import { PriceLevel } from "../../types";
import PriceLevelListHeader from "../PriceLevelListHeader";
import PriceLevelListItem from "../PriceLevelListItem";

export interface Props {
  isBid?: boolean;
  priceLevels: PriceLevel[];
}

export default function PriceLevelList({ isBid = false, priceLevels }: Props) {
  const priceLevelLen = priceLevels.length;
  const maxTotal = priceLevelLen ? priceLevels[priceLevelLen - 1].total : 0;

  return (
    <>
      <PriceLevelListHeader isBid={isBid} />
      {priceLevels.map((priceLevel, index) => (
        <PriceLevelListItem
          key={index}
          isBid={isBid}
          maxTotal={maxTotal}
          priceLevel={priceLevel}
        />
      ))}
    </>
  );
}
