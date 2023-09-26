'use strict';

/**
 * dashboard-app router.
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::dashboard-app.dashboard-app', {
    config: {
      find: {
        policies: [
          // point to a registered policy
          'my-policy',
  
        //   // point to a registered policy with some custom configuration
        //   { name: 'policy-name', config: {} }, 
          
        //   // pass a policy implementation directly
        //   (policyContext, config, { strapi }) => {
        //     return true;
        //   },
        ]
      },
    }
  });
