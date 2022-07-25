import React, {Component, useState } from 'react';
import { TouchableOpacity, View, Text, StyleSheet, TextInput, Button, Alert, ActivityIndicator} from 'react-native';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
const auth = getAuth();
import BackHeader from '../Headers/BackHeader'



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
        <View style={styles.view}>
            <Text style={styles.text}>
                Create an account.
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
    
            <TouchableOpacity style={styles.button} onPress={() => register(auth, userEmail, userPassword)}>
                <Text style={styles.login}>Register</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.have} onPress={() => navigation.navigate("Login")}>
                <Text style={styles.haveText}>Have an account? Click here</Text>
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
    header: {
        height: '10%'
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