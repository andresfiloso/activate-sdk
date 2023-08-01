const Joi = require('@hapi/joi');

const idSchema = Joi.object({
  id: Joi.string()
    .length(24)
    .required(),
});

const getProviderSchema = Joi.object({
  status: Joi.boolean()
    .valid(true, false)
    .optional(),
  page: Joi.number()
    .optional()
    .default(1),
  limit: Joi.number()
    .optional()
    .default(20),
  query: Joi.string().optional(),
});

const providerSchema = Joi.object({
  name: Joi.string()
    .min(1)
    .max(30)
    .required(),
  address: Joi.object({
    street: Joi.string()
      .optional()
      .allow(null, ''),
    city: Joi.string()
      .optional()
      .allow(null, ''),
    province: Joi.string()
      .optional()
      .allow(null, ''),
  }).optional(),
  cuit: Joi.string()
    .alphanum()
    .min(1)
    .max(11)
    .optional()
    .allow(null, ''),
  phone: Joi.string()
    .min(1)
    .max(30)
    .required(),
  imageUrl: Joi.string().allow(null, ''),
  color: Joi.string().allow(null, ''),
  slug: Joi.string().allow(null, ''),
  links: Joi.array().optional(),
  catalog: Joi.boolean().optional(),
  partner: Joi.objectId().optional(),
  account: Joi.boolean().optional(),
});

module.exports = {
  idSchema,
  getProviderSchema,
  providerSchema,
};
