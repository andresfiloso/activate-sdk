const Joi = require('@hapi/joi');

const postGarageSchema = Joi.object({
  name: Joi.string()
    .min(1)
    .max(100)
    .required(),
  address: Joi.object({
    street: Joi.string().required(),
    city: Joi.string().required(),
    province: Joi.string().required(),
  }).required(),
  phone: Joi.string()
    .min(1)
    .max(30)
    .optional(),
  inventory: Joi.array().optional(),
});

const putGarageSchema = Joi.object({
  name: Joi.string()
    .min(1)
    .max(100)
    .optional(),
  address: Joi.object({
    street: Joi.string().required(),
    city: Joi.string().required(),
    province: Joi.string().required(),
  }).optional(),
  phone: Joi.string()
    .min(1)
    .max(30)
    .optional(),
  inventory: Joi.array().optional(),
});

module.exports = {
  postGarageSchema,
  putGarageSchema,
};
