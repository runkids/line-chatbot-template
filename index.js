const { router, line } = require('bottender/router');

module.exports = async function App() {
  return router([line.message(handleMessage)]);
};

async function handleMessage(context) {
  await context.reply([
    {
      type: 'text',
      text: 'Hello!',
    },
  ]);
}
