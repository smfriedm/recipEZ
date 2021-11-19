import { NavigationContainer } from "react-navigation";
import React from "react";
import { createAppContainer } from "react-navigation";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
import {StyleSheet,View} from 'react-native';
import HomeScreen from "./src/screens/HomeScreen";
// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import RecipeListScreen from "./src/screens/RecipeListScreen";
import ShoppingListScreen from "./src/screens/ShoppingListScreen";
import ProfileScreen from "./src/screens/ProfileScreen";
import Icon from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather'
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

const TabNavigator = createMaterialBottomTabNavigator(
  {
  Home:{
    screen: HomeScreen,
    navigationOptions:{
      tabBarIcon: ({tintColor}) => (
        <View>
          <Icon name={'home'} size={25}/>
        </View>
      )
    }
  },
  Shopping:{
    screen: ShoppingListScreen,
    navigationOptions:{
      tabBarIcon: ({tintColor}) => (
        <View>
          <Feather name={'shopping-cart'} size={25}/>
        </View>
      )
    }
  },
  Recipe:{
    screen: RecipeListScreen,
    navigationOptions:{
      tabBarIcon: ({tintColor}) => (
        <View>
          <MaterialCommunityIcon name={'chef-hat'} size={25}/>
        </View>
      )
    }
  },
  Profile:{
    screen: ProfileScreen,
    navigationOptions:{
      tabBarIcon: ({tintColor}) => (
        <View>
          <Icon name={'person-circle'} size={25}/>
        </View>
      )
    }
  }
},
{
  initialRouteName: 'Home',
  activeColor: '#ffffff',
  inactiveColor: '#bda1f7',
  barStyle: { backgroundColor: '#6948f4' },
}
)

export default createAppContainer(TabNavigator);