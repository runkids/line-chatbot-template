## Setup

1. Run `npm install` or `yarn` to install packages
    
2. Set webhook path in bottender.config.js
    
    ```javascript
      module.exports = {
        channels: {
          line: {
            enabled: true,
            path: 'xxxxxxx',
            accessToken: process.env.LINE_ACCESS_TOKEN,
            channelSecret: process.env.LINE_CHANNEL_SECRET,
          },
        },
      };
    ```
3.  Set Access Token & Channel Secret in .env file

    ```javascript
      LINE_ACCESS_TOKEN='xxxxx'
      LINE_CHANNEL_SECRET='xxxxx'
    ```
4.  Run `npm run dev` or `yarn dev` to start server, also automatically run up a Ngrok client, you can copy webhook url to LINE@ account's settings page
    ```
    line webhook url: https://xxxxx.ngrok.io/webhooks/line
    ```