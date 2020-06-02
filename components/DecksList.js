import * as React from 'react';
import { View, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/index';
import { white } from '../utils/colors';
import Deck from './Deck'

class DeckList extends React.Component {
  componentDidMount() {
    this.props.handleInitialData();
  }
  render(){
    const { decks, navigation } = this.props;
    return(
      <ScrollView>
        { Object.values(decks).map((deck) => {
          console.log('deck-list: ', deck)
          return ( 
            <View style={styles.container} key={deck.title}> 
              <TouchableOpacity onPress={() => navigation.navigate('DeckDetail', { title: deck.title })}> 
                <Deck id={deck.title}  />
              </TouchableOpacity>           
            </View>           
          );
        })}
      </ScrollView>
    )   
  }  
}

const styles = StyleSheet.create({
  container: { 
    alignItems: "center",
    backgroundColor: white,
    borderRadius: 2,
    padding: 10,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 17,
    shadowRadius: 3,
    shadowOpacity: 0.8,
    shadowColor: "rgba(0,0,0,0.24)",
    shadowOffset: {
      width: 0,
      height: 3
    },
    height: 150,
    justifyContent: "center"
  }
});

const mapStateToProps = (state) => {
  return {
    decks: state 
  };
};

export default connect(mapStateToProps, { handleInitialData })(DeckList);