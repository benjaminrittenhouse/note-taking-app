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
    <View style={styles.view}>
        <Text style={styles.text}>
            Who are you?
        </Text>
        <TextInput 
            style={styles.input}
            placeholder="email"
            onChangeText={text=>setUserEmail(text)}
            labelFontSize={50}
            fontSize={50}
            />
        <TextInput 
            style={styles.input}
            placeholder="password"
            onChangeText={text=>setUserPassword(text)}
            labelFontSize={50}
            fontSize={50}
            secureTextEntry={true}
            />

        <TouchableOpacity style={styles.button} onPress={() => login(auth, userEmail, userPassword)}>
            <Text style={styles.login}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.have} onPress={() => navigation.navigate("Register")}>
                <Text style={styles.haveText}>Don't have an account? Click here</Text>
        </TouchableOpacity>

        
    </View>
    );
}

const styles = StyleSheet.create({
    view: {
        flex: 1,
        alignContent: 'center',
        justifyContent: 'center',
        alignItems: 'center',
    },
    input: {
        alignContent: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderRadius: '33px',
        fontsize: 50,
        lineHeight: 40,
        width: '50%',
        margin: 20,
        padding: 10,
        paddingLeft: 20,
    },
    login: {
        fontSize: 20,
        margin: 15,
        paddingLeft: 10,
        paddingRight: 10,
        fontWeight: 'bold',
    },
    button: {
        borderWidth: 3,
        borderRadius: '33px',
        margin: 10,
        marginTop: 20,
    },
    text: {
        fontSize: 25,
        marginBottom: 10,
    },

    have: {
        margin: 10,
        marginTop: 20,
    }, 
    haveText: {
        fontSize: 15,
        color: '#3486eb',
    }
})