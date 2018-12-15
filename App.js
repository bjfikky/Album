import React, {Component} from 'react';
import {SafeAreaView, ScrollView} from 'react-native';


import Header from './src/components/Header'
import AlbumList from './src/components/AlbumList'


// const instructions = Platform.select({
//     ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
//     android:
//         'Double tap R on your keyboard to reload,\n' +
//         'Shake or press menu button for dev menu',
// });
//
// type Props = {};

export default class App extends Component {
    render() {
        return (
            <SafeAreaView style={{flex: 1, backgroundColor: '#f2f2f2'}}>
                <ScrollView>
                    <Header headerText="Albums"/>
                    <AlbumList/>
                </ScrollView>
            </SafeAreaView>
        );
    }
}


