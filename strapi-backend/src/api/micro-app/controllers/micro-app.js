'use strict';

/**
 *  micro-app controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::micro-app.micro-app');
