import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';


const AlbumDetails = (props) => {
    return (
        <View style={styles.albumDetailContainer}>
            <View style={styles.cell}>
                <Image style={styles.thumbnail} source={{uri: props.album.thumbnail_image}}/>
            </View>

            <View style={styles.cell}>
                <Text style={styles.albumTitle}>{props.album.title}</Text>
                <Text>{props.album.artist}</Text>
            </View>
        </View>
    );
};


const styles = StyleSheet.create({
    albumDetailContainer: {
        flexDirection: 'row',
        padding: 5
    },

    thumbnail: {
        width: 50,
        height: 50
    },

    cell: {
        padding: 5
    },

    albumTitle: {
        fontSize: 18,
        fontWeight: '600'
    }
});

export default AlbumDetails;