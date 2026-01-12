import arrowLeft from '@/assets/images/material-symbols--arrow-left.png'
import { setFarmerId } from '@/features/auth/authSlice'
import { addFarmer } from '@/features/farmers/farmerSlice'
import * as Crypto from 'expo-crypto'
import { Link, useRouter } from 'expo-router'
import React, { useState } from 'react'
import { Image, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useDispatch } from 'react-redux'

const Registration = () => {
    const dispatch = useDispatch()
    const router = useRouter()

    const [name, setName] = useState('')
    const [farmSize, setFarmSize] = useState('')
    const [cropType, setCropType] = useState('')

    const handleRgister = () => {
        if (!name || !farmSize || !cropType) {
            alert('Please fill in all fields')
            return
        }

        const farmerId = Crypto.randomUUID()

        dispatch(addFarmer({
            id: farmerId,
            name: name.trim(),
            farmSize: Number(farmSize),
            cropType: cropType.trim(),
            status: 'pending',
            updatedAt: new Date().toISOString()
        }))
        dispatch(setFarmerId(farmerId))

        router.replace('/farmer/dashboard')
    }
    return (
        <SafeAreaView className='h-screen relative px-8 flex flex-row items-center bg-white'>
            <TouchableOpacity onPress={() => router.navigate('/')} className='absolute top-[7.5vh] left-8 flex flex-row gap-3 items-center mt-[10px]'>
                <Image source={arrowLeft} className='size-8' resizeMode='contain' />
                <Text>Home</Text>
            </TouchableOpacity>

            <View className='w-full'>
                <TextInput value={name} onChangeText={setName} className='w-full rounded-full border-[1px] px-5' placeholder='Name' />

                <View className='mt-[25px] flex flex-row justify-between'>
                    <TextInput value={farmSize} onChangeText={setFarmSize} keyboardType='numeric' className='w-[47.5%] rounded-full border-[1px] px-5' placeholder='Farm Size (acres)' />
                    <TextInput value={cropType} onChangeText={setCropType} className='w-[47.5%] rounded-full border-[1px] px-5' placeholder='Crop Type' />
                </View>

                <TouchableOpacity disabled={!name && !farmSize && !cropType ? true : false} onPress={handleRgister} className=' bg-black rounded-full shadow  mt-[25px] flex flex-row justify-center py-3'>
                    <Text className='font-semibold text-white text-[16px]'>Register</Text>
                </TouchableOpacity>

                <Text className='mt-[15px] pl-4'>Already have an account? <Link href='/(root)/farmer/login' className='text-blue-500'>Log In</Link></Text>
            </View>

        </SafeAreaView>
    )
}

export default Registration