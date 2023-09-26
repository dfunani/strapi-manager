'use strict';

/**
 * micro-app service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::micro-app.micro-app');
