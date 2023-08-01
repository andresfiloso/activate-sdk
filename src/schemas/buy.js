const Joi = require('@hapi/joi');

const getBuySchema = Joi.object({
  page: Joi.number()
    .optional()
    .default(1),
  limit: Joi.number()
    .optional()
    .default(20),
  provider: Joi.string()
    .length(24)
    .optional(),
  state: Joi.string().optional(),
  fromDate: Joi.date().optional(),
  toDate: Joi.date().optional(),
  query: Joi.string().optional(),
  withoutReceipt: Joi.boolean().optional(),
});

const buySchema = Joi.object({
  cart: Joi.object({
    items: Joi.array()
      .min(1)
      .required()
      .items(
        Joi.object({
          key: Joi.string().optional(),
          product: Joi.objectId().required(),
          quantity: Joi.number().required(),
          price: Joi.number().optional(),
          isWholesaler: Joi.boolean().default(false),
          detail: Joi.object().optional(),
        })
      ),
    total: Joi.number().optional(),
  }).required(),
  provider: Joi.objectId().required(),
  notes: Joi.string()
    .max(500)
    .allow(null, '')
    .optional(),
  withdrawal: Joi.object({
    _id: Joi.objectId().optional(),
    name: Joi.string().optional(),
    date: Joi.date()
      .required()
      .allow(null),
    charged: Joi.boolean().required(),
    fee: Joi.number().optional(),
    isOwnLogistic: Joi.boolean().optional(),
    internPrice: Joi.number().optional(),
    shortage: Joi.boolean().optional(),
  }),
  total: Joi.number().optional(),
});

const modifyBuySchema = Joi.object({
  cart: Joi.object({
    items: Joi.array()
      .min(1)
      .required()
      .items(
        Joi.object({
          key: Joi.string().optional(),
          product: Joi.objectId().required(),
          quantity: Joi.number().required(),
          price: Joi.number().optional(),
          isWholesaler: Joi.boolean().default(false),
          detail: Joi.object().optional(),
        })
      ),
    total: Joi.number().optional(),
  }).required(),
  notes: Joi.string()
    .max(500)
    .allow(null, '')
    .optional(),
  withdrawal: Joi.object({
    _id: Joi.objectId().optional(),
    name: Joi.string().optional(),
    date: Joi.date()
      .required()
      .allow(null),
    charged: Joi.boolean().required(),
    fee: Joi.number().optional(),
    isOwnLogistic: Joi.boolean().optional(),
    internPrice: Joi.number().optional(),
    shortage: Joi.boolean().optional(),
  }),
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
  date: Joi.date()
    .optional()
    .allow(null),
  charged: Joi.boolean().optional(),
});

const patchBuy = Joi.object({
  notes: Joi.string().optional(),
});

const updateRoadmapSchema = Joi.object({
  roadmap: Joi.objectId().required(),
});

module.exports = {
  getBuySchema,
  buySchema,
  modifyBuySchema,
  markShortageItemSchema,
  modifyWithdrawalSchema,
  patchBuy,
  updateRoadmapSchema,
};
