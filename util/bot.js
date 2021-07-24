const { getClient, LineContext } = require('bottender');

module.exports = {
  context(session) {
    return new LineContext({
      client: getClient('line'),
      session,
      event: {},
    });
  },
  userSession(id) {
    return {
      type: 'user',
      user: {
        id,
      },
    };
  },
  groupSession(id) {
    return {
      type: 'group',
      group: {
        id,
      },
    };
  },
};
