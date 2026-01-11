import React from 'react'
import { Text, TouchableOpacity } from 'react-native'

const StatusButton = ({ label, onPress, color, textColor }: { label: string, onPress: () => void, color: string, textColor: string }) => {
    return (
        <TouchableOpacity onPress={onPress} className={`rounded-xl py-3 items-center ${color}`}>
            <Text className={`font-semibold ${textColor}`}>{label}</Text>
        </TouchableOpacity>
    )
}

export default StatusButton