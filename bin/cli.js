const nodemon = require('nodemon');
const ngrok = require('ngrok');
const port = Number(process.env.PORT) || 5000;
const isDev = process.env.NODE_ENV !== 'production';
const config = require('../bottender.config');

if (isDev) {
  nodemon(`--exec "node server/index.js"`)
    .on('start', () => {
      console.log('App has started');
      console.log(`> Ready on http://localhost:${port}`);
    })
    .on('quit', () => {
      console.log('App has quit');
      process.exit();
    })
    .on('restart', files => {
      console.log('App restarted due to: ', files);
    });

  ngrok.connect(port).then(url => {
    console.log(`> Webhook url: ${url}${config.channels.line.path}`);
  });
}
