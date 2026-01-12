import type { RootState } from '@/app/store'
import Close from '@/assets/images/close-small-rounded.png'
import arrowLeft from '@/assets/images/material-symbols--arrow-left.png'
import StatusButton from '@/components/StatusButton'
import StatusPill from '@/components/StatusPill'
import { updateFarmerStatus } from '@/features/farmers/farmerSlice'
import type { Farmer, FarmerStatus } from '@/types/farmer'
import { useRouter } from 'expo-router'
import React, { useState } from 'react'
import { FlatList, Image, Modal, Text, TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useDispatch, useSelector } from 'react-redux'

const AdminScreen = () => {
    const dispatch = useDispatch()
    const router = useRouter()
    const farmers = useSelector((store: RootState) => store.farmers.farmers)

    const [selectedFarmer, setSelectedFarmer] = useState<Farmer | null>(null)

    const updateStatus = (status: FarmerStatus) => {
        if (!selectedFarmer) return

        dispatch(updateFarmerStatus({ id: selectedFarmer.id, status }))

        setSelectedFarmer(null)
    }
    return (
        <SafeAreaView className='flex-1 bg-white px-4 pt-6'>
            <TouchableOpacity onPress={() => router.navigate('/')} className='flex flex-row gap-2 items-center'>
                <Image source={arrowLeft} className='size-8' resizeMode='contain' />
                <Text>Home</Text>
            </TouchableOpacity>
            {/* Header */}
            <Text className='text-2xl font-semibold mt-5'>Registered Farmers</Text>
            <Text className='text-gray-500 mb-8 text-[12px]'>Tap a farmer to update status</Text>

            {/* Empty State */}
            {farmers.length === 0 ? (
                <View className='flex-1 items-center justify-center'>
                    <Text className='text-gray-400'>No farmers registered yet</Text>
                </View>
            ) : (
                <FlatList data={farmers} keyExtractor={(item) => item.id} showsVerticalScrollIndicator={false} renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => setSelectedFarmer(item)} className='border border-gray-200 rounded-xl p-4 mb-3'>
                        <View className='flex-row justify-between items-center'>
                            <View>
                                <Text className='font-semibold text-base'>{item.name}</Text>
                                <Text className='text-gray-500 text-sm'>{item.cropType} • {item.farmSize} Acre</Text>
                            </View>
                            <StatusPill status={item.status} />
                        </View>
                    </TouchableOpacity>
                )} />
            )}

            {/* Status Modal */}
            <Modal visible={!!selectedFarmer} animationType='slide' transparent>
                <View className='flex-1 bg-black/40 justify-end'>
                    <View className='bg-white rounded-t-3xl p-6'>
                        <View className='flex flex-row justify-between items-center'>
                            <Text className='text-lg font-semibold mb-1'>{selectedFarmer?.name}</Text>
                            <TouchableOpacity onPress={() => setSelectedFarmer(null)}>
                                <Image source={Close} className='size-7' resizeMode='contain' />
                            </TouchableOpacity>
                        </View>

                        <View className='flex flex-row justify-center gap-5 my-6'>
                            <StatusButton label='Pending' color='bg-yellow-100' textColor='text-yellow-700' onPress={() => updateStatus('pending')} />

                            <StatusButton label='Approve' color='bg-green-100' textColor='text-green-700' onPress={() => updateStatus('certified')} />

                            <StatusButton label='Decline' color='bg-red-100' textColor='text-red-700' onPress={() => updateStatus('declined')} />
                        </View>
                    </View>
                </View>
            </Modal>
        </SafeAreaView>
    )
}

export default AdminScreen