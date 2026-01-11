import { FarmerStatus } from '@/types/farmer'
import React from 'react'
import { Text, View } from 'react-native'

const StatusPill = ({ status }: { status: FarmerStatus }) => {
    const map = {
        pending: 'bg-yellow-100 text-yellow-700',
        certified: 'bg-green-100 text-green-700',
        declined: 'bg-red-100 text-red-700',
    }
    return (
        <View className={`px-3 py-1 rounded-full ${map[status]}`}>
            <Text className='text-xs font-medium capitalize'>{status}</Text>
        </View>
    )
}

export default StatusPill