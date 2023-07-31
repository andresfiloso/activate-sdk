/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import * as OriginalJoi from '@hapi/joi';
// @ts-ignore
import objectId from 'joi-objectid';

const Joi = OriginalJoi.extend(objectId);

/* eslint-disable @typescript-eslint/naming-convention */
const getCashFlowSchema = Joi.object({
  noAdmin: Joi.boolean().optional(),
  paid: Joi.boolean().optional(),
  all: Joi.boolean().optional(),
  provider: Joi.objectId().optional(),
  page: Joi.number().optional().default(1),
  limit: Joi.number().optional().default(20),
  fromDate: Joi.date().optional(),
  toDate: Joi.date().optional(),
});

const partnerSectionSchema = {
  partner: Joi.objectId().required(),
  customer: Joi.objectId().optional().allow(null),
  garage: Joi.objectId().optional(),
  isBudget: Joi.boolean().optional(),
};

const providerSectionSchema = {
  provider: Joi.objectId().required(),
  garage: Joi.objectId().optional(),
  isBudget: Joi.boolean().optional(),
};

const internalSectionSchema = {
  garage: Joi.objectId().required(),
  tag: Joi.string().optional().allow(null, ''),
};

const externalSectionSchema = {
  third: Joi.objectId().required(),
  garage: Joi.objectId().optional(),
};

const cashFlowSectionSchema = {
  amount: Joi.number().required(),
  concept: Joi.string().required(),
  paymentMethod: Joi.string().required(),
  description: Joi.string().max(200).optional().allow(null, ''),
  type: Joi.string().max(200).optional(),
};

const postPartnerCashFlowSchema = Joi.object({
  ...partnerSectionSchema,
  ...cashFlowSectionSchema,
});

const postProviderCashFlowSchema = Joi.object({
  ...providerSectionSchema,
  ...cashFlowSectionSchema,
});

const postInternalCashFlowSchema = Joi.object({
  ...internalSectionSchema,
  ...cashFlowSectionSchema,
});

const postExternalCashFlowSchema = Joi.object({
  ...externalSectionSchema,
  ...cashFlowSectionSchema,
});
/* eslint-enable @typescript-eslint/naming-convention */

export {
  getCashFlowSchema,
  postPartnerCashFlowSchema,
  postProviderCashFlowSchema,
  postInternalCashFlowSchema,
  postExternalCashFlowSchema,
};
