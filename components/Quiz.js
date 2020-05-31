import * as React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { connect } from 'react-redux'
import { white } from '../utils/colors';

class Quiz extends React.Component {
  render(){
    return(
        <View style={styles.container}>
          <Text>Quiz</Text>
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
  }
});

export default connect()(Quiz);