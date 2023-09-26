'use strict';

/**
 * webhook-reciver router.
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::webhook-reciver.webhook-reciver');
