import React from 'react';
import {StyleSheet, View} from 'react-native'

const Card = (props) => {
    return (
        <View style={styles.cardStyle}>
            {props.children}
        </View>
    );
};


const styles = StyleSheet.create({
    cardStyle: {
        margin: 10,
        borderRadius: 5,
        borderWidth: 0.2,
        borderColor: '#d5d5d5',
        marginTop: 20,
    }
});

export default Card;