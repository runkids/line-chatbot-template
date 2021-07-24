// const { context, userSession, groupSession } = require('../util/bot');

module.exports = server => {
  server.get('/health', (req, res) => {
    // const user = userSession('');
    // const group = groupSession('');

    // context(user).pushText('Health Check!');
    // context(group).pushText('Egg!');
    res.send('ok');
  });
};
