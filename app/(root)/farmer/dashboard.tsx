import happyFarmer from "@/assets/images/farmer_bro.png";
import sorryBro from "@/assets/images/sorry-bro.png";
import waitingAmico from "@/assets/images/waiting-amico.png";
import { logout } from "@/features/auth/authSlice";
import type { RootState } from "@/features/store";
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import { useRouter } from 'expo-router';
import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useDispatch, useSelector } from "react-redux";



const AttributView = ({ label, value }: { label: string, value: string }) => (
    <View className="flex flex-row gap-5 mt-[5px]">
        <Text className="">{label}:</Text>
        <Text className="capitalize font-semibold">{value}</Text>
    </View>
)

const FarmerCertView = () => {
    const router = useRouter()
    const dispatch = useDispatch()
    const currentFarmerId = useSelector((store: RootState) => store.auth.farmerId)
    const currentFarmer = useSelector((store: RootState) => store.farmers.farmers.find(f => f.id === currentFarmerId))
    dayjs.extend(relativeTime)

    const statusBorderMap = {
        pending: 'border-yellow-500',
        certified: 'border-green-600',
        declined: 'border-red-300',
    }
    const statusTextMap = {
        pending: 'text-yellow-500',
        certified: 'text-green-600',
        declined: ' text-red-600',
    }

    const handleLogout = () => {
        dispatch(logout())
        router.replace(`/farmer/login`)
    }
    return (
        <SafeAreaView className='h-full px-8 bg-white pt-[2.5vh] relative'>
            <View className='flex flex-row justify-between items-center'>
                <Text className='font-semibold text-[16px]'>My Status</Text>
                <Text className='font-medium text-[12px] text-gray-500'>Updated {dayjs(currentFarmer?.updatedAt).fromNow()}</Text>
            </View>
            <View className="flex flex-row justify-center">
                {currentFarmer?.status === 'pending' && <Image source={waitingAmico} className=" h-[50vh] w-[75vw]" resizeMode="contain" />}
                {currentFarmer?.status === 'certified' && <Image source={happyFarmer} className=" h-[50vh] w-[75vw]" resizeMode="contain" />}
                {currentFarmer?.status === 'declined' && <Image source={sorryBro} className=" h-[50vh] w-[75vw]" resizeMode="contain" />}
            </View>

            {currentFarmer && (

                <View className="rounded-lg shadow bg-gray-50 p-5">
                    <View className="flex flex-row justify-between items-center">
                        <Text className="text-[12px] font-light text-gray-600">Certification Status</Text>
                        <View className={`py-1 px-2 rounded-full border-[1px] ${statusBorderMap[currentFarmer.status]}`}>
                            <Text className={`text-[11px] font-light ${statusTextMap[currentFarmer.status]}`}>{currentFarmer.status}</Text>
                        </View>
                    </View>
                    <Text className="font-bold text-[18px] mt-[15px]">{currentFarmer.name}</Text>

                    <AttributView label="Farm Size" value={currentFarmer.farmSize.toString()} />
                    <AttributView label="Crop Type" value={currentFarmer.cropType} />
                </View>
            )}

            <TouchableOpacity onPress={handleLogout} className='absoulute bottom-0 bg-white border-black border-[1px] rounded-full shadow  mt-[25px] flex flex-row justify-center py-3'>
                <Text className='font-semibold text-[16px]'>Logout</Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}

export default FarmerCertView