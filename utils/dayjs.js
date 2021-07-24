const dayjs = require('dayjs');
require('dayjs/locale/zh-tw');
dayjs.locale('zh-tw');

const min = dayjs(
  new Date().toLocaleString('en-TW', {
    timeZone: 'Asia/Taipei',
  })
)
  .add(1, 'hour')
  .format('YYYY-MM-DDTHH:mm');

module.exports = {
  min,
  dayjs,
};
