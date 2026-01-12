import React from "react";
import {
    Text,
    View
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function ProfileScreen() {
    return(
        <SafeAreaView style={{ flex: 1 }} edges={["top"]}>
            <View style={{ flex: 1 }}>
            <Text>Profile Screen</Text>
        </View>
        </SafeAreaView>
    )
}