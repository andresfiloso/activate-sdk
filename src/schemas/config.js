const Joi = require('@hapi/joi');
Joi.objectId = require('joi-objectid')(Joi);

const importProducts = Joi.array()
  .min(1)
  .required()
  .items(
    Joi.object({
      number: Joi.required(),
      name: Joi.required(),
      unitCost: Joi.required(),
      m100: Joi.required(),
      m500: Joi.required(),
      m1000: Joi.required(),
      wholesaler: Joi.required(),
      theoretical: Joi.required(),
      real: Joi.required(),
    })
  );

const getAudit = Joi.object({
  page: Joi.number()
    .optional()
    .min(1)
    .default(1),
  limit: Joi.number()
    .optional()
    .min(1)
    .default(10),
  partner: Joi.objectId().optional(),
  customer: Joi.objectId().optional(),
  provider: Joi.objectId().optional(),
});

module.exports = {
  importProducts,
  getAudit,
};
