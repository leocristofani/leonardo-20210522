import { PriceLevelType } from "../../types";
import PriceLevelListHeader from "../PriceLevelListHeader";
import { PriceLevelListItem } from "../PriceLevelListItem";

export interface Props {
  priceLevelType: PriceLevelType;
}

export default function PriceLevelList({ priceLevelType }: Props) {
  const maxTotal = 400000;

  return (
    <>
      <PriceLevelListHeader priceLevelType={priceLevelType} />
      <PriceLevelListItem
        maxTotal={maxTotal}
        priceLevelType={priceLevelType}
        priceLevel={{ price: 1000, size: 500, total: 365000 }}
      />
      <PriceLevelListItem
        maxTotal={maxTotal}
        priceLevelType={priceLevelType}
        priceLevel={{ price: 2000, size: 7500, total: 361000 }}
      />
      <PriceLevelListItem
        maxTotal={maxTotal}
        priceLevelType={priceLevelType}
        priceLevel={{ price: 2000, size: 7500, total: 35000 }}
      />
      <PriceLevelListItem
        maxTotal={maxTotal}
        priceLevelType={priceLevelType}
        priceLevel={{ price: 1000, size: 500, total: 40000 }}
      />
      <PriceLevelListItem
        maxTotal={maxTotal}
        priceLevelType={priceLevelType}
        priceLevel={{ price: 2000, size: 7500, total: 400000 }}
      />
      <PriceLevelListItem
        maxTotal={maxTotal}
        priceLevelType={priceLevelType}
        priceLevel={{ price: 2000, size: 7500, total: 100000 }}
      />
      <PriceLevelListItem
        maxTotal={maxTotal}
        priceLevelType={priceLevelType}
        priceLevel={{ price: 1000, size: 500, total: 40000 }}
      />
      <PriceLevelListItem
        maxTotal={maxTotal}
        priceLevelType={priceLevelType}
        priceLevel={{ price: 2000, size: 7500, total: 400000 }}
      />
      <PriceLevelListItem
        maxTotal={maxTotal}
        priceLevelType={priceLevelType}
        priceLevel={{ price: 2000, size: 7500, total: 100000 }}
      />
    </>
  );
}
