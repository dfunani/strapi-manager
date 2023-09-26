'use strict';

/**
 *  micro-test controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::micro-test.micro-test');
