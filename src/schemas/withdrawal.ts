/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import * as OriginalJoi from '@hapi/joi';
import objectId from 'joi-objectid';

const Joi = OriginalJoi.extend(objectId);

const getWithdrawalSchema = Joi.object({
  status: Joi.boolean().valid(true, false).optional(),
});

const newWithdrawalSchema = Joi.object({
  name: Joi.string().min(1).max(100).required(),
  fee: Joi.number().optional(),
  internPrice: Joi.number().optional(),
  isOwnLogistic: Joi.boolean().optional(),
});

const updateWithdrawalSchema = Joi.object({
  name: Joi.string().min(1).max(100).optional(),
  fee: Joi.number().optional(),
  internPrice: Joi.number().optional(),
  shortage: Joi.boolean().optional(),
  isOwnLogistic: Joi.boolean().optional(),
});

export { getWithdrawalSchema, newWithdrawalSchema, updateWithdrawalSchema };
