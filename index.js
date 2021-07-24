const { router } = require('bottender/router');
const routes = require('./channels/routes');

module.exports = async function App() {
  return router(routes);
};
