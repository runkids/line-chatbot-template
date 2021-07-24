async function handlePostBack(context) {
  await context.reply([
    {
      type: 'text',
      text: 'Hello!',
    },
  ]);
}

module.exports = {
  handlePostBack,
};
