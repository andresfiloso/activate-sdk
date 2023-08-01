const Joi = require('@hapi/joi');

const idSchema = Joi.object({
  id: Joi.string()
    .length(24)
    .required(),
});

const getCategorySchema = Joi.object({
  status: Joi.boolean()
    .valid(true, false)
    .optional(),
  section: Joi.string().optional(),
});

const categorySchema = Joi.object({
  name: Joi.string()
    .min(1)
    .max(100)
    .required(),
  icon: Joi.string().optional(),
  section: Joi.string()
    .min(1)
    .max(100)
    .optional(),
});

module.exports = {
  idSchema,
  getCategorySchema,
  categorySchema,
};
