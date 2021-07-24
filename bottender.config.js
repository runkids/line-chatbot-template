module.exports = {
  channels: {
    line: {
      enabled: true,
      path: '/callback',
      accessToken: process.env.LINE_ACCESS_TOKEN,
      channelSecret: process.env.LINE_CHANNEL_SECRET,
    },
  },
};
