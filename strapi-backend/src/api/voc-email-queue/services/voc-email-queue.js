'use strict';

/**
 * voc-email-queue service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::voc-email-queue.voc-email-queue');
