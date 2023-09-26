module.exports = (policyContext, config, { strapi }) => {
  //  console.log(policyContext.state.user.id);
   // console.log(strapi.db);

    // if (policyContext.state.user.role.code === config.role) { // if user's role is the same as the one described in configuration
    //   return true;
    // }

    return true; // If you return nothing, Strapi considers you didn't want to block the request and will let it pass
};