const Joi = require('joi');

const createUser = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().email().required(),
  password: Joi.string().required(),
  age: Joi.number().required(),
});

module.exports = {
  createUser,
};