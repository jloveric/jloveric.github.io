//Just a default configuration file
let db = {
    "data": [
        {
            exampleWildcards: {},
            "phrase": ["What did I say", "What do you think I said", "What was I talking about?"],
            "phraseType": "whatsaid",
            "implies": ["whatsaid"],
            "target": ["whatsaid"],
            "meta": {
                "group": "whatsaid"
            }
        },
        {
            exampleWildcards: {},
            "phrase": [
                "Who is your maker?",
            ],
            response: ["John Loverich"],
            "phraseType": "whoMadeYou",
            "implies": [
                "whoMadeYou"
            ],
            "target": [
                "name"
            ],
            "meta": {
                style: ["nosearch"],
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
                "you are good",
                "DAMN",
                "this is great",
                "this is awesome",
                "this is fantastic",
                "this rules"
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
                "thank you",
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
                "well",
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
                "bye",
                "see you",
                "later",
            ],
            "response": [
                "bye now",
                "good bye",
                "bon voyage",
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
                "hi"
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
        }
    ]
}

//let detailedHelp = "Ok, you have accessed the help feature, I can't do anything for you now!"

let text = []
text.push('<div class="ui help" style="text-align:left;">Welcome to the Bot</div>')
text.push('<div class="ui bulleted list help" style="text-align:left;">')
text.push('<div class="item">Type <span>\'hello\' </span> to see which bot you are talking to or type <span>\'who am I speaking to\'<\span>.</div>')
text.push('<div class="item">Type <span>\'what did I say\'</span> to see what I think you said.</div>')
text.push('<div class="item">More coming.</div>')
text.push('<p></p>')
text.push('<div class="ui help" style="text-align:left;">I am built off of the following packages.</div>')
text.push('<div><a href="https://github.com/jloveric/NeuralSentenceSearch/" target="_blank">NeuralSentenceSearch</a></div>')
text.push('<div><a href="https://github.com/jloveric/NeuralPhraseX" target="_blank">NeuralPhraseX</a></div>')
text.push('<div><a href="https://github.com/jloveric/NeuralChatbot" target="_blank">NeuralChatBot</a></div>')
text.push('<div><a href="https://github.com/jloveric/neural-chatbot-react-retro" target="_blank">neural-chatbot-react-retro</a></div>')

let detailedHelp = text.join(' ')

let defaultConfig = {
    database: db,
    user: 'root',
    doc: {
        description: {
            name: 'Bot',
            help: detailedHelp
        },
    },
}

export default defaultConfig