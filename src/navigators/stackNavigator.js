import React from 'react';
import {View, StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as Screen from '@screens'
import ListPage from '../screens/ListPage'
const StackNavigator = () => {

    const Stack=createStackNavigator()

    const _addScreen=(name)=> {
        return (
            <Stack.Screen
                name={name}
                component={Screen[name]}
            />)
    }
    return (
            <Stack.Navigator>
                {_addScreen('ListPage')}
                {_addScreen('DetailsPage')}
            </Stack.Navigator>
    );
}

const styles = StyleSheet.create({})

export default StackNavigator;
