import React, { Component} from 'react'
import { View, StyleSheet, TextInput, TouchableOpacity, Text } from 'react-native'
import { purple, blue, white } from '../utils/colors';
import { CommonActions } from '@react-navigation/native';
import { addCard } from '../actions/index';
import { addCardAPI } from '../utils/api';
import { connect } from 'react-redux'

class AddCard extends Component {
    state = {
        question: "",
        answer: "",
    };
    handleQuestion = (question) => {
        this.setState({ question })
    }
    handleAnswer = (answer) => {
        this.setState({ answer })
    }
    handleSubmit = () => {
        const { addCard, deckId } = this.props;

        const card = {
          question: this.state.question,
          answer: this.state.answer
        };
    
        addCard(deckId, card);
        addCardAPI(deckId, card);
    
        this.setState({ question: '', answer: '' });
        this.toHome();
    };
    toHome = () => {
        this.props.navigation.dispatch(
            CommonActions.goBack({
                key: 'DecksList',
            }))
    }
    render(){
        return (
            <View style={styles.container}>
                <Text style={styles.heading}>Create a new card</Text>
                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.textInput}
                        value={this.state.question}
                        onChangeText={this.handleQuestion}
                        placeholder="Please, type here the question"
                    />
                    <TextInput
                        style={styles.textInput}
                        value={this.state.answer}
                        onChangeText={this.handleAnswer}
                        placeholder="Please, type here the answer"
                    />
                </View>
                <TouchableOpacity onPress={this.handleSubmit}>
                    <Text style={styles.submitBtn}>Add Card</Text>
                </TouchableOpacity>
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
    heading: { 
        fontSize: 40,
        textAlign: 'center',
        color: purple,
        fontWeight: "bold" 
    },
    inputContainer: {
        justifyContent: "center",
        alignItems: "center",
        flex: 1,
        width: "100%"
    },
    textInput: {
        borderBottomWidth: 2,
        borderBottomColor: purple,
        paddingTop: 50,
        paddingBottom: 10,
        width: "100%",
        fontSize: 17,
    },
    submitBtn: {
        backgroundColor: blue,
        color: white,  
        fontSize: 17,
        padding: 10,
        paddingLeft: 30,
        paddingRight: 30,
        borderRadius: 2,
        height: 45
      }
});

const mapStateToProps = (state, {route}) => {
    const deckId = route.params.title;
    //console.log('deckId: ', deckId)
    return {
        deckId,
    };
  };
  
  
export default connect(mapStateToProps, { addCard })(AddCard);

