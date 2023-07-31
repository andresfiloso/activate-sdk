import * as Joi from '@hapi/joi';

const payMethodSchema = Joi.object({
  name: Joi.string().min(1).max(100).required(),
});

export { payMethodSchema };
