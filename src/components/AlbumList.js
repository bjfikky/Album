import React, {Component} from 'react';
import {View, Text, Button, Image, StyleSheet, Linking} from 'react-native';
import axios from 'axios'



import Card from './Card'
import CardSection from './CardSection'
import AlbumDetails from "./AlbumDetails";

class AlbumList extends Component {
    state = {
        albums: []
    };


    componentWillMount() {
        axios.get('http://rallycoding.herokuapp.com/api/music_albums').then(response => {
            this.setState({
                albums: response.data
            })
        })
    }


    renderAlbums() {
        return this.state.albums.map(album => {
            return (
                <Card key={album.title}>
                    <CardSection>
                        <AlbumDetails album={album}/>
                    </CardSection>

                    <CardSection>
                        <Image style={styles.albumArt} source={{uri: album.image}}/>
                    </CardSection>

                    <Button title={'Buy Now'} onPress={() => AlbumList.handleBuyNow(album.url)}/>
                </Card>
            )
        })
    }


    render() {
        console.log(this.state.albums)
        return (
            this.renderAlbums()
        );
    }


    static handleBuyNow(url) {
        Linking.openURL(url)
    }
}


const styles = StyleSheet.create({
    albumArt: {
        width: '100%',
        height: 300
    },
});

export default AlbumList;