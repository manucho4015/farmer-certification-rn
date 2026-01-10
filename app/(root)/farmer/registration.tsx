import arrowLeft from '@/assets/images/material-symbols--arrow-left.png'
import { Link, useRouter } from 'expo-router'
import React from 'react'
import { Image, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const Registration = () => {
    const router = useRouter()
    return (
        <SafeAreaView className='h-screen relative px-8 flex flex-row items-center bg-white'>
            <TouchableOpacity onPress={() => router.navigate('/')} className='absolute top-[7.5vh] left-8 flex flex-row gap-3 items-center mt-[10px]'>
                <Image source={arrowLeft} className='size-8' resizeMode='contain' />
                <Text>Back</Text>
            </TouchableOpacity>

            <View className='w-full'>
                <TextInput className='w-full rounded-full border-[1px] px-5' placeholder='Name' />

                <View className='mt-[25px] flex flex-row justify-between'>
                    <TextInput keyboardType='numeric' className='w-[47.5%] rounded-full border-[1px] px-5' placeholder='Farm Size (acres)' />
                    <TextInput className='w-[47.5%] rounded-full border-[1px] px-5' placeholder='Crop Type' />
                </View>

                <TouchableOpacity onPress={() => router.navigate(`/(root)/farmer/123`)} className=' bg-black rounded-full shadow  mt-[25px] flex flex-row justify-center py-3'>
                    <Text className='font-semibold text-white text-[16px]'>Register</Text>
                </TouchableOpacity>

                <Text className='mt-[15px] pl-4'>Already have an account? <Link href='./login' className='text-blue-500'>Log In</Link></Text>
            </View>

        </SafeAreaView>
    )
}

export default Registration