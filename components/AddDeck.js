import React, { Component} from 'react'
import { View, StyleSheet, TextInput, TouchableOpacity, Text } from 'react-native'
import { purple, blue, white } from '../utils/colors';
import { connect } from 'react-redux'
import { addDeck } from '../actions/index';
import { saveDeckAPI } from '../utils/api';

class AddDeck extends Component {
    state = {
        title: '',
    };
    handleChange = value => {
        this.setState({
            title: value
        })
    }
    handleSubmit = () => {
        const { title } = this.state

        this.props.addDeck(title);
        saveDeckAPI(title)
        
        this.props.navigation.navigate('DeckDetail',{ title: title })
        
        this.setState({
            title: ''
        })
    }

    render(){
        return (
            <View style={styles.container}>
                <Text style={styles.heading}>What is the title of your new Deck?</Text>
                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.textInput}
                        value={this.state.title}
                        onChangeText={this.handleChange}
                        placeholder="Please, type here a title for the new card"
                    />
                </View>
                <TouchableOpacity onPress={this.handleSubmit}>
                    <Text style={styles.submitBtn}>Create Deck</Text>
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
        borderRadius: 2,
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


export default connect(null, { addDeck })(AddDeck)

