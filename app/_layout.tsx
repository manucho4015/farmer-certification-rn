import { setFarmerId, setHydrated, setRole } from "@/features/auth/authSlice";
import { setFarmers } from "@/features/farmers/farmerSlice";
import { loadAuth, loadFarmers } from "@/utils/storage";
import { Stack, useRouter } from "expo-router";
import { useEffect } from "react";
import { Provider, useDispatch, useSelector } from 'react-redux';
import './global.css';
import type { RootState } from "./store";
import { store } from './store';

function BootStrap() {
  const dispatch = useDispatch()
  const router = useRouter()
  const { role, farmerId } = useSelector((store: RootState) => store.auth)

  useEffect(() => {
    const hydrate = async () => {
      const farmers = await loadFarmers()
      const auth = await loadAuth()

      dispatch(setFarmers(farmers))
      dispatch(setRole(auth.role))
      dispatch(setFarmerId(auth.farmerId))
      dispatch(setHydrated())
      if (auth.role === 'farmer') {
        if (auth.farmerId) {
          return router.replace('/farmer/dashboard')
        }
        router.replace('/farmer/login')
      }

      if (auth.role === 'admin') {
        router.replace('/(root)/admin')
      }
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
