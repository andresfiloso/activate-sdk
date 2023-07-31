/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import * as Joi from '@hapi/joi';

const getDeliverySchema = Joi.object({
  status: Joi.boolean().valid(true, false).optional(),
});

const newDeliverySchema = Joi.object({
  name: Joi.string().min(1).max(100).required(),
  customerPrice: Joi.number().optional(),
  internPrice: Joi.number().optional(),
  partnerPrice: Joi.number().optional(),
  isWholesaler: Joi.boolean().optional(),
  isRetailer: Joi.boolean().optional(),
  isOwnLogistic: Joi.boolean().optional(),
  roles: Joi.array().optional().items(Joi.string().optional()),
  message: Joi.string().optional().allow(null, ''),
});

const updateDeliverySchema = Joi.object({
  name: Joi.string().min(1).max(100).required(),
  contributes: Joi.boolean().valid(true, false).required(),
  customerPrice: Joi.number().required(),
  internPrice: Joi.number().optional(),
  partnerPrice: Joi.number().required(),
  isWholesaler: Joi.boolean().optional(),
  isRetailer: Joi.boolean().optional(),
  isOwnLogistic: Joi.boolean().optional(),
  roles: Joi.array().optional().items(Joi.string().optional()),
  message: Joi.string().optional().allow(null, ''),
});

export { getDeliverySchema, newDeliverySchema, updateDeliverySchema };
