import { StyleSheet } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HomeStack from './HomeStack';
import GuideStack from './GuideStack';
import ProfileStack from './ProfileStack';
import { Ionicons } from '@expo/vector-icons';

const TabNavigator = () => {
    const Tab = createBottomTabNavigator();
    return (
        <Tab.Navigator screenOptions={{
            tabBarActiveTintColor: '#FF5722',
            tabBarInactiveTintColor: '#666',
            tabBarStyle: { backgroundColor: '#FFF', borderTopWidth: 0 },
            tabBarLabelStyle: { fontSize: 12 }
        }}>
            <Tab.Screen name='Trang chủ' component={HomeStack} options={{
                tabBarIcon: ({ color, size }) => (
                    <Ionicons name="home" color={color} size={size} />
                ),
                headerShown: false
            }} />
            <Tab.Screen name='Hướng dẫn' component={GuideStack} options={{
                tabBarIcon: ({ color, size }) => (
                    <Ionicons name="book" color={color} size={size} />
                ),
                headerShown: false
            }} />
            <Tab.Screen name='Cá nhân' component={ProfileStack} options={{
                tabBarIcon: ({ color, size }) => (
                    <Ionicons name="person" color={color} size={size} />
                ),
                headerShown: false
            }} />
        </Tab.Navigator>
    )
}

export default TabNavigator

const styles = StyleSheet.create({})