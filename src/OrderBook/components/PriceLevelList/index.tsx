import PriceLevelListHeader from "../PriceLevelListHeader";
import { PriceLevelListItem } from "../PriceLevelListItem";

export interface Props {
  isBid?: boolean;
}

export default function PriceLevelList({ isBid = false }: Props) {
  const maxTotal = 400000;

  return (
    <>
      <PriceLevelListHeader isBid={isBid} />
      <PriceLevelListItem
        isBid={isBid}
        maxTotal={maxTotal}
        priceLevel={{ price: 1000, size: 500, total: 365000 }}
      />
      <PriceLevelListItem
        isBid={isBid}
        maxTotal={maxTotal}
        priceLevel={{ price: 2000, size: 7500, total: 361000 }}
      />
      <PriceLevelListItem
        isBid={isBid}
        maxTotal={maxTotal}
        priceLevel={{ price: 2000, size: 7500, total: 35000 }}
      />
      <PriceLevelListItem
        isBid={isBid}
        maxTotal={maxTotal}
        priceLevel={{ price: 1000, size: 500, total: 40000 }}
      />
      <PriceLevelListItem
        isBid={isBid}
        maxTotal={maxTotal}
        priceLevel={{ price: 2000, size: 7500, total: 400000 }}
      />
      <PriceLevelListItem
        isBid={isBid}
        maxTotal={maxTotal}
        priceLevel={{ price: 2000, size: 7500, total: 100000 }}
      />
      <PriceLevelListItem
        isBid={isBid}
        maxTotal={maxTotal}
        priceLevel={{ price: 1000, size: 500, total: 40000 }}
      />
      <PriceLevelListItem
        isBid={isBid}
        maxTotal={maxTotal}
        priceLevel={{ price: 2000, size: 7500, total: 400000 }}
      />
      <PriceLevelListItem
        isBid={isBid}
        maxTotal={maxTotal}
        priceLevel={{ price: 2000, size: 7500, total: 100000 }}
      />
    </>
  );
}
