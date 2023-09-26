'use strict';

/**
 * micro-test service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::micro-test.micro-test');
