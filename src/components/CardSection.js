import React from 'react';
import {View, Text, StyleSheet} from 'react-native'

const CardSection = (props) => {
    return (
        <View style={styles.cardSectionStyle}>
            {props.children}
        </View>
    );
};


const styles = StyleSheet.create({
    cardSectionStyle: {
        padding: 5,
        borderBottomWidth: 0.2,
        borderColor: '#d5d5d5'
    }
});


export default CardSection;