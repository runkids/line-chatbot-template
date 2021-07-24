const bodyParser = require('body-parser');
const express = require('express');
const { bottender } = require('bottender');

const app = bottender({
  dev: process.env.NODE_ENV !== 'production',
});

const port = Number(process.env.PORT) || 5000;

const handle = app.getRequestHandler();

app.prepare().then(() => {
  process.env.TZ = 'Asia/Taipei';
  const server = express();

  server.use(
    bodyParser.json({
      verify: (req, _, buf) => {
        req.rawBody = buf.toString();
      },
    })
  );

  require('./routes/methods/get')(server);

  server.all('*', (req, res) => {
    return handle(req, res);
  });

  server.listen(port, err => {
    if (err) throw err;
  });
});
