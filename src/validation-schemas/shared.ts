import Joi from 'joi'

export function validateId (id: any): number {
  const schema = Joi.number().required().min(1)
  const { error, value } = schema.validate(id)
  if (error != null) {
    throw error
  }
  return value
}
