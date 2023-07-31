/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import CONFIG from '../config/index';

const { WEIGHT, UNITY } = CONFIG.PRODUCT.UNITS;

const isUnity = (unit: string): boolean => unit === UNITY;
const isWeight = (unit: string): boolean => unit === WEIGHT;

const calculateMixedUnitCost = (
  {
    product: { unit, taxBase },
    quantity,
  }: { product: { unit: string; taxBase: number }; quantity: number },
  { unit: mainUnit }: { unit: string }
): number => {
  if (unit === UNITY) return taxBase * quantity;
  return (taxBase * quantity) / (isUnity(mainUnit) ? 1000 : 100);
};

const calculateUnitCost = (
  taxBase: number,
  taxes: { aliquot: number }[]
): number =>
  taxes.reduce((acc, tax) => {
    acc += taxBase * tax.aliquot;
    return acc;
  }, taxBase);

const round = (value: number): number => {
  return Number(value.toFixed(2));
};

const sum = (
  array: any[],
  key?: string | number,
  fn?: (element: any, ...args: any[]) => any,
  ...args: any[]
): number => {
  let acc = 0;
  for (const curr of array) {
    const element = key ? curr[key] : curr;
    const value = fn ? fn(element, ...args) : element;
    acc += value || 0;
  }
  return acc;
};

export {
  sum,
  round,
  isUnity,
  isWeight,
  calculateMixedUnitCost,
  calculateUnitCost,
};
export default {
  sum,
  round,
  isUnity,
  isWeight,
  calculateMixedUnitCost,
  calculateUnitCost,
};
