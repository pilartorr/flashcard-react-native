import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { purple } from '../utils/colors';
  
export default function DecksList() {
  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.title}>Card 1</Text>
        <Text style={styles.number}>0 cards</Text>
      </View>
      <View style={styles.container}>
        <Text style={styles.title}>Card 2</Text>
        <Text style={styles.number}>0 cards</Text>
      </View>
    </View>
    
  );
}

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