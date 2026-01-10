import happyFarmer from "@/assets/images/farmer_bro.png";
import { useRouter } from 'expo-router';
import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const AttributView = ({ label, value }: { label: string, value: string }) => (
    <View className="flex flex-row gap-5 mt-[5px]">
        <Text className="">{label}:</Text>
        <Text className="capitalize font-semibold">{value}</Text>
    </View>
)

const FarmerCertView = () => {
    const router = useRouter()

    const handleLogout = () => {
        router.navigate(`/(root)/farmer/registration`)
    }
    return (
        <SafeAreaView className='h-full px-8 bg-white pt-[2.5vh] relative'>
            <View className='flex flex-row justify-between items-center'>
                <Text className='font-semibold text-[16px]'>My Status</Text>
                <Text className='font-medium text-[12px] text-gray-500'>Updated 2mins ago</Text>
            </View>
            <View className="flex flex-row justify-center">
                <Image source={happyFarmer} className=" h-[50vh] w-[75vw]" resizeMode="contain" />
            </View>

            <View className="rounded-lg shadow bg-gray-50 p-5">
                <View className="flex flex-row justify-between items-center">
                    <Text className="text-[12px] font-light text-gray-600">Certification Status</Text>
                    <View className="py-1 px-2 rounded-full border-[1px] border-green-600">
                        <Text className="text-[11px] font-light text-green-600">Certified</Text>
                    </View>
                </View>
                <Text className="font-bold text-[18px] mt-[15px]">Emmanuel Ochieng</Text>

                <AttributView label="Farm Size" value="1 acre" />
                <AttributView label="Frop Type" value="Maize" />
            </View>

            <TouchableOpacity onPress={handleLogout} className='absoulute bottom-0 bg-white border-black border-[1px] rounded-full shadow  mt-[25px] flex flex-row justify-center py-3'>
                <Text className='font-semibold text-[16px]'>Logout</Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}

export default FarmerCertView