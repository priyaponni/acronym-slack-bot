const getFeedback = (user, requestedAcronym, acronymValue) => {
    return {
        "blocks": [
            {
                "type": "section",
                "text": {
                    "type": "mrkdwn",
                    text: `Hey there <@${user}>, The acronym ${requestedAcronym} expands to ${acronymValue}!`
                }
            },
            {
                "type": "section",
                "text": {
                    "type": "mrkdwn",
                    "text": "Was this WHAT Bot's information helpful?"
                },
                "accessory": {
                    "type": "radio_buttons",
                    "options": [
                        {
                            "text": {
                                "type": "plain_text",
                                "text": "Yes, was super handy",
                                "emoji": true
                            },
                            "value": "value-0"
                        },
                        {
                            "text": {
                                "type": "plain_text",
                                "text": "No, don't disturb me",
                                "emoji": true
                            },
                            "value": "value-1"
                        },
                        {
                            "text": {
                                "type": "plain_text",
                                "text": "Meh",
                                "emoji": true
                            },
                            "value": "value-2"
                        }
                    ],
                    "action_id": "feedback_option"
                }
            },
            {
                "type": "actions",
                "elements": [
                    {
                        "type": "button",
                        "text": {
                            "type": "plain_text",
                            "text": "Click me if it was useful",
                            "emoji": true
                        },
                        "value": "click_me_123",
                        "action_id": "actionId-0"
                    }
                ]
            }
        ]
    }
}

module.exports = {
    getFeedback
}