import React from 'react';
import {View, Text, StyleSheet} from 'react-native'


const Header = (props) => {
    return (
        <View style={styles.headerContainer}>
            <Text style={styles.headerText}>{props.headerText}</Text>
        </View>
    );
};


const styles = StyleSheet.create({
    headerText : {
       fontSize: 25,
        paddingBottom: 5
    },
    headerContainer : {
        backgroundColor: '#f2f2f2',
        paddingTop: 15,
        height: 60,
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomWidth: 0.5,
        borderBottomColor: 'gray',
        elevation: 2,
        position: 'relative'
    }
});


export default Header;