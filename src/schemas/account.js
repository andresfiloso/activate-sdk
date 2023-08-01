const Joi = require('@hapi/joi');
Joi.objectId = require('joi-objectid')(Joi);

const newAccountSchema = Joi.object({
  customer: Joi.objectId().required(),
  balance: Joi.number()
    .optional()
    .default(0),
});

const paySchema = Joi.object({
  customer: Joi.objectId().required(),
  amount: Joi.number().optional(),
});

module.exports = {
  newAccountSchema,
  paySchema,
};
