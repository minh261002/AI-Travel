import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TabNavigator from './TabNavigator';
import SignInScreen from '../screens/SignInScreen';
import SignUpScreen from '../screens/SignUpScreen';

export type RootStackParamLimit = {
    Auth: undefined;
    SignIn: undefined;
    SignUp: undefined;
    Main: undefined;
}

const Stack = createNativeStackNavigator<RootStackParamLimit>();

const RootNavigator = () => {
    const signin = false
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            {signin ? <Stack.Screen name='Main' component={TabNavigator} /> : (
                <Stack.Group>
                    <Stack.Screen name='SignIn' component={SignInScreen} />
                    <Stack.Screen name='SignUp' component={SignUpScreen} />
                </Stack.Group>
            )}
        </Stack.Navigator>
    )
}

export default RootNavigator

const styles = StyleSheet.create({})