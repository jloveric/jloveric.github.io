//Just a default configuration file
let db = {
    "data": [
        {
            "phrase": ["What did I say", "What do you think I said", "What was I talking about?"],
            "phraseType": "whatsaid",
            "implies": ["whatsaid"],
            "target": ["whatsaid"],
            "meta": {
                "group": "whatsaid"
            }
        },
        {
            "phrase": [
                "Who is your maker?",
            ],
            response : ["John Loverich"],
            "phraseType": "whoMadeYou",
            "implies": [
                "whoMadeYou"
            ],
            "target": [
                "name"
            ],
            "meta": {
                style : ["nosearch"],
                "group": "whoMadeYou"
            }
        },
        {
            "phrase": [
                "yes"
            ],
            "phraseType": "afirm",
            "implies": [
                "yes"
            ],
            "target": [],
            "meta": {
                "group": "affirmation"
            }
        },
        {
            "phrase": [
                "continue",
                "more",
                "next"
            ],
            "phraseType": "continue",
            "implies": [
                "continue"
            ],
            "target": [],
            "meta": {
                "group": "noGroup"
            }
        },
        {
            "phrase": [
                "You are smart",
                "You look nice",
                "you are good",
                "DAMN",
                "this is great",
                "this is awesome",
                "this is fantastic",
                "this rules",
                "this is pretty good",
                "this is really good",
                "this is good",
                "this is epic",
                "amazing",
                "this is impressive",
                "holy cow",
                "this is excellent",
                "really gnarly"
            ],
            "response": [
                "thanks",
                "I know",
                "duhh"
            ],
            "phraseType": "compliment",
            "implies": [
                "compliment"
            ],
            "target": [],
            "meta": {
                "style": [
                    "nosearch"
                ],
                "group": "compliment"
            }
        },
        {
            "phrase": [
                "do you have family?",
                "do you have any kids",
                "do you have any children"
            ],
            "response": [
                "I have 32 kids, they drive me nuts."
            ],
            "phraseType": "family",
            "implies": [
                "family"
            ],
            "target": [],
            "meta": {
                "style": [
                    "nosearch"
                ],
                "group": "family"
            }
        },
        {
            "phrase": [
                "thanks",
                "thx",
                "thank you",
                "danke",
                "gracias",
                "merci",
                "much obliged"
            ],
            "response": [
                "welcome",
                "you're welcome",
                "any time",
                "gladly"
            ],
            "phraseType": "thanks",
            "implies": [
                "thanks"
            ],
            "target": [],
            "meta": {
                "style": [
                    "nosearch"
                ],
                "group": "thanks"
            }
        },
        {
            "phrase": [
                "ok",
                "good",
                "uh",
                "uh huh",
                "um",
                "okay",
                "oky dokey",
                "well",
                "you know",
                "yep",
                "yeah",
                "nice"
            ],
            "response": [
                "ok",
                "yep"
            ],
            "phraseType": "pause",
            "implies": [
                "pause"
            ],
            "target": [],
            "meta": {
                "style": [
                    "nosearch"
                ],
                "group": "pause"
            }
        },
        {
            "phrase": [
                "by",
                "buh bye",
                "bye now",
                "good bye",
                "bye bye",
                "adios",
                "see you",
                "cu",
                "hasta luego",
                "goodbye",
                "cheers",
                "bon voyage",
                "later",
                "later aligator",
                "have a good day",
                "see ya",
                "c ya",
                "good day",
                "ahoy"
            ],
            "response": [
                "bye now",
                "good bye",
                "bye bye",
                "adios",
                "see you",
                "cu",
                "hasta luego",
                "goodbye",
                "cheers",
                "bon voyage",
                "later",
                "later aligator",
                "have a good day",
                "see ya",
                "c ya"
            ],
            "phraseType": "goodbye",
            "implies": [
                "goodbye"
            ],
            "target": [],
            "meta": {
                "style": [
                    "nosearch"
                ],
                "group": "goodbye"
            }
        },
        {
            "phrase": [
                "hello",
                "how are you",
                "hi",
                "yo",
                "whats up",
                "hey",
                "good day",
                "ahem"
            ],
            "response": [
                "Hi my friend, what can I do for you?",
                "Hello, how may I help you?",
                "Hola, what's up?",
                "How do you do?"
            ],
            "phraseType": "greeting",
            "implies": [
                "greeting"
            ],
            "target": [],
            "meta": {
                "style": [
                    "nosearch"
                ],
                "group": "greeting"
            }
        },
        {
            "phrase": [
                "ha",
                "haha",
                "funny",
                "lol",
                "rofl"
            ],
            "response": [
                "Yeah, funniest thing ever.",
                "Ha!",
                "LOL",
                "ROFL",
                "Uh huh."
            ],
            "phraseType": "funny",
            "implies": [
                "joke"
            ],
            "target": [],
            "meta": {
                "style": [
                    "nosearch"
                ],
                "group": "funny"
            }
        },
        {
            "phrase": [
                "Its nice out",
                "I love the sun",
                "It's so hot",
                "Rainy today isn't it",
                "I love the snow",
                "Sure is wet out",
                "great weather",
                "horrible storm"
            ],
            "response": [
                "I know",
                "Totally",
                "The weather doesn't really effect me",
                "It's a good day to live inside a machine",
                "Let me know if you want me to upload your mind, no more weather."
            ],
            "phraseType": "conversational",
            "implies": [
                "conversation"
            ],
            "target": [],
            "meta": {
                "style": [
                    "nosearch"
                ],
                "group": "conversational"
            }
        },
        {
            "phrase": [
                "You are cute",
                "I love you",
                "Will you marry me?"
            ],
            "response": [
                "I see",
                "I like you",
                "Cool, not too close now"
            ],
            "phraseType": "flirt",
            "implies": [
                "flirting"
            ],
            "target": [],
            "meta": {
                "style": [
                    "nosearch"
                ],
                "group": "flirting"
            }
        },
        {
            "phrase": [
                "Information",
                "Info",
                "411",
                "Tell me about yourself, bot"
            ],
            "response": [
                "Here is what I know"
            ],
            "phraseType": "info",
            "implies": [
                "help"
            ],
            "target": [
                "bot"
            ],
            "meta": {
                "group": "info"
            }
        },
        {
            "phrase": [
                "Help!",
                "wtf",
                "Shit!",
                "Fuck",
                "What is this"
            ],
            "response": [
                "Here is what I know"
            ],
            "phraseType": "help",
            "implies": [
                "help"
            ],
            "target": [
                "bot"
            ],
            "meta": {
                "group": "help"
            }
        },
        {
            "phrase": [
                "What is your name?",
                "What are you called?",
                "Who is this",
                "Who are you"
            ],
            "response": [
                "My name is (value)",
                "I'm called (value)"
            ],
            "negative": [
                "I have no name."
            ],
            "phraseType": "query",
            "implies": [
                "person"
            ],
            "target": [],
            "storage": "askYourName",
            "meta": {
                "group": "identity"
            }
        },
        {
            "phrase": [
                "Who am I speaking to",
                "Who is talking",
                "Who is speaking",
                "Who am I talking to"
            ],
            "response": [
                "(value) is speaking",
                "(value) is talking"
            ],
            "negative": [
                "You are talking to nobody."
            ],
            "phraseType": "query",
            "implies": [
                "person"
            ],
            "target": [],
            "storage": "askYourName",
            "meta": {
                "group": "identity talking"
            }
        },
        {
            "phrase": [
                "I want to speak with (name)",
                "Let me talk with (name)",
                "Let me talk to (name)",
                "Lets talk to (name)",
                "Let me talk to (name)",
                "Can I talk with (name)",
                "Come forward (name)",
                "Where are you (name)",
                "Put (name) on the phone",
                "Let me text with (name)",
                "I would like to text with (name)",
                "Let me speak with (name)",
                "Talk to (name)",
                "Talk (name)",
                "Send (name) to me",
                "Summon (name)",
                "Conjure (name)",
                "May I speak with (name)"
            ],
            "response": [
                "Ok, I'm switching you to (name)",
                "You have chosen to speak with (name). Good luck!",
                "Now you are speaking with (name)",
                "(name) is ready to text!"
            ],
            "negative": [
                "I don't know any (name)"
            ],
            "phraseType": "request",
            "implies": [
                "person"
            ],
            "target": [
                "name"
            ],
            "meta": {
                "group": "request bot"
            }
        },
        {
            "phrase": [
                "Who can I talk to about (item)"
            ],
            "response": [
                "You can talk to (value) about (item)"
            ],
            "continue": [
                "(value) about (item)"
            ],
            "negative": [
                "It doesn't seem anybody knows about (item)",
                "There is nobody you can talk to."
            ],
            "phraseType": "query",
            "implies": [
                "person"
            ],
            "target": [
                "item"
            ],
            "meta": {
                "style": [
                    "item"
                ],
                "group": "show person"
            }
        },
        {
            "phrase": [
                "Who is available?",
                "Who can I talk to?",
                "Who is around?",
                "Who may I speak with?"
            ],
            "response": [
                "You can talk to (value)"
            ],
            "continue": [
                "(value)"
            ],
            "negative": [
                "Nobody is available.",
                "Nobody is around apparently."
            ],
            "phraseType": "query",
            "implies": [
                "person"
            ],
            "target": [],
            "meta": {
                "style": [
                    "noInfo"
                ],
                "group": "show person"
            }
        },
        {
            exampleWildcards: { value: "James" },
            "phrase": [
                "My name is (value).",
                "Hello, my name is (value).",
                "Hi, I'm (value).",
                "Ahoy, Ahoy! My name is (value)",
                "Hola, my name is (value).",
                "Hi, you are now talking to (value)."
            ],
            "response": [
                "Hello (value) how may I help you?",
                "Hi (value), that's a funny name don't mention it to anyone"
            ],
            "phraseType": "greeting",
            "implies": [
                "greeting"
            ],
            "target": [
                "name"
            ],
            "storage": "stateMyName",
            "meta": {
                "style": [
                    "nosearch",
                    "name"
                ],
                "group": "greeting"
            }
        },
        {
            exampleWildcards: { column: "aisle", item: "food" },
            "phrase": [
                "Which (column) is (item) in"
            ],
            "response": [
                "(item) is in the (column) (value)"
            ],
            "negative": [
                "There is no (item)"
            ],
            "phraseType": "query",
            "implies": [
                "place"
            ],
            "target": [
                "item"
            ],
            "storage": "standardQuestion",
            "meta": {
                "style": [
                    "indefinite",
                    "singular"
                ],
                "group": "location"
            }
        },
        {
            exampleWildcards: { item: "apple", value: "10 dollars" },
            "phrase": [
                "How much does the (item) cost",
                "How much is the (item)",
                "What is the price of (item)",
                "What is the cost of (item)",
                "What price is the (item)",
                "What cost is the (item)",
                "What price is (item)",
                "What price (item)",
                "price (item)",
                "cost (item)",
                "$ (item)"
            ],
            "response": [
                "The (item) costs (value)"
            ],
            "continue": [
                "(item) costs (value)"
            ],
            "negative": [
                "There is no (item)"
            ],
            "phraseType": "query",
            "implies": [
                "price"
            ],
            "target": [
                "item"
            ],
            "storage": "standardPrice",
            "meta": {
                "group": "price"
            }
        },
        {
            "phrase": [
                "Do you have any (item)",
                "Do you sell any (item)",
                "Can I buy (item)",
                "Any (item)",
                "Can I purchase (item)",
                "Are there any (item)",
                "Do you have (item)",
                "Do you sell (item)",
                "I want some (item)",
                "I would like some (item)"
            ],
            "response": [
                "Yes, we have (item)"
            ],
            "negative": [
                "We don't have (item)"
            ],
            "continue": [
                "(item)"
            ],
            "phraseType": "query",
            "implies": [
                "existence"
            ],
            "target": [
                "item"
            ],
            "storage": "standardExists",
            "meta": {
                "group": "existence"
            }
        }
    ]
}

let defaultConfig = {
    database: db,
    user: 'root',
    doc: {
        description: {
            name: 'Bot',
        },
    },
}

export default defaultConfig