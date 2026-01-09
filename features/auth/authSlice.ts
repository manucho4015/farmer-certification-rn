import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export type UserRole = 'farmer' | 'admin' | null

interface AuthState {
    role: UserRole
}

const initialState: AuthState = {
    role: null
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setRole(state, action: PayloadAction<UserRole>) {
            state.role = action.payload
        },
        logout(state) {
            state.role = null
        }
    }
})

export const { setRole, logout } = authSlice.actions
export default authSlice.reducer