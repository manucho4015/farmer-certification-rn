import { Farmer, FarmerStatus } from '@/types/farmer'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface FarmerState {
    farmers: Farmer[]
}

const initialState: FarmerState = {
    farmers: []
}

const farmerSlice = createSlice({
    name: 'farmers',
    initialState,
    reducers: {
        addFarmer(state, action: PayloadAction<Farmer>) {
            state.farmers.push(action.payload)
        },
        updateFarmerStatus(state, action: PayloadAction<{ id: string, status: FarmerStatus }>) {
            const farmer = state.farmers.find(f => f.id === action.payload.id)
            if (farmer) {
                farmer.status = action.payload.status
            }
        },
        setFarmers(state, action: PayloadAction<Farmer[]>) {
            state.farmers = action.payload
        }
    }
})

export const { addFarmer, updateFarmerStatus, setFarmers } = farmerSlice.actions
export default farmerSlice.reducer