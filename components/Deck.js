import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { purple } from '../utils/colors';
import { connect } from 'react-redux';

const Deck = props => {
    const { deck } = props;
    return (  
        <View>
            <Text style={styles.title}>{deck.title}</Text>
            <Text style={styles.number}>{deck.questions.length} cards</Text>
        </View> 
    );
};

const styles = StyleSheet.create({
    title: {
        fontSize: 40,
        color: purple,
        fontWeight: "bold"
    },
    number: {
        fontSize: 25
    }
  });


const mapStateToProps = (state, { id, }) => {
    const deck = state[id];
    return {
        deck
    };
};

export default connect(mapStateToProps)(Deck);