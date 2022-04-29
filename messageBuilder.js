const getFeedback = (text, isFirstTimeUser) => {
  const response = {};
  response.blocks = [
    {
      type: 'section',
      text: {
        type: 'mrkdwn',
        text,
      },
    },
  ];
  if (isFirstTimeUser) {
    response.blocks.push({
      type: 'section',
      text: {
        type: 'mrkdwn',
        text: "Was this WHAT Bot's information helpful?",
      },
      accessory: {
        type: 'radio_buttons',
        options: [
          {
            text: {
              type: 'plain_text',
              text: 'Yes, was super handy',
              emoji: true,
            },
            value: 'value-0',
          },
          {
            text: {
              type: 'plain_text',
              text: "No, don't disturb me",
              emoji: true,
            },
            value: 'value-1',
          },
        ],
        action_id: 'feedback_option',
      },
    });
  }
  return response;
};

module.exports = {
  getFeedback,
};
