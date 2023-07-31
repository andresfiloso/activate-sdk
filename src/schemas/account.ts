/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import * as OriginalJoi from '@hapi/joi';
import objectId from 'joi-objectid';

const Joi = OriginalJoi.extend(objectId);

const newAccountSchema = Joi.object({
  customer: Joi.objectId().required(),
  balance: Joi.number().optional().default(0),
});

const paySchema = Joi.object({
  customer: Joi.objectId().required(),
  amount: Joi.number().optional(),
});

export { newAccountSchema, paySchema };
