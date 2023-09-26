'use strict';

/**
 * micro-app router.
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::micro-app.micro-app', {

    config: {
        create: {
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

        
}});
