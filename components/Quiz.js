import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import CardFlip from 'react-native-card-flip';
import QuizResult from './QuizResult.js';

class Quiz extends Component {
  state = {
    "currentCard": 0,
    "correct": 0
  };

  componentWillReceiveProps() {
    console.log('received');
      this.setState(() => ({currentCard: 0, correct: 0 }));
  }

  recordAnswer(answer) {
    if (answer === 1) {
      this.setState(() => ({correct: this.state.correct + 1}));
    }
    this.setState(() => ({currentCard: this.state.currentCard + 1}));
    this.card.flip();
  }

  render() {
    const { navigation} = this.props;
    const { deck } = navigation.state.params;
    const { currentCard, correct } = this.state;
    const total = deck.cards.length;

    if (!deck.cards[currentCard]) {
      return (
        <QuizResult
          deck={deck}
          correct={correct}
          navigation={navigation}
        />
      );
    }

    return (
      <View style={{flex: 1, margin: 10}}>
        <CardFlip style={{flex:1}} flipZoom={0} duration={300} ref={(card) => this.card = card} >
          <TouchableOpacity style={styles.card} onPress={() => this.card.flip()} >
            <Text style={styles.text}>
              {deck.cards[currentCard].question}
            </Text>
            <View style={styles.buttonStart}>
              <Text style={{fontSize: 20}}>Show Answer</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.card} onPress={() => this.card.flip()} >
            <Text style={styles.text}>
              {deck.cards[currentCard].answer}
            </Text>
            <View style={styles.buttonAnswer}>
              <TouchableOpacity
                style={styles.correct}
                onPress={() => this.recordAnswer(1)}
              >
                <Text style={{fontSize: 20}}>Correct</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.incorrect}
                onPress={() => this.recordAnswer(0)}
              >
                <Text style={{fontSize: 20}}>Incorrect</Text>
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
        </CardFlip>
        <Text style={{fontSize: 20, textAlign: 'center'}}>{currentCard + 1} of {total}</Text>
      </View>
    );
  }
}

var styles = StyleSheet.create({
  card: {
    position: 'relative',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    maxHeight: 300,
    borderWidth: 1,
    borderColor: '#aaa',
    borderRadius: 8,
    margin: 10,
    backgroundColor: '#fff',
    shadowOpacity: 0.15,
    shadowRadius: 5,
    shadowOffset: { height: 3, width: 3 },
  },
  title:{
    fontSize: 25,
    margin: 10,
  },
  text: {
    fontSize: 25,
    marginTop: -20,
    marginBottom: 20
  },
  buttonStart:{
    position: 'absolute',
    bottom: 0,
    width: '100%',
    flex: 1,
    alignItems: 'center',
    padding: 20,
    borderTopWidth: 1,
    borderColor: '#ddd',
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
    backgroundColor: '#ccffff',
  },
  buttonAnswer:{
    position: 'absolute',
    bottom: 0,
    width: '100%',
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    borderTopWidth: 1,
    borderColor: '#ddd',
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
  },
  correct:{
    alignItems: 'center',
    flexGrow: 1,
    padding: 20,
    backgroundColor: 'lightgreen',
  },
  incorrect:{
    alignItems: 'center',
    flexGrow: 1,
    padding: 20,
    backgroundColor: 'pink',
  }
});

export default (Quiz);