import { StyleSheet, SafeAreaView, ScrollView, View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import FeaturedGuides from '../components/FeaturedGuides';
import PopularDestination from '../components/PopularDestination';
import WeekendTrips from '../components/WeekendTrips';

export type HomeStackParamList = {
    HomeMain: undefined;
    NewTrip: undefined;
    PlanTrip: { trip: any };
    AIChat: undefined;
    MapScreen: undefined;
}

export type TabNavigatorParamList = {
    Home: undefined;
    Guides: undefined;
    Profile: undefined;
}

type HomeScreenNavigationProp = NativeStackNavigationProp<HomeStackParamList & TabNavigatorParamList>

const HomeScreen = () => {
    const navigation = useNavigation();

    return (
        <SafeAreaView className='flex-1 bg-white'>
            <ScrollView className='flex-1'>
                <View className='flex-row justify-between items-center px-4 pt-4 pb-2'>
                    <Image
                        source={{ uri: "https://wanderlog.com/assets/logoWithText.png" }}
                        className='w-36 h-8'
                        resizeMode='contain'
                    />

                    <View className='flex-row items-center gap-3'>
                        <TouchableOpacity className='p-2 rounded-full bg-gray-100'>
                            <Text className='text-lg'>🔍</Text>
                        </TouchableOpacity>

                        <TouchableOpacity className='bg-yellow-400 px-3 py-1 rounded-full'>
                            <Text className='text-sm font-semibold text-white'>PRO</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <View className='border-b border-gray-200 mx-4' />

                <View className='relative'>
                    <Image source={require('../assets/bg.png')} className='w-full h-80' resizeMode='cover' />

                    <View className='absolute inset-0 flex items-center justify-center'>
                        <Text className='text-white text-2xl font-bold text-center px-20 mb-4'>Lên kế hoạch cho chuyến đi tiếp theo của bạn</Text>
                        <TouchableOpacity className='bg-orange-500 px-6 py-2 rounded-full'>
                            <Text className='text-white font-semibold text-base'>
                                Tạo mới
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <View className='p-4'>
                    <Text className='text-2xl font-semibold mb-4'>
                        Hướng dẫn được đề xuất
                    </Text>
                    <FeaturedGuides />
                </View>

                <View className='p-4'>
                    <Text className='text-2xl font-semibold mb-4'>
                        Chuyến đi cuối tuần
                    </Text>
                    <WeekendTrips />
                </View>

                <View className='p-4'>
                    <Text className='text-2xl font-semibold mb-4'>
                        Điểm đến phổ biến
                    </Text>
                    <PopularDestination />
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default HomeScreen

const styles = StyleSheet.create({})