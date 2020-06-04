import * as React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux'
import { white, blue, red, green, purple } from '../utils/colors';

const screen = {
  QUESTION: 'question',
  ANSWER: 'answer',
  RESULT: 'result'
};
const answer = {
  CORRECT: 'correct',
  INCORRECT: 'incorrect'
};

class Quiz extends React.Component {
  state = {
    questions: [],
    totalOfQuestions: this.props.deck.questions.length,
    correctAnswer: 0,
    incorrectAnswer: 0,
    answeredCards: 0,
    showScreen: screen.QUESTION,
  }
  componentDidMount = () => {
    const { deck } = this.props
    this.setState({
        ...this.state,
        questions: deck.questions
    });
  }
  handlePageChange = () => {
    this.setState({
      showScreen: screen.QUESTION
    });
  };
  handleAnswer = (response, page) => {
    if (response === answer.CORRECT) {
      this.setState({ correctAnswer: this.state.correctAnswer + 1 });
    } else {
      this.setState({ incorrectAnswer: this.state.incorrectAnswer + 1 });
    }
   
    const { correctAnswer, incorrectAnswer, totalOfQuestions } = this.state;

    if (totalOfQuestions === correctAnswer + incorrectAnswer) {
      this.setState({ showScreen: screen.RESULT });
    } else {
      this.setState({showScreen: screen.QUESTION});
    }

  };
  handleReset = () => {
    this.setState({
      showScreen: screen.QUESTION,
      correctAnswer: 0,
      incorrectAnswer: 0,
      answeredCards: 0
    });
  };
  render(){
    const { questions, showScreen } = this.state;

    if (questions.length === 0) {
      return (
        <View style={styles.block}>
          <Text>You cannot take a quiz because there are no cards in the deck.</Text>
          <Text>Please add some cards and try again.</Text>
        </View>
      );
    }

    if (this.state.show === screen.RESULT) {
      const { correctAnswer, totalOfQuestions } = this.state;
      const percent = ((correctAnswer / totalOfQuestions) * 100).toFixed(0);
      return(
        <View style={styles.block}>
          <View>
            <Text style={styles.headingBlock}>Quiz Complete!</Text>
            <Text style={[styles.textBlock, styles.textRed]}>{correctAnswer} / {totalOfQuestions} correct</Text>
          </View>
          <View>
            <Text style={styles.textBlock, styles.percent}>Percentage correct</Text>
            <Text style={[styles.textBlock, styles.textRed]}>{percent}%</Text>
          </View>
          <View style={styles.btnContainer}>
            <TouchableOpacity onPress={this.handleReset}>
              <Text style={[styles.btn, styles.btnRed]}>Restart Quiz</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => { this.handleReset(); this.props.navigation.goBack(); }}>
              <Text style={[styles.btn, styles.btnGreen]}>Go Back</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => { this.handleReset(); this.props.navigation.navigate('Home'); }}>
              <Text style={[styles.btn, styles.btnPurple]}>Home</Text>
            </TouchableOpacity>
          </View>        
        </View>
      )
    }
 
    return(
      <View>
        { questions.map((question, idx) => {
          return(
            <View key={idx}>
              <Text style={styles.numberOfQuestions}>{idx + 1}/{this.state.totalOfQuestions}</Text>
              <View>
                <Text style={[ showScreen === screen.QUESTION ? styles.question : styles.answer ]}>
                  { showScreen === screen.QUESTION
                    ? question.question
                    : question.answer }
                </Text>

                { showScreen === screen.QUESTION ? (
                  <TouchableOpacity  onPress={() => this.setState({ showScreen: screen.ANSWER })}>  
                    <Text style={styles.switchBtn}>Answer</Text>
                  </TouchableOpacity>
                ):(
                  <TouchableOpacity  onPress={() => this.setState({ showScreen: screen.QUESTION })}>  
                    <Text style={styles.switchBtn}>Question</Text>
                  </TouchableOpacity>
                )}       
              </View>  

              <View style={styles.btnContainer}>
                <TouchableOpacity onPress={() => this.handleAnswer(answer.CORRECT, idx)}>
                  <Text style={[styles.btn, styles.btnGreen]}>Correct</Text>
                </TouchableOpacity> 
                <TouchableOpacity onPress={() => this.handleAnswer(answer.INCORRECT, idx)}>
                  <Text style={[styles.btn, styles.btnRed]}>Incorrect</Text>
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
    padding: 16,
    justifyContent: 'space-around'
  },
  numberOfQuestions: {
    color: purple,
    fontWeight: "bold", 
    padding: 10
  },
  question: { 
    fontSize: 40,
    textAlign: 'center',
    color: purple,
    fontWeight: "bold",
    marginTop: 100
  },
  answer:{
    fontSize: 20,
    textAlign: 'center',
    color: purple,
    fontWeight: "bold",
    fontStyle: 'italic'
  },
  switchBtn: {
    marginTop: 20,
    color: red,
    fontWeight: "bold",
    fontSize: 20,
    textAlign: 'center',
  },
  btnContainer: {
    marginTop: 20,
    alignItems: "center",
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
  btnGreen: {
      backgroundColor: green
  },
  btnRed: {
      backgroundColor: red
  },
  btnBlue: {
    backgroundColor: blue
  },
  btnPurple: {
    backgroundColor: purple
  },
  block: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  headingBlock: {
    fontSize: 40,
    textAlign: 'center',
    color: green,
    fontWeight: "bold",
  },
  textBlock: {
    fontSize: 20,
    textAlign: 'center',
    padding: 10,
    fontWeight: "bold"
  },
  percent: {
    fontSize: 25,
    paddingTop: 20
  },
  textRed: {
    color: red
  }, 
});

const mapStateToProps = (state, {route}) => {
  const title = route.params.title;
  const deck = state[title];
  return {
    deck,
  };
};

export default connect(mapStateToProps)(Quiz);