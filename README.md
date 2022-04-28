# acronym-slack-bot

A slack bot listener for a 'Socket mode' slack bot, when added to your workspace, and then to your DM / channels, will provide some acronyms. Supported acronyms are available in the acronyms.json file.

Created through Bolt 🔅

#Some steps
1. Slack bot needs to be setup in 'Socket Mode'
2. Interactivity & Shortcuts, Event subscriptions to be enabled in the slack bot

#Heroku deployment
The app is deployed in Heroku at https://ged-what-bot.herokuapp.com/, as a worker app, not a web app
1. Don't forget to set the app's keys in heroku using `heroku config:set`
2. Procfile for a 'Socket mode' app should be setup with `worker node app.js`


#Documentation
[setting up an app](https://slack.dev/bolt-js/tutorial/getting-started#tokens-and-installing-apps)
[deploying to Heroku](https://slack.dev/bolt-js/deployments/heroku#get-a-bolt-slack-app) 
