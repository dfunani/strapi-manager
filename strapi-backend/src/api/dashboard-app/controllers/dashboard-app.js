'use strict';

/**
 *  dashboard-app controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::dashboard-app.dashboard-app', ({ strapi }) =>  ({
    // GET /hello
    async find(ctx) {

      let d = await strapi.service('api::dashboard-app.dashboard-app').data(ctx.state?.user?.id);

       ctx.send(d)
    },
  }));
