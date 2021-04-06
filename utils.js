const asyncHandler = (handler) => (req, res, next) => handler(req, res, next).catch(next);

const { check, validationResult } = require('express-validator')

const handleValidationErrors = (req, res, next) => {
    const validationErrors = validationResult(req);

    if( !validationErrors.isEmpty()) {
        const errors = validationErrors.array().map(err => err.msg);
        const err = new Error('Bad request');
        err.errors = errors;
        err.status = 404;
        err.title = 'Bad request';
        return next(err)
    }
    next();
}


module.exports = { asyncHandler, handleValidationErrors };
