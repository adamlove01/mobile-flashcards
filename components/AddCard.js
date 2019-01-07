import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, TouchableOpacity, TextInput, Keyboard, StyleSheet } from 'react-native';
import { addCard } from '../actions';
import { setDeck } from '../utils/api';

class AddCard extends Component {
  state = {
    question: '',
    answer: ''
  };

  addCard = () => {
    let { question, answer } = this.state;
    if (question !== '' || answer !== '') {
      question = question.replace(/\?*$/, '');
      question = question + '?';
      let deck = this.props.navigation.state.params.deck;
      this.props.dispatch(addCard(deck.id, question, answer));
      deck.cards.push({"question": question, "answer": answer});
      setDeck(deck.id, deck);
      this.setState({question: '', answer: ''});
      this.props.navigation.navigate('Deck', { deck: deck });
    }
  };

  render() {
    return (
      <View style={{flex: 1, margin: 10}}>
        <View style={styles.card}>
          <Text style={styles.title}>Add a question and answer for your new card.</Text>
          <TextInput style={styles.input}
            underlineColorAndroid = "transparent"
            placeholder = "Question"
            placeholderTextColor = "#9a73ef"
            autoCapitalize = "sentences"
            autoFocus = {true}
            onChangeText={(value) => this.setState({question: value})}
            onSubmitEditing={Keyboard.dismiss}
            value={this.state.deckTitle}
          />
          <TextInput style={[styles.input, styles.lastInput]}
            underlineColorAndroid = "transparent"
            placeholder = "Answer"
            placeholderTextColor = "#9a73ef"
            autoCapitalize = "sentences"
            onChangeText={(value) => this.setState({answer: value})}
            value={this.state.deckTitle}
          />
          <TouchableOpacity
            style={styles.buttonStart}
            onPress={() => this.addCard()}
          >
            <Text style={{fontSize: 20}}>Add Card</Text>
          </TouchableOpacity>
        </View>
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
    marginTop: 30,
    backgroundColor: '#fff',
    shadowOpacity: 0.15,
    shadowRadius: 5,
    shadowOffset: { height: 3, width: 3 },
  },
  title:{
    textAlign: 'center',
    width: '100%',
    fontSize: 25,
    margin: 10,
  },
  input: {
    width: '80%',
    height: 40,
    textAlign: 'center',
    fontSize: 25,
    marginTop: 15,
    marginBottom: 15,
    padding: 5,
    borderColor: '#ddd',
    borderWidth: 1
  },
  lastInput: {
    marginBottom: 80,
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
  }
});

export default connect()(AddCard);