'use strict';

/**
 * micro-test router.
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::micro-test.micro-test');
