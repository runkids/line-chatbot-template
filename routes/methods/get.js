// const { context, userSession, groupSession } = require('../../util/bot');

module.exports = server => {
  server.get('/health', (req, res) => {
    // const user = userSession('Ue1478247ba32232922ed55c5563e76e9');
    // const group = groupSession('C668419f4d852485fe0df1474db66fecc');

    // context(user).pushText('Health Check!');
    // context(group).pushText('Egg!');
    res.send('ok');
  });
};
