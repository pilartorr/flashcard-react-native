import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { blue, white, red, green } from '../utils/colors';
import Deck from './Deck'
import { connect } from 'react-redux'
import { removeDeck } from '../actions/index';
import { removeDeckAPI } from '../utils/api';

class DeckDetail extends React.Component {
    handleDelete = id => {
        const { removeDeck, navigation } = this.props;  
        
        removeDeck(id);
        removeDeckAPI(id);
    
        //navigation.goBack();
    }
    render() {
        const { deck } = this.props;
        return (
            <View style={styles.container}>
                <Deck id={deck.title} />
                <TouchableOpacity>
                    <Text style={styles.btn}>Add Card</Text>
                </TouchableOpacity> 
                <TouchableOpacity>
                    <Text style={[styles.btn, styles.start]}>Start Quiz</Text>
                </TouchableOpacity> 
                <TouchableOpacity onPress={() => this.handleDelete(deck)}>
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

const mapStateToProps = (state, {route}) => {
    const title = route.params.title;
    const deck = state[title];
  
    return {
      deck
    };
};
  
export default connect(mapStateToProps, { removeDeck })(DeckDetail);