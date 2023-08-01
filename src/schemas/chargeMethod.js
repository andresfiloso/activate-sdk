const Joi = require('@hapi/joi');

const idSchema = Joi.object({
  id: Joi.string()
    .length(24)
    .required(),
});

const chargeMethodSchema = Joi.object({
  name: Joi.string()
    .min(1)
    .max(100)
    .required(),
});

module.exports = {
  idSchema,
  chargeMethodSchema,
};
