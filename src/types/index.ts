import { AxiosResponse } from 'axios';

export type RequestData = { [key: string]: unknown };
export type RequestParams = { [key: string]: unknown };
export type RequestHeaders = { [key: string]: string };

export type Response = Promise<AxiosResponse<any, any>>;

export type ActivateServiceClientOptions = {
  baseURL: string;
  jwt: string;
};

export type ItemData = {
  number?: number;
  product: ItemProduct;
  quantity?: number;
  isWholesaler?: boolean;
  detail?: ItemDetail;
};

export type Cart = {
  items: ItemData[];
  total: number;
};

export type ItemProduct = {
  _id: string;
  status: true;
  name: string;
  defaultMargin: number;
  contributions: number;
  provider: string;
  taxBase: number;
  unitCost: number;
  unit: string;
  margins: Margin[];
};

export type Margin = {
  quantity: number;
  value: number;
};

export type ItemDetail = {
  cost: number;
  contribution: number;
  profit: number;
  metadata: {
    taxBase: number;
    unitCost: number;
    margins: Margin[];
    contributions: number;
  };
  unitQuantity?: number;
  unitCost?: number;
};

export type InventoryItem = {
  real: number;
  theoretical: number;
  critical: number;
  _id: string;
  garage: string;
};

export type Product = {
  _id: string;
  status: boolean;
  name: string;
  provider: string;
  unitCost: number;
  contributions: number;
  inventory: InventoryItem[];
  unit: string;
  margins: Margin[];
  defaultMargin: number;
};

export type Detail = {
  cost: number;
  contribution: number;
  profit: number;
  metadata: {
    taxBase: number;
    unitCost: number;
    margins: Margin[];
    contributions: number;
  };
  unitQuantity: number;
  unitCost: number;
};

export type CartItem = {
  isWholesaler: boolean;
  number: number;
  product: Product;
  quantity: number;
  detail: Detail;
  price: number;
  friendlyUnity: string;
  friendlyUnitCost: string;
};

export type Address = {
  unit: string;
  id: string;
  label: string;
  street: string;
  city: string;
  province: string;
  lat: string;
  lng: string;
};

export type Customer = {
  _id: string;
  address: Address;
  status: boolean;
  phone: string;
  name: string;
  main: string;
  createdAt: string;
  updatedAt: string;
  number: number;
  __v: number;
  isWholesaler: boolean;
};

export type Partner = {
  _id: string;
  status: boolean;
  isConfirmed: boolean;
  isThird: boolean;
  isProvider: boolean;
  wholesaler: boolean;
  username: string;
  email: string;
  phone: string;
  name: string;
  avatarColor: string;
  role: string;
  createdAt: string;
  updatedAt: string;
  number: number;
  __v: number;
  isDriver: boolean;
};

export type Delivery = {
  name: string;
  address: Address;
  phone: string;
  date: string;
  contributes: boolean;
  charged: boolean;
  customerPrice: number;
  partnerPrice: number;
  isWholesaler: boolean;
  isRetailer: boolean;
  internPrice: number;
  roles: string[];
  _id: string;
  delivered: boolean;
};

export type Sender = {
  name: string;
};

export type OrderT = {
  _id: string;
  isBudget: boolean;
  state: string;
  charged: boolean;
  paymentMethod: string;
  notes: null;
  hasShortageItems: boolean;
  blocked: boolean;
  stored: boolean;
  cart: Cart;
  customer: Customer;
  partner: Partner;
  garage: string;
  delivery: Delivery;
  discount: number;
  cost: number;
  contribution: number;
  total: number;
  logistic: number;
  toPay: number;
  profit: number;
  date: string;
  number: number;
  sender: Sender;
  metadata: Record<string, unknown>;
};
