import * as React from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Button } from 'react-native';
import { connect } from 'react-redux'
import { white, blue, red, green, purple } from '../utils/colors';

class Quiz extends React.Component {
  state = {
    questions: [],
    answeredQuestions: 0,
    correctAnswer: 0,
    incorrectAnswer: 0
  }
  componentDidMount = () => {
    const { deck } = this.props
    this.setState({
        ...this.state,
        questions: deck.questions
    });
  }

  render(){
    const { questions, answeredQuestions } = this.state;
    return(
      <View style={styles.container}>
        { questions.map((question) => {
          const totalQuestions = questions.length
          return(
            <View>
              <Text style={styles.numberOfQuestions}>{answeredQuestions}/{totalQuestions}</Text>
              <View>
                <Text style={styles.heading}>{question.question}</Text>
                <TouchableOpacity><Text style={styles.switchBtn}>Answer</Text></TouchableOpacity>
              </View>
              <View style={styles.btnContainer}>
                <TouchableOpacity>
                  <Text style={[styles.btn, styles.correct]}>Correct</Text>
                </TouchableOpacity> 
                <TouchableOpacity>
                  <Text style={[styles.btn, styles.incorrect]}>Incorrect</Text>
                </TouchableOpacity> 
              </View>
            </View>
          )
        })}
      </View>
    )   
  }  
}

const styles = StyleSheet.create({
  container: { 
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: Platform.OS === "ios" ? 8 : 2,
    padding: 40,
    shadowRadius: 3,
    shadowOpacity: 0.8,
    shadowColor: "rgba(0,0,0,0.24)",
    shadowOffset: {
      width: 0,
      height: 3
    },
  },
  numberOfQuestions: {
    alignSelf: "flex-end",
    padding: 5,
    marginBottom: 5,
    color: purple,
    fontWeight: "bold"
  },
  heading: { 
    fontSize: 40,
    textAlign: 'center',
    color: purple,
    fontWeight: "bold",
    marginTop: 100
  },
  switchBtn: {
    marginTop: 20,
    color: red,
    fontWeight: "bold",
    fontSize: 22,
    textAlign: 'center',
  },
  btnContainer: {
    marginTop: 150
  },
  btn: {
    backgroundColor: blue,
    color: white,  
    fontSize: 17,
    textAlign: 'center',
    padding: 10,
    margin: 5,
    borderRadius: 2,
    height: 45,
    width: 100
},
correct: {
    backgroundColor: green
},
incorrect: {
    backgroundColor: red
}
});

const mapStateToProps = (state, {route}) => {
  const title = route.params.title;
  const deck = state[title];
  return {
    deck,
  };
};

export default connect(mapStateToProps)(Quiz);