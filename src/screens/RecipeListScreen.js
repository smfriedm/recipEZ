import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const RecipeListScreen = () => {
    return <View style={styles.container}>
        <Text>RecipeListScreen</Text>
    </View>
}

const styles = StyleSheet.create({
    container: {
        justifyContent:'center',
        alignItems:'center',
        flex: 1
      }
});

export default RecipeListScreen;