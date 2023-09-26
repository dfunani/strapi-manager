'use strict';

/**
 *  toggle controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::toggle.toggle');
