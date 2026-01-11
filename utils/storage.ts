import type { UserRole } from '@/features/auth/authSlice'
import type { Farmer } from '@/types/farmer'
import AsyncStorage from '@react-native-async-storage/async-storage'

const FARMERS_KEY = 'FARMERS'
const AUTH_KEY = 'AUTH'

// Farmers
export const saveFarmers = async (farmers: Farmer[]) => {
    try {
        await AsyncStorage.setItem(FARMERS_KEY, JSON.stringify(farmers))
    } catch (error) {
        console.error('Failed to save farmers', error)
    }
}

export const loadFarmers = async (): Promise<Farmer[]> => {
    try {
        const data = await AsyncStorage.getItem(FARMERS_KEY)
        return data ? JSON.parse(data) : []
    } catch (error) {
        console.error('Failed to load farmers', error)
        return []
    }
}

// Auth
export const saveAuth = async (auth: {
    role: UserRole, farmerId: string | null
}) => {
    try {
        await AsyncStorage.setItem(AUTH_KEY, JSON.stringify(auth))
    } catch (error) {
        console.error('Failed to save auth', error)
    }
}

export const loadAuth = async (): Promise<{ role: UserRole, farmerId: string | null }> => {
    try {
        const data = await AsyncStorage.getItem(AUTH_KEY)
        return data ? JSON.parse(data) : { role: null, farmerId: null }
    } catch (error) {
        console.error('Failed to load auth', error)
        return { role: null, farmerId: null }
    }
}