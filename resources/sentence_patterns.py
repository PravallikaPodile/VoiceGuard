"""
Sentence patterns used to generate realistic disaster messages.
"""

SHORT_PATTERNS = [

    "{event}",

    "{event} help",

    "help {event}",

    "{event} please",

    "{event} now",

    "emergency {event}",

    "urgent {event}",

    "{event} happened",

    "{event} here",

    "{event} nearby"

]

NORMAL_PATTERNS = [

    "There is {event}.",

    "There is a {event}.",

    "There is an {event}.",

    "I think there is {event}.",

    "Looks like {event}.",

    "We have {event}.",

    "{event} has happened.",

    "Need help because of {event}.",

    "Please help, {event}.",

    "Can someone help? {event}.",

    "We are facing {event}.",

    "I can see {event}.",

    "People are scared because of {event}.",

    "{event} is getting worse.",

    "{event} is spreading quickly.",

    "Please send help for {event}.",

    "Need rescue because of {event}.",

    "Immediate help needed due to {event}.",

    "There is danger because of {event}.",

    "We cannot escape because of {event}."

]

LONG_PATTERNS = [

    "There is {event} in our area and everyone is panicking.",

    "My family is trapped because of {event}.",

    "Please send emergency services immediately because of {event}.",

    "We need rescue teams due to {event}.",

    "Several people are injured because of {event}.",

    "Children are trapped because of {event}.",

    "Old people cannot move because of {event}.",

    "The entire area is affected by {event}.",

    "Our house has become unsafe because of {event}.",

    "We cannot leave our home because of {event}.",

    "The situation is becoming dangerous because of {event}.",

    "Please send ambulance and rescue teams because of {event}.",

    "The road is blocked because of {event}.",

    "People are crying because of {event}.",

    "Everything happened suddenly because of {event}.",

    "The situation is becoming worse every minute because of {event}.",

    "Nobody knows what to do because of {event}.",

    "Please save us from {event}.",

    "Our neighbours are also affected because of {event}.",

    "Emergency teams are required because of {event}."

]

PANIC_PATTERNS = [

    "help",

    "please help",

    "save us",

    "save me",

    "run",

    "help help",

    "please save us",

    "emergency",

    "urgent",

    "need help",

    "can't breathe",

    "everyone run",

    "it's getting worse",

    "we are trapped",

    "please come fast"

]