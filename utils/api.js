import { AsyncStorage } from 'react-native';

const startingDecks = {
  "0": {
    "id": "0",
    "title": "Pokemon",
    "cards": [
      {
        "question" : "What color is Pikachu?",
        "answer": "#Yellow"
      },
      {
        "question" : "What does Pikachu evolve into?",
        "answer": "Rychu"
      }
    ],
  },
  "1": {
    "id": "1",
    "title": "Star Wars",
    "cards": [
      {
        "question" : "Who is Luke's father?",
        "answer": "Darth Vader"
      },
      {
        "question" : "Who is C3P0's trusty sidekick?",
        "answer": "R2D2"
      }
    ],
  },
}

export async function getDecks () {
  let decks = {};
  await AsyncStorage.getItem('ALL_DECKS', (err, result) => {
    if (!err && result !== null) {
      decks = JSON.parse(result);
    } else {
      AsyncStorage.setItem('ALL_DECKS', JSON.stringify(startingDecks));
      decks = startingDecks;
    }
  });
  return decks;
}

export function setDeck ( id, deck ) {
  return AsyncStorage.mergeItem('ALL_DECKS', JSON.stringify({[id]: deck}));
}

