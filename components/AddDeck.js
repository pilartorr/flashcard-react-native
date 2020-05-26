import React, { Component} from 'react'
import { View, StyleSheet, TextInput, TouchableOpacity, Text } from 'react-native'
import { purple, blue, white } from '../utils/colors';

class AddDeck extends Component {
    render(){
        return (
            <View style={styles.container}>
                <Text style={styles.heading}>What is the title of your new Deck?</Text>
                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.textInput}
                        value=""
                        placeholder="Please, type here a title for the new card"
                    />
                </View>
                <TouchableOpacity>
                    <Text style={styles.submitBtn}>Add title</Text>
                </TouchableOpacity>        
            </View>
        )
    }
}

export default AddDeck

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