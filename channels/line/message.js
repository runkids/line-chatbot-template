const { min } = require('../../utils/dayjs');

async function handleMessage(context) {
  switch (context.event.text) {
    case '預約':
      await context.sendFlex('請選擇您的預約時間', {
        type: 'bubble',
        body: {
          type: 'box',
          layout: 'vertical',
          contents: [
            {
              type: 'text',
              text: '請選擇您的預約時間',
            },
            {
              type: 'button',
              action: {
                type: 'datetimepicker',
                label: '選擇時間',
                data: `type=appointment`,
                mode: 'datetime',
                initial: min,
                min: min,
              },
            },
          ],
        },
      });
      break;
    default:
      context.reply([
        {
          type: 'text',
          text: '您好!',
        },
      ]);
      break;
  }
}

module.exports = {
  handleMessage,
};
