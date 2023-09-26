'use strict';

/**
 * forum-vote service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::forum-vote.forum-vote');
