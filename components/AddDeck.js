import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native';
import { addDeck } from '../actions';
import { setDeck, getDecks } from '../utils/api';

class AddDeck extends Component {
  state = {deckTitle: ''};

  addDeck = () => {
    if (this.state.deckTitle !== '') {
      const id = Date.now().toString();
      const newDeck = {
        "id": id,
        "title": this.state.deckTitle,
        "cards": [],
      };
      this.props.dispatch(addDeck(id, newDeck));
      setDeck(id, newDeck);
      this.setState({deckTitle: ''});

      this.props.navigation.navigate('Deck', { deck: newDeck });
    }
  };

  render() {
    return (
      <View style={{flex: 1, margin: 10}}>
        <View style={styles.card}>
          <Text style={styles.title}>What is the title of{"\n"}your new deck?</Text>
          <TextInput style={styles.input}
            underlineColorAndroid = "transparent"
            placeholder = "Deck Title"
            placeholderTextColor = "#9a73ef"
            autoCapitalize = "words"
            autoFocus = {true}
            onChangeText={(value) => this.setState({deckTitle: value})}
            value={this.state.deckTitle}
          />
          <TouchableOpacity
            style={styles.buttonStart}
            onPress={() => this.addDeck()}
          >
            <Text style={{fontSize: 20}}>Add Deck</Text>
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
    marginBottom: 10,
  },
  input: {
    width: '80%',
    height: 40,
    textAlign: 'center',
    fontSize: 25,
    marginTop: 15,
    marginBottom: 50,
    padding: 5,
    borderColor: '#ddd',
    borderWidth: 1
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

export default connect()(AddDeck);