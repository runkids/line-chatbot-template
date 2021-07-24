const { line } = require('bottender/router');
const { handleMessage } = require('./line/message');
const { handlePostBack } = require('./line/postback');

module.exports = [line.message(handleMessage), line.postback(handlePostBack)];
