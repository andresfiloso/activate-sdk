import CONFIG from '../config/index';
import { ItemData, Margin } from '../@types';
import { round } from '../helpers';

const { WEIGHT, UNITY } = CONFIG.PRODUCT.UNITS;

type BillOrderOptions = {
  isBudget: boolean;
};

class Item {
  private number;
  private product;
  private quantity;
  private isWholesaler?;
  private detail;
  private price;

  constructor({ number, product, quantity, isWholesaler, detail }: ItemData) {
    this.number = number;
    this.product = product;
    this.quantity = quantity || 0;
    this.isWholesaler = isWholesaler || false;
    this.detail = detail;
    this.price = 0;
  }

  getMargin(): Margin {
    const { quantity, isWholesaler, detail } = this;

    let { margins } =
      detail && detail.metadata ? detail.metadata : this.product;

    const wholesalerMargin = margins.find(({ quantity: q }) => q === 0);

    if (wholesalerMargin && isWholesaler) return wholesalerMargin;
    if (wholesalerMargin)
      margins = margins.filter(margin => margin.quantity !== 0);

    const sortedThresholds = [...margins].sort((first, second) =>
      first.quantity < second.quantity ? 1 : -1
    );

    const margin =
      sortedThresholds.find(
        ({ quantity: threshold }) => quantity >= threshold
      ) || sortedThresholds.pop();

    const fallbackMargin: Margin = { quantity: 0, value: 1 };

    return margin || fallbackMargin;
  }

  billBuy(): Item {
    const { quantity } = this;
    const { unit, unitCost } = this.product;

    delete this.isWholesaler;

    this.price = {
      [`${WEIGHT}`]: unitCost * (quantity / 1000),
      [`${UNITY}`]: unitCost * quantity,
    }[unit];

    return this;
  }

  billOrder({ isBudget }: BillOrderOptions): Item {
    const { quantity, isWholesaler, detail } = this;
    const { unit } = this.product;
    const { taxBase, margins, contributions } =
      detail && detail.metadata ? detail.metadata : this.product;

    let { unitCost } =
      detail && detail.metadata ? detail.metadata : this.product;

    const { quantity: unitQuantity, value: margin } = this.getMargin();

    unitCost = isBudget ? taxBase : unitCost;

    this.detail = {
      cost: 0,
      contribution: 0,
      profit: 0,
      metadata: {
        taxBase,
        unitCost,
        margins,
        contributions,
      },
    };

    this.price = {
      [`${WEIGHT}`]: round(margin * unitCost * (quantity / 1000)),
      [`${UNITY}`]: round(margin * unitCost * quantity),
    }[unit];

    this.detail.cost = {
      [`${WEIGHT}`]: round(unitCost * (quantity / 1000)),
      [`${UNITY}`]: round(unitCost * quantity),
    }[unit];

    this.detail.unitQuantity = {
      [`${WEIGHT}`]: unitQuantity || 1000,
      [`${UNITY}`]: unitQuantity || 1,
    }[unit];

    this.detail.unitCost = {
      [`${WEIGHT}`]: round(
        (unitCost * margin) / (1000 / this.detail.unitQuantity)
      ),
      [`${UNITY}`]: round(margin * unitCost * this.detail.unitQuantity),
    }[unit];

    if (!isWholesaler) {
      this.detail.contribution = round(this.price * (contributions / 100));
      this.detail.profit = round(
        this.price - this.detail.cost - this.detail.contribution
      );
    } else {
      this.detail.contribution = round(this.price - this.detail.cost);
      this.detail.profit = 0;
    }

    return this;
  }
}

export default Item;
