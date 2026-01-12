import type { RootState } from "@/app/store";
import arrowLeft from '@/assets/images/material-symbols--arrow-left.png';
import { setFarmerId, setRole } from '@/features/auth/authSlice';
import { Link, useRouter } from 'expo-router';
import React, { useState } from 'react';
import { Image, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useDispatch, useSelector } from "react-redux";

const login = () => {
    const router = useRouter()
    const dispatch = useDispatch()
    const farmers = useSelector((store: RootState) => store.farmers.farmers)

    const [name, setName] = useState('')

    const handleLogin = (name: string) => {
        if (farmers.some(f => f.name.toLowerCase() === name.toLowerCase().trim())) {
            const farmer = farmers.find(f => f.name.toLowerCase() === name.toLowerCase().trim())
            if (farmer) {
                dispatch(setFarmerId(farmer?.id))
                dispatch(setRole('farmer'))
            }
            router.replace('/farmer/dashboard')
        } else {
            alert('Farmer not found')
        }
    }
    return (
        <SafeAreaView className='h-screen relative px-8 flex flex-row items-center bg-white'>
            <TouchableOpacity onPress={() => router.navigate('/')} className='absolute top-[7.5vh] left-8 flex flex-row gap-3 items-center mt-[10px]'>
                <Image source={arrowLeft} className='size-8' resizeMode='contain' />
                <Text>Home</Text>
            </TouchableOpacity>

            <View className='w-full'>
                <TextInput value={name} onChangeText={setName} className='w-full rounded-full border-[1px] px-5' placeholder='Registered Farmer Name' />


                <TouchableOpacity disabled={!name ? true : false} onPress={() => handleLogin(name)} className=' bg-black rounded-full shadow  mt-[25px] flex flex-row justify-center py-3'>
                    <Text className='font-semibold text-white text-[16px]'>Check Status</Text>
                </TouchableOpacity>

                <Text className='mt-[15px] pl-4'>Don't have an account? <Link href='/(root)/farmer/registration' className='text-blue-500'>Register</Link></Text>
            </View>

        </SafeAreaView>
    )
}

export default login