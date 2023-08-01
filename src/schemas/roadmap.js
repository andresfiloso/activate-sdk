const Joi = require('@hapi/joi');

const getRoadmapSchema = Joi.object({
  status: Joi.boolean().optional(),
  page: Joi.number()
    .optional()
    .default(1),
  limit: Joi.number()
    .optional()
    .default(20),
  driver: Joi.string()
    .length(24)
    .optional(),
});

const roadmapSchema = Joi.object({
  driver: Joi.objectId().required(),
  date: Joi.date()
    .allow(null)
    .optional(),
  notes: Joi.string()
    .max(200)
    .optional()
    .allow('', null),
});

module.exports = {
  getRoadmapSchema,
  roadmapSchema,
};
