import { ActivityIndicator, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'

const GoogleSignIn = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    return (
        <View className='w-full'>
            {error ? <Text className='text-red-500 text-center text-sm mb-3'>{error}</Text> : null}
            <TouchableOpacity className='w-full bg-white rounded-md p-3 flex flex-row items-center justify-center border border-gray-300'>
                {loading ? <ActivityIndicator color={"#FF5722"} /> : <>
                    <Image source={{ uri: "https://google.com/favicon.ico" }} className='w-5 h-5 mr-2' />
                    <Text className='text-gray-900 text-base font-semibold'>Đăng nhập với Google</Text>
                </>}
            </TouchableOpacity>
        </View>
    )
}

export default GoogleSignIn

const styles = StyleSheet.create({
    button: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        gap: 10,
    }
})