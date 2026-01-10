import { Redirect, Slot } from "expo-router";
import { useSelector } from "react-redux";
import { RootState } from "../store";

export default function RootLayout() {
    const role = useSelector((state: RootState) => state.auth.role)

    if (!role) {
        return <Redirect href='/' />
    }

    return (
        <Slot />
    )
}