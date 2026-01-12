import { Farmer, FarmerStatus } from '@/types/farmer'
import { saveFarmers } from '@/utils/storage'
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
            saveFarmers(state.farmers)
        },
        updateFarmerStatus(state, action: PayloadAction<{ id: string, status: FarmerStatus }>) {
            const farmer = state.farmers.find(f => f.id === action.payload.id)
            if (farmer) {
                farmer.status = action.payload.status
                farmer.updatedAt = new Date().toISOString()
                saveFarmers(state.farmers)
            }
        },
        setFarmers(state, action: PayloadAction<Farmer[]>) {
            state.farmers = action.payload
            saveFarmers(state.farmers)
        }
    }
})

export const { addFarmer, updateFarmerStatus, setFarmers } = farmerSlice.actions
export default farmerSlice.reducer