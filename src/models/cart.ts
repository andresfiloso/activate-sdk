import { sum } from '../helpers';
import { ItemData } from '../@types';
import Item from './item';

const ORDER_CART_TYPE = 'order';
const BUY_CART_TYPE = 'buy';

type CartType = 'order' | 'buy';

class Cart {
  private items: Item[];
  private type: string;
  private isBudget: boolean;
  private total: number;

  constructor(items = [], type: CartType = ORDER_CART_TYPE, isBudget = false) {
    this.items = items;
    this.type = type;
    this.isBudget = isBudget;

    const billedItems = items.map((item: ItemData, index: number) => {
      const itemData: ItemData = { ...item, number: index + 1 };

      return {
        [ORDER_CART_TYPE]: new Item(itemData).billOrder({ isBudget }),
        [BUY_CART_TYPE]: new Item(itemData).billBuy(),
      }[type];
    });

    this.items = billedItems;
    this.total = sum(billedItems, 'price');
  }
}

export default Cart;
