'use strict';

/**
 * publish-micro-app router.
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::publish-micro-app.publish-micro-app');
