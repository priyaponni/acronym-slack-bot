const { App } = require('@slack/bolt');
require('dotenv').config();
const acronyms = require('./acronyms.json');
const { getFeedback } = require('./messageBuilder');
var emoji = require('node-emoji');

const userMap = {};

// Initializes your app with your bot token and signing secret
const app = new App({
  token: process.env.SLACK_BOT_TOKEN,
  signingSecret: process.env.SLACK_SIGNING_SECRET,
  socketMode: true, // add this
  appToken: process.env.SLACK_APP_TOKEN // add this
});

// Listens to incoming messages that contain "hello"
app.message('hello', async ({ message, say }) => {
    await say(`Hey there <@${message.user}>!`);
});

// Listens to incoming messages that contain "?"
app.message('?', async ({ message, say }) => {
  const regex = /^\?[A-Z0-9]+/;
  if(!regex.test(message.text)) {
    return;
  }

  const requestedAcronym = message.text.substring(1);  
  const obj = acronyms.find((obj) => obj.acronym === requestedAcronym);
  const foundEmoji = ['coffee','umbrella_with_rain_drops', 'white_check_mark', 'trophy', 'golfer'];
  const notFoundEmoji = ['cry', 'persevere', 'worried', 'sweat', 'unamused'];
  
  if(!obj) {
    await say(`Sorry, we couldnt find ${requestedAcronym} ${emoji.get(notFoundEmoji[Math.floor(Math.random() * notFoundEmoji.length)])}`);
  } else {
    let isFirstTimeUser = !(userMap[message.user]);
    userMap[message.user] = true;
    const msg = `${requestedAcronym} refers to \`${obj.full}\`! ${emoji.get(foundEmoji[Math.floor(Math.random() * foundEmoji.length)])}`;
    await say(getFeedback(msg, isFirstTimeUser));
  }
});

app.action('feedback_option', async(obj) => {
    await obj.say(`Thank you, your response is valuable`)
});

app.action('actionId-0', async(obj) => {
  await obj.say(`Thank you, your response is valuable`);
});



(async () => {
  // Start your app
  await app.start(process.env.PORT || 3000);
  console.log(emoji.get('coffee'));

  console.log('⚡️ Bolt app is running!');
})();