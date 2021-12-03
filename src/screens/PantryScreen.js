import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image, TextInput, Button, FlatList} from 'react-native';
import Header from '../components/Header';
import food from '../api/food';

const PantryScreen = () => {
    // ingredient data is the information displayed by our api
    const [ingredientData, setIngredientData] = useState();
    // ingredient name is the parameter used for the search query to find an ingredient
    const [ingredientName, setIngredientName] = useState('')
    // call to the api
    const getIngredient = () => {
        fetch(
            `https://api.spoonacular.com/food/ingredients/search?apiKey=ab73e0127b1c4c79922270ecd7f15b71&query=${ingredientName}&number=2&sort=calories&sortDirection=desc`
        )
        .then((response) => response.json())
        .then((data) => {
            setIngredientData(data)
            console.log({data});
        })
        .catch(() => {
            console.log('error');
        });
    }

    return <View style={styles.page}>
        <Header type={"pantry"}/>
        <View style={styles.container}>
            <Text>PantryScreen</Text>
        </View>
        {/* onChange calls handleChange and the text is the e. */}
        <TextInput style={styles.textBox} onChangeText={ingredientName=>setIngredientName(ingredientName)}/>
        {/* onPress calls the getIngredient() which makes the api call */}
        <Button title="Get Meal Data" onPress={()=>{getIngredient()}}/>
        <TouchableOpacity style={styles.imageCont} onPress={()=>console.log('plus pressed')}>
            <Image style={styles.image} source={require('../../assets/plus.png')}/>
        </TouchableOpacity>
    </View>
}

const styles = StyleSheet.create({
    container: {
        justifyContent:'center',
        alignItems:'center',
      },
    imageCont: {
        position: 'absolute',
        right: 5,
        bottom: 5
    },
    image: {
        height: 50,
        width: 50,
    },
    page: {
        flex: 1
    },
    textBox: {
        width: 100,
        height: 50,
        borderWidth: 3
    }
});

export default PantryScreen;