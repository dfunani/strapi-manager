'use strict';

/**
 * forum-question-vote service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::forum-question-vote.forum-question-vote');
