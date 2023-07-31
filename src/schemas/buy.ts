/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import * as OriginalJoi from '@hapi/joi';
// @ts-ignore
import objectId from 'joi-objectid';

const Joi = OriginalJoi.extend(objectId);

const getBuySchema = Joi.object({
  page: Joi.number().optional().default(1),
  limit: Joi.number().optional().default(20),
  provider: Joi.string().length(24).optional(),
  state: Joi.string().optional(),
  fromDate: Joi.date().optional(),
  toDate: Joi.date().optional(),
  query: Joi.string().optional(),
  withoutReceipt: Joi.boolean().optional(),
});

const buyItemSchema = Joi.object({
  key: Joi.string().optional(),
  product: Joi.objectId().required(),
  quantity: Joi.number().required(),
  price: Joi.number().optional(),
  isWholesaler: Joi.boolean().default(false),
  detail: Joi.object().optional(),
});

const buyCartSchema = Joi.object({
  items: Joi.array().min(1).required().items(buyItemSchema),
  total: Joi.number().optional(),
}).required();

const withdrawalSchema = Joi.object({
  _id: Joi.objectId().optional(),
  name: Joi.string().optional(),
  date: Joi.date().required().allow(null),
  charged: Joi.boolean().required(),
  fee: Joi.number().optional(),
  isOwnLogistic: Joi.boolean().optional(),
  internPrice: Joi.number().optional(),
  shortage: Joi.boolean().optional(),
});

const buySchema = Joi.object({
  cart: buyCartSchema,
  provider: Joi.objectId().required(),
  notes: Joi.string().max(500).allow(null, '').optional(),
  withdrawal: withdrawalSchema,
  total: Joi.number().optional(),
});

const modifyBuySchema = Joi.object({
  cart: buyCartSchema,
  notes: Joi.string().max(500).allow(null, '').optional(),
  withdrawal: withdrawalSchema,
  total: Joi.number().optional(),
});

const markShortageItemSchema = Joi.object({
  items: Joi.array().items(
    Joi.object({
      product: Joi.objectId().required(),
      quantity: Joi.number().required(),
    })
  ),
  createNew: Joi.boolean().default(false),
});

const modifyWithdrawalSchema = Joi.object({
  _id: Joi.objectId().optional(),
  name: Joi.string().optional(),
  date: Joi.date().optional().allow(null),
  charged: Joi.boolean().optional(),
});

const patchBuy = Joi.object({
  notes: Joi.string().optional(),
});

const updateRoadmapSchema = Joi.object({
  roadmap: Joi.objectId().required(),
});

export {
  getBuySchema,
  buySchema,
  modifyBuySchema,
  markShortageItemSchema,
  modifyWithdrawalSchema,
  patchBuy,
  updateRoadmapSchema,
};
