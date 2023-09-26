'use strict';

/**
 *  publish-micro-app controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::publish-micro-app.publish-micro-app');
