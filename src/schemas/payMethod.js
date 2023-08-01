const Joi = require('@hapi/joi');

const payMethodSchema = Joi.object({
  name: Joi.string().min(1).max(100).required(),
});

module.exports = {
  payMethodSchema,
};
