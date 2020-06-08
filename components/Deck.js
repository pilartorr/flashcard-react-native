import React from 'react';
import { View, Text, StyleSheet, Animated } from 'react-native';
import { purple } from '../utils/colors';
import { connect } from 'react-redux';

class Deck extends React.Component {
    constructor () {
        super()
        this.animatedValue = new Animated.Value(0)
    }
    componentDidMount () {
        this.animate()
    }
    animate () {
        this.animatedValue.setValue(0)
        const createAnimation = function (value, duration, easing, delay = 0) {
            return Animated.timing(
                value,
                {
                    toValue: 1,
                    duration,
                    easing,
                    delay
                }
            )
        }
        createAnimation(this.animatedValue, 2000).start()
      }
    render(){
        const { title, numberOfCards } = this.props;
        const scaleText = this.animatedValue.interpolate({
            inputRange: [0, 1],
            outputRange: [0.5, 1]
        })
        return (  
            <View style={styles.container}>
                <Animated.Text style={[styles.title, {transform: [{scale: scaleText}]}]}>{title}</Animated.Text>
                <Text style={styles.number}>{numberOfCards} cards</Text>
            </View> 
        );
    }
    
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