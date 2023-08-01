const Joi = require('@hapi/joi');

const customerSchema = Joi.object({
  name: Joi.string()
    .min(1)
    .max(100)
    .required(),
  address: Joi.object({
    id: Joi.string().optional(),
    label: Joi.string().required(),
    street: Joi.string().required(),
    unit: Joi.string()
      .optional()
      .allow(null, ''),
    city: Joi.string().required(),
    county: Joi.string().optional(),
    province: Joi.string()
      .required()
      .allow(null, ''),
    lat: Joi.alternatives(Joi.string(), Joi.number()).optional(),
    lng: Joi.alternatives(Joi.string(), Joi.number()).optional(),
    offline: Joi.boolean().optional(),
  })
    .optional()
    .allow(null),
  email: Joi.string()
    .email()
    .optional()
    .allow(null, ''),
  phone: Joi.string()
    .min(1)
    .max(30)
    .optional()
    .allow(null, ''),

  isWholesaler: Joi.boolean().optional(),
  notes: Joi.string()
    .optional()
    .allow(null, ''),
});

const patchMeSchema = Joi.object({
  name: Joi.string()
    .min(1)
    .max(100)
    .optional(),
  address: Joi.object({
    id: Joi.string().optional(),
    label: Joi.string().required(),
    street: Joi.string().required(),
    unit: Joi.string()
      .optional()
      .allow(null, ''),
    city: Joi.string().required(),
    county: Joi.string().optional(),
    province: Joi.string()
      .optional()
      .allow(null, ''),
    lat: Joi.alternatives(Joi.string(), Joi.number()).optional(),
    lng: Joi.alternatives(Joi.string(), Joi.number()).optional(),
    offline: Joi.boolean().optional(),
  })
    .optional()
    .allow(null),
  email: Joi.string()
    .email()
    .optional()
    .allow(null, ''),
  isWholesaler: Joi.boolean().optional(),
  phone: Joi.string()
    .min(1)
    .max(30)
    .optional()
    .allow(null, ''),
});

module.exports = {
  customerSchema,
  patchMeSchema,
};
