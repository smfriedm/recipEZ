import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import Header from '../components/Header'

const PantryScreen = () => {
    return <View style={styles.page}>
        <Header type={"pantry"}/>
        <View style={styles.container}>
            <Text>PantryScreen</Text>
        </View>
        <Image style={styles.image} source={require('../../assets/plus.png')}/>
    </View>
}

const styles = StyleSheet.create({
    container: {
        justifyContent:'center',
        alignItems:'center',
      },
    image: {
        height: 50,
        width: 50,
        position: 'absolute',
        right: 5,
        bottom: 5
    },
    page: {
        flex: 1
    }
});

export default PantryScreen;