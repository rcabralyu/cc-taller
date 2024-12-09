import Joi from 'joi'

export const taskCreateSchema = Joi.object().keys({
  title: Joi.string().required(),
  completed: Joi.boolean().required()
}).required().unknown(false)
