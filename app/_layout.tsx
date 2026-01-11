import { setFarmerId, setHydrated, setRole } from "@/features/auth/authSlice";
import { setFarmers } from "@/features/farmers/farmerSlice";
import { loadAuth, loadFarmers } from "@/utils/storage";
import { Stack } from "expo-router";
import { useEffect } from "react";
import { Provider, useDispatch } from 'react-redux';
import './global.css';
import { store } from './store';

function BootStrap() {
  const dispatch = useDispatch()

  useEffect(() => {
    const hydrate = async () => {
      const farmers = await loadFarmers()
      const auth = await loadAuth()

      dispatch(setFarmers(farmers))
      dispatch(setRole(auth.role))
      dispatch(setFarmerId(auth.farmerId))
      dispatch(setHydrated())
    }
    hydrate()
  }, [])

  return <Stack screenOptions={{ headerShown: false }} />
}

export default function RootLayout() {
  return (
    <Provider store={store}>
      <BootStrap />
    </Provider>
  );
}
