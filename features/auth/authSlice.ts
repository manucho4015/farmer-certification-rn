import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export type UserRole = 'farmer' | 'admin' | null

interface AuthState {
    role: UserRole
    farmerId: string | null
}

const initialState: AuthState = {
    role: null,
    farmerId: null
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
        },
        logout(state) {
            state.role = null
        }
    }
})

export const { setRole, setFarmerId, logout } = authSlice.actions
export default authSlice.reducer