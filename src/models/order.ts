import { sum } from '../helpers';
import { Cart, OrderT } from '../types';
class Order {
  private cart;
  private state;
  private isBudget;
  private customer;
  private partner;
  private garage;
  private delivery;
  private discount;
  private cost;
  private contribution;
  private total;
  private logistic;
  private toPay;
  private profit;
  private metadata;

  constructor({
    cart,
    state,
    isBudget,
    customer,
    partner,
    garage,
    delivery,
    discount,
    metadata,
  }: OrderT) {
    this.cart = cart;
    this.state = state;
    this.isBudget = isBudget || false;
    this.customer = customer;
    this.partner = partner;
    this.garage = garage;
    this.delivery = delivery;
    this.discount = discount;

    const contribution = sum(
      this.cart.items.map(i => i.detail),
      'contribution'
    );
    this.cost = sum(
      this.cart.items.map(i => i.detail),
      'cost'
    );

    if (this.discount > 100 || this.discount < 0) {
      throw new Error('Discount value must be between 0 and 100');
    }

    this.contribution = contribution - this.discountAmount(contribution);
    const { charged, contributes, customerPrice, partnerPrice } = this.delivery;
    const logisticPrice = charged ? customerPrice : 0;
    this.total = this.cart.total + logisticPrice;
    this.total -= this.discountAmount(contribution);
    this.logistic = contributes ? partnerPrice + customerPrice : partnerPrice;
    this.toPay = this.cost + this.contribution + this.logistic;
    this.profit = this.total - this.toPay;
    this.metadata = metadata;
  }

  discountAmount(contribution: number): number {
    return contribution * (this.discount / 100) || 0;
  }

  addMetadata(metadata: Record<string, unknown>): void {
    if (!this.metadata) this.metadata = {};
    const date = new Date();
    this.metadata[date.toUTCString()] = metadata;
  }
}

export default Order;
