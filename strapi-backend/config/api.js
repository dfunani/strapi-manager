module.exports = ({ env }) => ({
    responses: {
      privateAttributes: [],
    },
    rest: {
      prefix: '/api',
      defaultLimit: 100,
      maxLimit: 250,
    },
  });