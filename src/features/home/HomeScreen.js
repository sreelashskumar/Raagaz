import React from "react"
import {
    Button,
    Text,
    View
} from "react-native"
import { useAuth } from "../login/AuthContext"
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
    const { logout } = useAuth()

    return(
        <SafeAreaView style={{ flex: 1 }} edges={["top"]}>
            <View>
            <Text>Home Screen</Text>
            <Button title="Logout" onPress={logout} />
        </View>
        </SafeAreaView>
        
    )
}