import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Header from '../components/Header'

const RecipeListScreen = () => {
    return <View>
                <Header type={"recipe"}/>
                <View style={styles.container}>
                    <Text>RecipeScreen</Text>
                </View>
            </View>
}

const styles = StyleSheet.create({
    container: {
        justifyContent:'center',
        alignItems:'center',
      }
});

export default RecipeListScreen;