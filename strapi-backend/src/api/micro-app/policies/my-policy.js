module.exports = async (policyContext, config, { strapi }) => {
      console.log(policyContext.state.user);
  
      // if (policyContext.state.user.role.code === config.role) { // if user's role is the same as the one described in configuration
      //   return true;
      // }
      

      // try {
      //    strapi
      //     .plugin('email-designer')
      //     .service('email')
      //     .sendTemplatedEmail(
      //       {
      //         // required
      //         to: 'sibusisoj@thedigitalacademy.co.za',
    
      //         // optional array of files
      //         attachments: [],
      //       },
      //       {
      //         // required - Ref ID defined in the template designer (won't change on import)
      //         templateReferenceId: 4,
    
      //         // If provided here will override the template's subject.
      //         // Can include variables like `Thank you for your order {{= USER.firstName }}!`
      //       },
      //       {
      //         // this object must include all variables you're using in your email template
      //         USER: {
      //           firstname: policyContext.state.user.username,
      //           lastname: 'Doe',
      //         },
      //         order: {
      //           products: [
      //             { name: 'Article 1', price: 9.99 },
      //             { name: 'Article 2', price: 5.55 },
      //           ],
      //         },
      //         shippingCost: 5,
      //         total: 20.54,
      //       }
      //     );
      // } catch (err) {
      //   strapi.log.debug('📺: ', err);
      //   return ctx.badRequest(null, err);
      // }
    
  
      return true; // If you return nothing, Strapi considers you didn't want to block the request and will let it pass
  };