import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { purple } from '../utils/colors';
import { connect } from 'react-redux';

const Deck = props => {
    const { title, numberOfCards } = props;
    return (  
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.number}>{numberOfCards} cards</Text>
        </View> 
    );
};

const styles = StyleSheet.create({   
    container: {
        alignItems: "center"
    },
    title: {
        fontSize: 40,
        color: purple,
        fontWeight: "bold",       
    },
    number: {
        fontSize: 25,
    }
});

const mapStateToProps = (state, { id }) => {
    const deck = state[id];
    const title = deck.title;
    const numberOfCards = deck.questions.length
    return {
        title, 
        numberOfCards
    };
};

export default connect(mapStateToProps)(Deck);