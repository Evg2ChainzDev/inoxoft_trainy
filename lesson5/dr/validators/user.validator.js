const Joi = require('joi')

const { CURRENT_YEAR, PASSWORD_REGEXP, EMAIL_REGEXP, MONGOID_REGEXP } = require('../configs/constants')

const userRolesEnum = require('../configs/user-roles.enum')

const createUserValidator = Joi.object({
    name: Joi.string().alphanum().min(2).max(30)
        .required()
        .trim(),
    password: Joi.string().regex(PASSWORD_REGEXP).required(),
    born_year: Joi.number().integer().min(CURRENT_YEAR-120).max(CURRENT_YEAR-6),
    email: Joi.string().email(EMAIL_REGEXP).required(),
    role: Joi.string().allow(...Object.values(userRolesEnum)),

    car: Joi.boolean()
})

const updateUserValidator = Joi.object({
    name: Joi.string().alphanum().min(2).max(30)
        .trim(),
    email: Joi.string().email(EMAIL_REGEXP).trim()
})

const userByIdValidator = Joi.object({
    user_id: Joi.string().trim().regex(MONGOID_REGEXP)
})

module.exports = {
    createUserValidator,
    updateUserValidator,
    userByIdValidator
}

