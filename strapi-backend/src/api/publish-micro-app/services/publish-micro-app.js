'use strict';

/**
 * publish-micro-app service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::publish-micro-app.publish-micro-app');
