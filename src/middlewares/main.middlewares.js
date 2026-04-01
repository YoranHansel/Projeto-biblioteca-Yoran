const logger = require('./logger.middleware');
const errorHandler = require( './errorHandler.middlewares.js');
const autenticar = require('./auth.middleware.js');
const validarContentType = require('./contentType.middleware.js');

module.exports = { logger, errorHandler, autenticar, validarContentType };
