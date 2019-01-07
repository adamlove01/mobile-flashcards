# Mobile Flashcards: A Flashcard App for Studying on the Go

This is the third project for the course Udacity React Nanodegree. It's a mobile app using React Native and runs on IOS and Android devices.

This app has a list of card decks with any number of cards in each deck. The cards each have a question and answer. The user chooses a deck and starts the quiz. The card shows the question and the user tries to guess the answer, then flips the card and marks their guess as Correct or Incorrect.

When all cards have been answered, a total score is shown as a percentage.

There is a notification every day at 4pm. If the user completed at least one quiz on that day, an alert shows "Great Job!", otherwise it ask the user to start studying.

All the card data for the app is updated in a Redux store. AsyncStorage is used as the database.

## App Components

### Decks.js

This is the home page, and all the decks are listed. at the bottom are two tabs for 'Decks' (the current page) and 'Add a Deck'.

### AddDeck.js

Here the user can input a title and create a new deck. 

### Deck.js

From the home page the user can click on an individual deck and then start the quiz, or add more cards to the deck.

### AddCard.js

The user can type a question and answer to create a new card.

### Quiz.js

This page loops through all the cards in the deck, recording the users choices.

### QuizResult.js

The quiz results are shown, including an emoji image that is happy or sad depending on the result. In the background we also record the quiz date so we know that the user has been working.

### actions / reducers folders

In these folders we have a few functions for intializing the starting decks and adding decks and cards to the redux store.

### utils folder

The starting decks data is here, as well as asyncStorage functions.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Installing

Install all project dependencies

```
yarn install
```

Start the development server

```
yarn start
```

### Viewing on Mobile Devices

Install the Expo App on your IOS or Android device.
When you run 'yarn start', a new tab will open in your computer's browser. You will see a QR code on the bottom left. Open your phone's camera and view the QR code and you will see a popup on your phone 'Open in Expo' - click on that and your app will load on your phone. It takes a while so please be patient.

For more details about using the Expo app, check out this link. https://expo.io/learn

## Create React App

This project was bootstrapped with [create-react-native-app](https://github.com/react-community/create-react-native-app).

## Built With

* [React](https://github.com/facebook/react)
* [React-redux](https://github.com/reduxjs/react-redux)
* [React Native](https://github.com/facebook/react-native)
* [Expo](https://expo.io/learn)
* [Node/npm](https://github.com/nodejs/node)
* [React Navigation](https://github.com/react-navigation/react-navigation)
* [CardFlip](https://github.com/lhandel/react-native-card-flip)


## Author

* **Adam Love**

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

