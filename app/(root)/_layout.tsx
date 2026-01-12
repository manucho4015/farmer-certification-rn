import { Slot } from "expo-router";
import { ActivityIndicator, View } from "react-native";
import { useSelector } from "react-redux";
import { RootState } from "../store";

export default function RootLayout() {
    const { role, hydrated } = useSelector((state: RootState) => state.auth)

    if (!hydrated) {
        return (
            <View className="flex-1 items-center justify-center bg-white">
                <ActivityIndicator size='large' />
            </View>
        )
    }

    return (
        <Slot />
    )
}