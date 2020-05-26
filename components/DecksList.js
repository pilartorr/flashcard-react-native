import * as React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { getDecks } from "../utils/helpers";
import { purple, white } from '../utils/colors';

export default class DeckList extends React.Component {
  render(){
    const decks = getDecks();
    const { navigation } = this.props
    return(
      <View>
        { Object.keys(decks).map((deck) => {
          const { title, questions } = decks[deck]
          const numbersOfCards = questions.length
          console.log(numbersOfCards)
          return ( 
            <TouchableOpacity
              onPress={() => navigation.navigate("Deck", { title: title })}
            >
              <View style={styles.container} key={deck}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.number}>{numbersOfCards} cards</Text>
              </View> 
            </TouchableOpacity>
          );
        })}
      </View>
    )   
  }  
}

const styles = StyleSheet.create({
  container: { 
    alignItems: "center",
    backgroundColor: white,
    borderRadius: 2,
    padding: 10,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 17,
    shadowRadius: 3,
    shadowOpacity: 0.8,
    shadowColor: "rgba(0,0,0,0.24)",
    shadowOffset: {
      width: 0,
      height: 3
    },
    height: 150,
    justifyContent: "center"
  },
  title: {
    fontSize: 40,
    color: purple,
    fontWeight: "bold"
  },
  number: {
    fontSize: 25
  }
});