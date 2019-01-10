import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { clearLocalNotification, setLocalNotification } from '../utils/helpers'

function QuizResult ({ deck, correct, navigation }) {

  clearLocalNotification()
  .then(setLocalNotification);

  const score = Math.round((correct / deck.cards.length) * 100);
  const imgName = Math.floor(score/10);
  let imgUrl = {};
  let imgCaption = '';

  switch (imgName) {
    case 10:
    imgUrl = <Image source={require(`../images/10.gif`)} style={styles.emoji} />
    imgCaption = 'Perfect! You rock!'; break;
    case 9:
    imgUrl = <Image source={require(`../images/9.gif`)} style={styles.emoji} />
    imgCaption = 'Super!'; break;
    case 8:
    imgUrl = <Image source={require(`../images/8.gif`)} style={styles.emoji} />
    imgCaption = 'Great!'; break;
    case 7:
    imgUrl = <Image source={require(`../images/7.gif`)} style={styles.emoji} />
    imgCaption = 'Pretty good...'; break;
    case 6:
    imgUrl = <Image source={require(`../images/6.gif`)} style={styles.emoji} />
    imgCaption = 'You can do better...'; break;
    case 5:
    imgUrl = <Image source={require(`../images/5.gif`)} style={styles.emoji} />
    imgCaption = `You're sinking...`; break;
    case 4:
    imgUrl = <Image source={require(`../images/5.gif`)} style={styles.emoji} />
    imgCaption = `Here comes the sharks.`; break;
    case 3:
    imgUrl = <Image source={require(`../images/5.gif`)} style={styles.emoji} />
    imgCaption = `#crushed`; break;
    case 2:
    imgUrl = <Image source={require(`../images/5.gif`)} style={styles.emoji} />
    imgCaption = `Devastating.`; break;
    case 1:
    imgUrl = <Image source={require(`../images/5.gif`)} style={styles.emoji} />
    imgCaption = `Wow, just... wow.`; break;
    default:
    imgUrl = <Image source={require(`../images/5.gif`)} style={styles.emoji} />
    imgCaption = 'Study up, Buttercup!'; 
  }

  return (
    <View style={{flex: 1, margin: 10}}>
      <View key={deck.id} style={styles.card}>
        <Text style={styles.title}>
          <Text style={{fontSize: 20, textAlign: 'center'}}>{deck.title} Deck</Text>
        </Text>
        <Text style={styles.score}>
          Your Score: {score}%
        </Text>
        {imgUrl}
        <Text style={styles.caption}>
          {imgCaption}
        </Text>

        <TouchableOpacity
          style={styles.buttonStart}
          onPress={() => navigation.navigate('Deck', { deck: deck })}
        >
          <Text style={{fontSize: 20}}>Back to Deck</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.btnBox}>
        <TouchableOpacity
          style={styles.addCard}
          onPress={() => navigation.navigate('Quiz', { deck: deck, reload: 1 })}
        >
          <Text style={{fontSize: 20, textAlign: 'center'}}>Restart Quiz</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}


var styles = StyleSheet.create({
  card: {
    position: 'relative',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#aaa',
    borderRadius: 8,
    margin: 10,
    backgroundColor: '#fff',
    shadowOpacity: 0.15,
    shadowRadius: 5,
    shadowOffset: { height: 3, width: 3 },
  },
  title: {
    position: 'absolute',
    top: 0,
    width: '100%',
    flex: 1,
    alignItems: 'center',
    padding: 20,
  },
  emoji:{
    marginTop: 10,
    width: 140,
    height: 123,
  },
  score:{
    fontSize: 25,
    marginTop: 10,
  },
  caption:{
    fontSize: 25,
    marginTop: 10,
    marginBottom: 40,
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
    marginBottom: 30,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
  }
});

export default (QuizResult);