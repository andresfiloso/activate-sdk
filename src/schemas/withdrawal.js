const Joi = require('@hapi/joi');
Joi.objectId = require('joi-objectid')(Joi);

const getWithdrawalSchema = Joi.object({
  status: Joi.boolean()
    .valid(true, false)
    .optional(),
});

const newWithdrawalSchema = Joi.object({
  name: Joi.string()
    .min(1)
    .max(100)
    .required(),
  fee: Joi.number().optional(),
  internPrice: Joi.number().optional(),
  isOwnLogistic: Joi.boolean().optional(),
});

const updateWithdrawalSchema = Joi.object({
  name: Joi.string()
    .min(1)
    .max(100)
    .optional(),
  fee: Joi.number().optional(),
  internPrice: Joi.number().optional(),
  shortage: Joi.boolean().optional(),
  isOwnLogistic: Joi.boolean().optional(),
});

module.exports = {
  getWithdrawalSchema,
  newWithdrawalSchema,
  updateWithdrawalSchema,
};
