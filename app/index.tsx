import React from "react";
import {
  View
} from "react-native"
import { SafeAreaView } from "react-native-safe-area-context";
import { AuthProvider, useAuth } from "../src/features/login/AuthContext";
import LoginScreen from "../src/features/login/LoginScreen";
import RootTabs from "../src/features/root/RootTabs";

function Root() {
  const { isLoggedIn } = useAuth()

  return(
    <View style={{ flex: 1 }}>
      {isLoggedIn ? <RootTabs /> : <LoginScreen />}
    </View>
  )
}

export default function Index() {
  return(
    <AuthProvider>
      <Root />
    </AuthProvider>
  )
}