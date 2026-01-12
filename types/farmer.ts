export type FarmerStatus = 'pending' | 'certified' | 'declined'

export interface Farmer {
    id: string
    name: string
    farmSize: number
    cropType: string
    status: FarmerStatus
    updatedAt: string
}