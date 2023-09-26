'use strict';

/**
 * webhook-reciver service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::webhook-reciver.webhook-reciver');
