import { BasicBot } from 'neural-chatbot';
import { UserData } from 'neural-phrasex';

let db = {
  "data": [
    {
      exampleWildcards : {},
      "phrase": ["What is your name"],
      "response": ["My name is Bot"],
      "phraseType": "job",
      "implies": [
        "movie"
      ],
      "target": [
      ],
      "meta": {
        "style": [
          "nosearch"
        ],
        "group": "job"
      }
    },
    {
      exampleWildcards : {},
      "phrase": ["What do you do for a living",
        "What is your job", "How do you make money"],
      "response": ["I'm an engineer", "sometimes I work as a cook"],
      "phraseType": "job",
      "implies": [
        "movie"
      ],
      "target": [
      ],
      "meta": {
        "style": [
          "nosearch"
        ],
        "group": "job"
      }
    },
    {
      exampleWildcards : {},
      "phrase": ["What is your favorite movie"],
      "response": ["Aliens"],
      "phraseType": "favorite movie",
      "implies": [
        "movie"
      ],
      "target": [
      ],
      "meta": {
        "style": [
          "nosearch"
        ],
        "group": "movie"
      }
    },
    {
      exampleWildcards : {},
      "phrase": ["You are smart", "You look nice", "you are good",
        "DAMN", "this is great", "this is awesome", "this is fantastic",
        "this rules"],
      "response": ["thanks", "I know", "duhh"],
      "phraseType": "compliment",
      "implies": [
        "compliment"
      ],
      "target": [
      ],
      "meta": {
        "style": [
          "nosearch"
        ],
        "group": "compliment"
      }
    },
    {
      exampleWildcards : {},
      "phrase": ["do you have family?", "do you have any kids", "do you have any children"],
      "response": ["I have 32 kids, they drive me nuts."],
      "phraseType": "family",
      "implies": [
        "family"
      ],
      "target": [
      ],
      "meta": {
        "style": [
          "nosearch"
        ],
        "group": "family"
      }
    }]
}

let conf = {
  database: db,
  fileDatabase: 'filesystem',
  user: 'root',
  doc: {
    description: {
      name: 'JLO',
    },
  },
  phraseTable: 'dudephrases',
}

let initialize = async() => {
  let bot = new BasicBot()
  await bot.initialize(conf)
  let userData = new UserData()
  userData.initialize()
  return { bot, userData }
}

export default initialize