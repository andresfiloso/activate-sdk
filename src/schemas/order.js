const Joi = require('@hapi/joi');
Joi.objectId = require('joi-objectid')(Joi);

const idSchema = Joi.object({
  id: Joi.string()
    .length(24)
    .required(),
});

const getOrderSchema = Joi.object({
  page: Joi.number()
    .optional()
    .default(1),
  limit: Joi.number()
    .optional()
    .default(20),
  customer: Joi.string()
    .length(24)
    .optional(),
  partner: Joi.string()
    .length(24)
    .optional(),
  query: Joi.string().optional(),
  state: Joi.string().optional(),
  fromDate: Joi.date().optional(),
  toDate: Joi.date().optional(),
  noAdmin: Joi.boolean().optional(),
  stored: Joi.boolean().optional(),
  'delivery.delivered': Joi.boolean().optional(),
});

const orderSchema = Joi.object({
  customer: Joi.objectId().required(),
  partner: Joi.objectId().optional(),
  isBudget: Joi.boolean().optional(),
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
  delivery: Joi.object({
    _id: Joi.objectId().optional(),
    name: Joi.string().optional(),
    date: Joi.date()
      .allow(null)
      .optional(),
    isOwnLogistic: Joi.boolean().optional(),
    phone: Joi.string().optional(),
    address: Joi.object({
      id: Joi.string().required(),
      label: Joi.string().required(),
      street: Joi.string().required(),
      unit: Joi.string()
        .optional()
        .allow(''),
      city: Joi.string().required(),
      county: Joi.string().optional(),
      province: Joi.string().required(),
      lat: Joi.alternatives(Joi.string(), Joi.number()).optional(),
      lng: Joi.alternatives(Joi.string(), Joi.number()).optional(),
      offline: Joi.boolean().optional(),
    }).required(),
    charged: Joi.boolean().required(),
    message: Joi.string()
      .optional()
      .allow(null, ''),
    partnerPrice: Joi.number()
      .allow(null)
      .optional(),
    customerPrice: Joi.number()
      .allow(null)
      .optional(),
    internPrice: Joi.number()
      .allow(null)
      .optional(),
    contributes: Joi.boolean()
      .allow(null)
      .optional(),
    isWholesaler: Joi.boolean()
      .allow(null)
      .optional(),
    isRetailer: Joi.boolean()
      .allow(null)
      .optional(),
    roles: Joi.array()
      .optional()
      .items(Joi.string().optional()),
  }).required(),
  paymentMethod: Joi.string()
    .allow(null, '')
    .optional(),
  notes: Joi.string()
    .max(500)
    .allow(null, '')
    .optional(),
  discount: Joi.number()
    .min(0)
    .max(100)
    .allow(null)
    .optional(),
});

const modifyOrderSchema = Joi.object({
  cart: Joi.object({
    items: Joi.array()
      .min(1)
      .required()
      .items(
        Joi.object({
          number: Joi.allow(null).optional(),
          key: Joi.string().optional(),
          product: Joi.objectId().required(),
          quantity: Joi.number().required(),
          price: Joi.number().optional(),
          isWholesaler: Joi.boolean().default(false),
          detail: Joi.object().optional(),
        })
      ),
    total: Joi.number().optional(),
  }).optional(),
  isBudget: Joi.boolean().optional(),
  delivery: Joi.object({
    _id: Joi.objectId().required(),
    name: Joi.string().optional(),
    isOwnLogistic: Joi.boolean().optional(),
    date: Joi.date()
      .allow(null)
      .optional(),
    phone: Joi.string().optional(),
    address: Joi.object({
      id: Joi.string().required(),
      label: Joi.string().required(),
      street: Joi.string().required(),
      unit: Joi.string()
        .optional()
        .allow(null, ''),
      city: Joi.string().required(),
      county: Joi.string().optional(),
      province: Joi.string().required(),
      lat: Joi.alternatives(Joi.string(), Joi.number()).optional(),
      lng: Joi.alternatives(Joi.string(), Joi.number()).optional(),
      offline: Joi.boolean().optional(),
    }).required(),
    charged: Joi.boolean().required(),
    message: Joi.string()
      .optional()
      .allow(null, ''),
    partnerPrice: Joi.number()
      .allow(null)
      .optional(),
    customerPrice: Joi.number()
      .allow(null)
      .optional(),
    internPrice: Joi.number()
      .allow(null)
      .optional(),
    contributes: Joi.boolean()
      .allow(null)
      .optional(),
    isWholesaler: Joi.boolean()
      .allow(null)
      .optional(),
    isRetailer: Joi.boolean()
      .allow(null)
      .optional(),
    roles: Joi.array()
      .optional()
      .items(Joi.string().optional()),
  }).optional(),
  paymentMethod: Joi.string()
    .allow(null, '')
    .required(),
  notes: Joi.string()
    .max(500)
    .allow(null, '')
    .optional(),
  discount: Joi.number()
    .min(0)
    .max(100)
    .allow(null)
    .optional(),
});

const modifyDeliverySchema = Joi.object({
  name: Joi.string().optional(),
  date: Joi.date()
    .optional()
    .allow(null),
  phone: Joi.string().optional(),
  delivered: Joi.string().optional(),
  address: Joi.object({
    id: Joi.string().required(),
    label: Joi.string().required(),
    street: Joi.string().required(),
    unit: Joi.string()
      .optional()
      .allow(null, ''),
    city: Joi.string().required(),
    county: Joi.string().optional(),
    province: Joi.string().required(),
    lat: Joi.alternatives(Joi.string(), Joi.number()).optional(),
    lng: Joi.alternatives(Joi.string(), Joi.number()).optional(),
    offline: Joi.boolean().optional(),
  }).optional(),
  partnerPrice: Joi.number()
    .allow(null)
    .optional(),
  customerPrice: Joi.number()
    .allow(null)
    .optional(),
  internPrice: Joi.number()
    .allow(null)
    .optional(),
  roles: Joi.array()
    .optional()
    .items(Joi.string().optional()),
  charged: Joi.boolean().optional(),
  message: Joi.string()
    .optional()
    .allow(null, ''),
  contributes: Joi.boolean().optional(),
});

const confirmOrderSchema = Joi.object({
  date: Joi.date().required(),
});

const updateRoadmapSchema = Joi.object({
  roadmap: Joi.objectId().required(),
});

const patchOrderSchema = Joi.object({
  notes: Joi.string().optional(),
  paymentMethod: Joi.string().optional(),
});

const prepareOrderSchema = Joi.object({});

module.exports = {
  idSchema,
  orderSchema,
  getOrderSchema,
  modifyOrderSchema,
  modifyDeliverySchema,
  confirmOrderSchema,
  patchOrderSchema,
  prepareOrderSchema,
  updateRoadmapSchema,
};
