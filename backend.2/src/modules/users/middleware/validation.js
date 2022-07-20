const { celebrate, Segments, Joi } = require('celebrate');

module.exports = function postUsers() {
  return celebrate({
    [Segments.BODY]: Joi.object().keys({
      type: Joi.boolean().required('type is required'),
      name: Joi.string().required('name is required'),
      email: Joi.string().email().required('email is required'),
      age: Joi.number().required('age is required'),
      telephone: Joi.string().required('telephone is required'),
      formation: Joi.string().required('formation is required'),
      cep: Joi.string().required('cep is required'),
      password: Joi.string().min(8).required('password is required'),
    }),
  });
};
