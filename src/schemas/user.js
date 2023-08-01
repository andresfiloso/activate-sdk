const Joi = require('@hapi/joi');

const idSchema = Joi.object({
  id: Joi.string()
    .length(24)
    .required(),
});

const getUserSchema = Joi.object({
  status: Joi.boolean()
    .valid(true, false)
    .optional(),
  isDriver: Joi.boolean()
    .valid(true, false)
    .optional(),
});

const userSchema = Joi.object({
  name: Joi.string()
    .min(1)
    .max(100)
    .required(),
  username: Joi.string()
    .min(1)
    .max(30)
    .required(),
  email: Joi.string()
    .email()
    .allow(null, '')
    .optional(),
  phone: Joi.string()
    .min(1)
    .max(30)
    .allow(null, '')
    .optional(),
  role: Joi.string()
    .valid('ADMIN', 'AV', 'COMPRAS', 'OPERACION')
    .optional(),
  wholesaler: Joi.boolean().optional(),
  avatarColor: Joi.string().optional(),
  isDriver: Joi.boolean()
    .valid(true, false)
    .optional(),
});

const updateUserSchema = Joi.object({
  name: Joi.string()
    .min(1)
    .max(100)
    .optional(),
  username: Joi.string()
    .min(1)
    .max(30)
    .optional(),
  email: Joi.string()
    .email()
    .allow(null)
    .optional(),
  phone: Joi.string()
    .min(1)
    .max(30)
    .allow(null)
    .optional(),
  role: Joi.string()
    .valid('ADMIN', 'AV', 'COMPRAS', 'OPERACION')
    .optional(),
  isDriver: Joi.boolean()
    .valid(true, false)
    .optional(),
  wholesaler: Joi.boolean().optional(),
  avatarColor: Joi.string().optional(),
});

const updateProfileSchema = Joi.object({
  name: Joi.string()
    .min(1)
    .max(100)
    .optional(),
  username: Joi.string()
    .min(1)
    .max(30)
    .optional(),
  password: Joi.string()
    .min(1)
    .max(30)
    .optional(),
  email: Joi.string()
    .email()
    .allow(null)
    .optional(),
  phone: Joi.string()
    .min(1)
    .max(30)
    .allow(null)
    .optional(),
  avatarColor: Joi.string().optional(),
  isWholesaler: Joi.boolean().optional(),
});

module.exports = {
  idSchema,
  getUserSchema,
  userSchema,
  updateUserSchema,
  updateProfileSchema,
};
