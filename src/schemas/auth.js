const Joi = require('@hapi/joi');

const signInSchema = Joi.object({
  username: Joi.string()
    .min(1)
    .max(30)
    .required(),
  password: Joi.string().required(),
});

const otpSchema = Joi.object({
  phone: Joi.string().required(),
});

module.exports = {
  signInSchema,
  otpSchema,
};
