import React, {Component, useState } from 'react';
import { TouchableOpacity, View, Text, StyleSheet, TextInput, Button, Alert, ActivityIndicator} from 'react-native';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
const auth = getAuth();




export default function Register({ navigation, AppState }){
    const [userEmail, setUserEmail] = useState("");
    const [userPassword, setUserPassword] = useState("");
    // Registration Function
    const register = (authenticate, email, password) => {
        console.log("email, pw: " + email + " , " + password);
        createUserWithEmailAndPassword(authenticate, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            navigation.navigate("AllNotes");
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
        })
    }

    return(
    <View>
        <TextInput 
            style={styles.input}
            placeholder="Email"
            onChangeText={text=>setUserEmail(text)}
                />
        <TextInput 
            style={styles.input}
            placeholder="Password"
            onChangeText={text=>setUserPassword(text)}
        />

        <TouchableOpacity onPress={() => register(auth, userEmail, userPassword)}>
            <Text>Register</Text>
        </TouchableOpacity>

        
    </View>
    );
}

const styles = StyleSheet.create({
    input: {
        borderWidth: 3,
        borderRadius: '33px',
    }
})