/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import * as OriginalJoi from '@hapi/joi';
import objectId from 'joi-objectid';

const Joi = OriginalJoi.extend(objectId);

const getRoadmapSchema = Joi.object({
  status: Joi.boolean().optional(),
  page: Joi.number().optional().default(1),
  limit: Joi.number().optional().default(20),
  driver: Joi.string().length(24).optional(),
});

const roadmapSchema = Joi.object({
  driver: Joi.objectId().required(),
  date: Joi.date().allow(null).optional(),
  notes: Joi.string().max(200).optional().allow('', null),
});

export { getRoadmapSchema, roadmapSchema };
