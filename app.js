const { App } = require('@slack/bolt');
require('dotenv').config();
const acronyms = require('./reducedAcronyms.json');
const { getFeedback } = require('./messageBuilder');

// Initializes your app with your bot token and signing secret
const app = new App({
  token: process.env.SLACK_BOT_TOKEN,
  signingSecret: process.env.SLACK_SIGNING_SECRET,
  socketMode: true, // add this
  appToken: process.env.SLACK_APP_TOKEN // add this
});

// Listens to incoming messages that contain "hello"
app.message('hello', async ({ message, say }) => {
    // say() sends a message to the channel where the event was triggered
    await say(`Hey there <@${message.user}>!`);
});

// Listens to incoming messages that contain "hello"
app.message('what', async ({ message, say }) => {
    const requestedAcronym = message.text.split('what is ')[1] || 'LMK';
    const obj = acronyms.find((obj) => obj.acronym === requestedAcronym)
    // say() sends a message to the channel where the event was triggered
    // await say(`Hey there <@${message.user}>, The acronym ${requestedAcronym} expands to ${obj.full}!`);
    await say(getFeedback(message.user, requestedAcronym, obj.full));
});

app.action('feedback_option', async(obj) => {
    console.log(obj);
    console.log(obj.payload.selected_option.text);
    await obj.say(`${obj.body.user.username} clicked the option - ${obj.payload.selected_option.text.text}`)
});


(async () => {
  // Start your app
  await app.start(process.env.PORT || 3000);

  console.log('⚡️ Bolt app is running!');
})();