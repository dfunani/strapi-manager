'use strict';

/**
 * uploaded-doc service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::uploaded-doc.uploaded-doc');
