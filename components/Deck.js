import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { purple } from '../utils/colors';
import { connect } from 'react-redux';

const Deck = props => {
    const { title, numberOfCards } = props;
    const navigation = useNavigation();

    return (
        <TouchableOpacity
            key={title}
            onPress={() => navigation.navigate("DeckDetail", { title: title })}
        >
            <View>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.number}>{numberOfCards} cards</Text>
            </View> 
        </TouchableOpacity>
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

function mapStateToProps(decks, { title }) {
    return {
        title: decks[title],
        numberOfCards: decks[title] ? decks[title].length : 0
    };
}

export default connect(mapStateToProps)(Deck);