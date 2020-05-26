import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { blue, white, red, green } from '../utils/colors';

export default class Deck extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>Deck</Text>
                <TouchableOpacity>
                    <Text style={styles.btn}>Add Card</Text>
                </TouchableOpacity> 
                <TouchableOpacity>
                    <Text style={[styles.btn, styles.start]}>Start Quiz</Text>
                </TouchableOpacity> 
                <TouchableOpacity>
                    <Text style={[styles.btn, styles.delete]}>Delete</Text>
                </TouchableOpacity> 
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "flex-start",
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
    start: {
        backgroundColor: green
    },
    delete: {
        backgroundColor: red
    }
})