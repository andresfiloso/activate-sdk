/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import * as OriginalJoi from '@hapi/joi';

import objectId from 'joi-objectid';

const Joi = OriginalJoi.extend(objectId);

const idSchema = Joi.object({
  id: Joi.string().length(24).required(),
});

const getProductSchema = Joi.object({
  name: Joi.string().min(1).max(100).optional().allow(''),
  query: Joi.string().min(1).max(100).optional().allow(''),
  provider: Joi.objectId().optional(),
  category: Joi.objectId().optional(),
  unit: Joi.string().min(1).max(100).optional().allow(''),
  catalog: Joi.boolean().valid(true, false).optional(),
  status: Joi.boolean().valid(true, false).optional(),
  page: Joi.number().optional().default(1),
  limit: Joi.number().optional().default(20),
});

const newProductSchema = Joi.object({
  name: Joi.string().min(1).max(100).required(),
  provider: Joi.objectId().required(),
  category: Joi.objectId().required(),
  unit: Joi.string().valid('WEIGHT', 'UNITY').required(),
  unitCost: Joi.number().optional(),
  defaultMargin: Joi.number().optional(),
  taxBase: Joi.number().optional(),
  taxes: Joi.array().items(
    Joi.object().keys({
      key: Joi.string().optional(),
      name: Joi.string().required(),
      aliquot: Joi.number().required(),
    })
  ),
  margins: Joi.array()
    .min(2)
    .items(
      Joi.object().keys({
        key: Joi.string().optional(),
        quantity: Joi.number().required(),
        value: Joi.number().required(),
      })
    ),
  mixed: Joi.boolean().optional(),
  tags: Joi.array().items(Joi.number()).optional(),
  components: Joi.alternatives().conditional('mixed', [
    {
      is: true,
      then: Joi.array()
        .min(1)
        .optional()
        .items(
          Joi.object().keys({
            product: Joi.objectId().required(),
            quantity: Joi.number().required(),
          })
        ),
      otherwise: Joi.array().optional(),
    },
  ]),
  contributions: Joi.number().required(),
  inventory: Joi.object({
    real: Joi.number().optional(),
    theoretical: Joi.number().optional(),
    critical: Joi.number().optional(),
  }).optional(),
  title: Joi.string().min(1).max(100).optional(),
  subtitle: Joi.string().min(1).max(255).optional(),
  description: Joi.string().min(1).max(255).optional(),
  imageUrl: Joi.string().min(1).optional(),
  options: Joi.object().optional(),
});

const updateProductSchema = Joi.object({
  name: Joi.string().min(1).max(100).optional(),
  provider: Joi.objectId().optional(),
  category: Joi.objectId().optional(),
  unit: Joi.string().valid('WEIGHT', 'UNITY').optional(),
  unitCost: Joi.number().optional(),
  defaultMargin: Joi.number().optional(),
  taxBase: Joi.number().optional(),
  taxes: Joi.array().items(Joi.objectId()),
  margins: Joi.array()
    .min(2)
    .items(
      Joi.object().keys({
        key: Joi.string().optional(),
        quantity: Joi.number().required(),
        value: Joi.number().required(),
      })
    )
    .optional(),
  contributions: Joi.number().optional(),
  catalog: Joi.boolean().optional(),
  mixed: Joi.boolean().optional(),
  components: Joi.array().optional(),
  tags: Joi.array().items(Joi.number()).optional(),
  title: Joi.string().min(1).max(100).optional(),
  subtitle: Joi.string().min(1).max(255).optional(),
  description: Joi.string().min(1).max(255).optional(),
  imageUrl: Joi.string().min(1).optional(),
  options: Joi.object().optional(),
});

const updateCriticalInventory = Joi.object({
  critical: Joi.number().required(),
});

const adjustmentSchema = Joi.object({
  quantity: Joi.number().required(),
});

const forceAdjustmentSchema = Joi.object({
  real: Joi.number().optional(),
  theoretical: Joi.number().optional(),
});

export {
  idSchema,
  getProductSchema,
  newProductSchema,
  updateProductSchema,
  updateCriticalInventory,
  forceAdjustmentSchema,
  adjustmentSchema,
};
