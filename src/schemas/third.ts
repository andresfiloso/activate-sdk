import * as Joi from '@hapi/joi';

const getThirdSchema = Joi.object({
  status: Joi.boolean().valid(true, false).optional(),
});

const postThirdSchema = Joi.object({
  name: Joi.string().min(1).max(100).required(),
  tag: Joi.string().min(1).max(30).optional(),
});

const putThirdSchema = Joi.object({
  name: Joi.string().min(1).max(100).required(),
  tag: Joi.string().min(1).max(30).optional(),
});

export { getThirdSchema, postThirdSchema, putThirdSchema };
