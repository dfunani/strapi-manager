'use strict';

/**
 * dashboard-app service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::dashboard-app.dashboard-app', ({ strapi }) =>  ({
    // Method 1: Creating an entirely new custom service
    async data(user_id) {

        const entries = await strapi.db.query('api::dashboard-app.dashboard-app').findMany({
            where: {
              userID: user_id
            },
          });
  
      return entries ;
    }}));
