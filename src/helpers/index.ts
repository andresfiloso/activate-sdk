const constants = {
  UNITY: 'UNITY',
  WEIGHT: 'WEIGHT',
};

const { UNITY, WEIGHT } = constants;

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

export default {
  isUnity,
  isWeight,
  calculateMixedUnitCost,
  calculateUnitCost,
};
