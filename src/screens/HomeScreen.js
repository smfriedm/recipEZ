import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const HomeScreen = () => {
    return <View style={styles.container}>
        <Text>HomeScreen</Text>
    </View>
}

const styles = StyleSheet.create({
    container: {
        justifyContent:'center',
        alignItems:'center',
        flex: 1
      }
});

export default HomeScreen;