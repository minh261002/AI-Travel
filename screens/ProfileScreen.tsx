import { Pressable, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useClerk } from '@clerk/clerk-expo'

const ProfileScreen = () => {
    const { signOut } = useClerk();

    const handleSignOut = async () => {
        try {
            await signOut()
        } catch (err) {
            console.error(err)
        }
    }
    return (
        <SafeAreaView>
            <Text>Profile Screen</Text>
            <Pressable onPress={handleSignOut}>
                <Text>Đăng xuất</Text>
            </Pressable>
        </SafeAreaView>
    )
}

export default ProfileScreen

const styles = StyleSheet.create({})