'use strict';

/**
 *  webhook-reciver controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::webhook-reciver.webhook-reciver');
