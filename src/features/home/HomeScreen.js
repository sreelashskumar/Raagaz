import React from "react"
import {
    Button,
    Text,
    View
} from "react-native"
import { useAuth } from "../login/AuthContext"

export default function HomeScreen() {
    const { logout } = useAuth()

    return(
        <View>
            <Text>Home Screen</Text>
            <Button title="Logout" onPress={logout} />
        </View>
    )
}