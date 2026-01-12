import type { UserRole } from '@/features/auth/authSlice'
import { setRole } from '@/features/auth/authSlice'
import { useRouter } from 'expo-router'
import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import type { RootState } from '../features/store'

const RoleButton = ({ label, handlePress, role }: { label: string, handlePress: (role: UserRole) => void, role: UserRole }) => (
  <TouchableOpacity onPress={() => handlePress(role)} className='bg-white p-6 rounded-xl shadow mb-4'>
    <Text className='font-bold capitalize'>{label}</Text>
  </TouchableOpacity>
)

const RoleSelectionScreen = () => {
  const router = useRouter()
  const dispatch = useDispatch()
  const { farmerId } = useSelector((store: RootState) => store.auth)

  const handleSelectRole = (roleId: UserRole) => {
    dispatch(setRole(roleId))

    if (roleId === 'farmer') {
      if (farmerId) {
        router.replace('/farmer/dashboard')
      } else {
        router.replace('/farmer/login')
      }
    }

    if (roleId === 'admin') {
      router.replace('/(root)/admin')
    }
  }
  return (
    <View className='flex-1 bg-gray-50 px-6 py-12 justify-center'>
      <Text className='text-3xl font-bold mb-8 text-center'>Select Your Role</Text>

      <RoleButton label='farmer' handlePress={handleSelectRole} role='farmer' />
      <RoleButton label='admin' handlePress={handleSelectRole} role='admin' />
    </View>
  )
}

export default RoleSelectionScreen