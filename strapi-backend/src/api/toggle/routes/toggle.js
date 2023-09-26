'use strict';

/**
 * toggle router.
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::toggle.toggle');
