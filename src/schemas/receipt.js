const Joi = require('@hapi/joi');

const getReceiptSchema = Joi.object({
  status: Joi.boolean().optional(),
  page: Joi.number()
    .optional()
    .default(1),
  limit: Joi.number()
    .optional()
    .default(20),
  provider: Joi.string()
    .length(24)
    .optional(),
  buy: Joi.objectId().optional(),
});

const receiptSchema = Joi.object({
  total: Joi.number().required(),
  type: Joi.string()
    .valid('FC', 'NC', 'ND')
    .required(),
  code: Joi.string().required(),
  provider: Joi.objectId().required(),
  buy: Joi.objectId().optional(),
  logisticCreditNote: Joi.boolean().optional(),
  isBudget: Joi.boolean().optional(),
  description: Joi.string()
    .max(200)
    .optional()
    .allow('', null),
});

module.exports = {
  getReceiptSchema,
  receiptSchema,
};
