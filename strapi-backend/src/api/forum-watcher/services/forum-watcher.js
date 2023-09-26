'use strict';

/**
 * forum-watcher service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::forum-watcher.forum-watcher');
