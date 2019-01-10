import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { getDecks } from '../utils/api.js';
import { receiveDecks } from '../actions';

class Decks extends Component {

  state = {ready: false};

  componentDidMount () {
    const { dispatch } = this.props;

    getDecks()
      .then((decks) => dispatch(receiveDecks(decks)))
      .then(() => this.setState(() => ({ready: true})));
  }

  render() {
    const { allDecks, navigation } = this.props;
    const { ready } = this.state;

    if (ready === true) {
      return (
        <View style={{flex: 1, margin: 10}}>
          <Text style={styles.title}>Mobile Flashcards</Text>
          <FlatList
            data={allDecks}
            keyExtractor={(item, index) => 'key'+index}
            renderItem={({item}) => 
              <TouchableOpacity
                key={item.id}
                style={styles.card}
                onPress={() => navigation.navigate('Deck', { deck: item })}
              >
                <Text style={{fontSize: 20}}>
                  {item.title} Deck
                </Text>
                <Text style={{fontSize: 16, marginTop: 10}}>
                  Cards: {item.cards.length}
                </Text>
              </TouchableOpacity>
            }
          />
          </View>
      );
    } else { return null; }
  }
}

var styles = StyleSheet.create({
  card: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#aaa',
    borderRadius: 8,
    padding: 10,
    margin: 10,
    backgroundColor: '#fff',
    shadowOpacity: 0.15,
    shadowRadius: 5,
    shadowOffset: { height: 3, width: 3 },
  },
  title:{
    textAlign: 'center',
    width: '100%',
    fontSize: 25,
    marginTop: 40,
    marginBottom: 20,
  }
});

function mapStateToProps (decks) {
  const allDecks = Object.values(decks);
  return { allDecks };
}

export default connect(mapStateToProps)(Decks);