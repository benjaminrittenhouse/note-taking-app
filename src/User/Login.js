import React, {Component, useState } from 'react';
import { TouchableOpacity, View, Text, StyleSheet, TextInput, Button, Alert, ActivityIndicator} from 'react-native';
import firebase from '../../firebase/firebase'
import AllNotes from '../screens/AllNotes/AllNotes'

import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
const auth = getAuth();




export default function Login({ navigation, AppState }){
    const [userEmail, setUserEmail] = useState("");
    const [userPassword, setUserPassword] = useState("");
    // Registration Function
    const login = (authenticate, email, password) => {
        console.log("email, pw: " + email + " , " + password);
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            navigation.navigate("AllNotes");
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
        });
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

        <TouchableOpacity onPress={() => login(auth, userEmail, userPassword)}>
            <Text>Log In</Text>
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