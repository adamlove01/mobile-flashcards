import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

class Deck extends Component {
  render() {
    const { navigation } = this.props;
    const deck = navigation.state.params.deck;
    const haveCards = deck.cards.length > 0 ? true : false;
    return (
      <View style={{flex: 1, margin: 10}}>
        <View key={deck.id} style={styles.card}>
          <Text style={{fontSize: 25}}>
            {deck.title} Deck
          </Text>
          <Text style={{fontSize: 16, marginTop: 10, marginBottom: 20}}>
            Cards: {deck.cards.length}
          </Text>
          {haveCards
          ?<TouchableOpacity
            style={styles.buttonStart}
            onPress={() => navigation.navigate('Quiz', { deck: deck })}
          >
            <Text style={{fontSize: 20}}>Start Quiz</Text>
          </TouchableOpacity>
          : null}
        </View>
        <View style={styles.btnBox}>
          <TouchableOpacity
            style={styles.addCard}
            onPress={() => navigation.navigate('AddCard', { deck: deck, navigation: navigation })}
          >
            <Text style={{fontSize: 20, textAlign: 'center'}}>Add Card</Text>
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
    maxHeight: 250,
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
  btnBox: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  addCard: {
    width: '50%',
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
  }
});

export default (Deck);