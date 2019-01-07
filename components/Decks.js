import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { getDecks, getQuizDate } from '../utils/api.js';
import { receiveDecks } from '../actions';

class Decks extends Component {

  state = {ready: false};

  componentDidMount () {
    const { dispatch } = this.props;

    getDecks()
      .then((decks) => dispatch(receiveDecks(decks)))
      .then(() => this.setState(() => ({ready: true})));

    {/* Notification at 4pm every day */}
    let now = new Date();
    const date = `${now.getFullYear()}-${now.getMonth()}-${now.getDate()}`;
    let msTo4pm = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 16, 0, 0, 0) - now;
    if (msTo4pm < 0) {
      {/* It's after 4pm -- reset to 4pm tomorrow. */}
      msTo4pm += 86400000;
    }
    setTimeout(function(){
      getQuizDate().then((quizDate) =>{
        const date = `${now.getFullYear()}-${now.getMonth()}-${now.getDate()}`;
        if (date !== quizDate) {
          alert("You haven't studied yet today. Start now?");
        } else {
          alert("Good job studying today!");
        }
      });
    }, msTo4pm);
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