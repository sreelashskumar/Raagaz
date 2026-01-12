import React, { useState } from "react";
import {
    Alert,
    KeyboardAvoidingView,
    Platform,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useAuth } from "./AuthContext";
import { validateLogin } from "./LoginHelper";

export default function LoginScreen() {
    const {login} = useAuth()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const onLoginPress = () => {
        const result = validateLogin(email, password);
    
        if (!result.isValid) {
          Alert.alert("Error", result.error);
          return;
        }
    
        login()
    };
    
    return(
        <SafeAreaView style={{ flex: 1 }}>
            <KeyboardAvoidingView  
            style={{ flex: 1 }}
            behavior={Platform.OS === "ios" ? "padding" : "height"}>
                <ScrollView style={{ flex: 1 }}
                scrollEnabled={Platform.OS !== "ios"}
                contentContainerStyle={ styles.scrollContent }
                keyboardShouldPersistTaps="handled">
                    <View style={styles.container}>
                        <Text style={styles.title}>Login</Text>

                        <TextInput 
                        placeholder="Email"
                        keyboardType="email-address"
                        style={styles.input} 
                        value={email}
                        onChangeText={setEmail} />

                        <TextInput 
                        placeholder="Password"
                        secureTextEntry 
                        style={styles.input}
                        value={password}
                        onChangeText={setPassword} />

                        <TouchableOpacity 
                        style={styles.button}
                        onPress={onLoginPress}>
                            <Text style={styles.buttonText}>Login</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
        </KeyboardAvoidingView>
    </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        padding: 20,
        backgroundColor: "#ffffff"
    },

    title: {
        fontSize: 28,
        fontWeight: "bold",
        textAlign: "center",
        marginBottom: 32,
        color: "#000000"
    },

    input: {
        height: 48,
        borderWidth: 1,
        borderColor: "#cccccc",
        borderRadius: 8,
        paddingHorizontal: 12,
        fontSize: 16,
        marginBottom: 16,
        backgroundColor: "#ffffff",
    },

    button: {
        height: 48,
        backgroundColor: "#364CBB",
        borderRadius: 8,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 8,
    },

    buttonText: {
        color: "#ffffff",
        fontSize: 16,
        fontWeight: "600",
    },

    scrollContent: { 
        flexGrow: 1, 
        paddingBottom: 24 
    },
})