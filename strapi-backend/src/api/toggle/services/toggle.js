'use strict';

/**
 * toggle service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::toggle.toggle');
