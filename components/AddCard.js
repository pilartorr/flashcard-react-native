import React, { Component} from 'react'
import { View, StyleSheet, TextInput, TouchableOpacity, Text } from 'react-native'
import { purple, blue, white } from '../utils/colors';

const SubmitBtn = ({ onPress }) => {
    return (
      <TouchableOpacity onPress={onPress}>
        <Text style={styles.submitBtn}>Add title</Text>
      </TouchableOpacity>
    );
};

class AddCard extends Component {
    state = {
        question: "",
        answer: "",
    };
    handleQuestion = (value) => {
        this.setState({
            question: value
        })
    }
    handleAnswer = (value) => {
        this.setState({
            answer: value
        })
    }
    submitOptions = (e) => {
        e.preventDefault()

        const { question, answer } = this.state

        this.props.newDeck(question, answer)

        this.setState(() => ({
            toHome: true
        }))
    }
    render(){
        const { firstOption, secondOption, toHome } = this.state
        const { navigation } = this.props

        if (toHome === true) {
          return    <TouchableOpacity onPress={() => navigation.navigate("DecksList")} >
                        <Text>Go to Home</Text>
                    </TouchableOpacity>
        }

        return (
            <View style={styles.container}>
                <Text style={styles.heading}>What is the title of your new Deck?</Text>
                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.textInput}
                        value=""
                        onChangeText={value => onChangeText(value, name)}
                        {...props}
                        placeholder="Please, type here a title for the new card"
                    />
                </View>
                <SubmitBtn onPress={this.submit} />
            </View>
        )
    }
}

export default AddCard

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "flex-start",
        alignItems: "center",
        backgroundColor: "white",
        borderRadius: Platform.OS === "ios" ? 8 : 2,
        padding: 40,
        marginLeft: 10,
        marginRight: 10,
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