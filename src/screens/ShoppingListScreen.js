import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const ShoppingListScreen = () => {
    return <View style={styles.container}>
        <Text>ShoppingListScreen</Text>
    </View>
}

const styles = StyleSheet.create({
    container: {
        justifyContent:'center',
        alignItems:'center',
        flex: 1
      }
});

export default ShoppingListScreen;