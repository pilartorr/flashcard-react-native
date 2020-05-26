import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { purple } from '../utils/colors';
import { connect } from "react-redux";

const DeckCard = props => {
  const { title, numberOfCards } = props;

  return (
    <View style={styles.container} key={title}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.number}>{numberOfCards} cards</Text>
    </View> 
  );
};
  
function mapStateToProps({ title, questions }) {
  console.log(questions.length)
  return {
    title,
    numberOfCards: questions.length
  };
}


export default connect(mapStateToProps)(DeckCard);
        

const styles = StyleSheet.create({
    container: { 
      alignItems: "center",
      backgroundColor: "white",
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