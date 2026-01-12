import { saveAuth } from '@/utils/storage'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export type UserRole = 'farmer' | 'admin' | null

interface AuthState {
    role: UserRole
    farmerId: string | null
    hydrated: boolean
}

const initialState: AuthState = {
    role: null,
    farmerId: null,
    hydrated: false
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setRole(state, action: PayloadAction<UserRole>) {
            state.role = action.payload
        },
        setFarmerId(state, action: PayloadAction<string | null>) {
            state.farmerId = action.payload
            saveAuth({ role: state.role, farmerId: state.farmerId })
        },
        logout(state) {
            state.role = null
            saveAuth({ role: null, farmerId: null })
        },
        setHydrated(state) {
            state.hydrated = true
        }
    }
})

export const { setRole, setFarmerId, logout, setHydrated } = authSlice.actions
export default authSlice.reducer