import { configureStore } from '@reduxjs/toolkit'
import authReducer from '../features/auth/authSlice'
import farmerReducer from '../features/farmers/farmerSlice'

export const store = configureStore({
    reducer: {
        auth: authReducer,
        farmers: farmerReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch