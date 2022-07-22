import * as React from 'react';
import Register from './Register';
import Login from './Login';
import { TouchableOpacity, View, Text, StyleSheet, Image } from 'react-native';
import Constants from 'expo-constants'



export default function Landing({AppState, navigation}){
    return(
        <View style={styles.view}>
            <View style={styles.heading}>
                <Text style={styles.title}>
                    Noted
                </Text>
                <Image
                    style={styles.logo}
                    source={require('../../assets/logo.png')}
                    // https://www.flaticon.com/free-icons/galaxy-note-3" Galaxy note 3 icons created by feen
                />
            </View>
            <Text style={styles.desc}>
                    never forget a thing!
            </Text>
            
            <TouchableOpacity style={styles.button} onPress ={() => navigation.navigate("Login")}>
                <Text style={styles.btnText}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress ={() => navigation.navigate("Register")}>
                <Text style={styles.btnText}>Register</Text>
            </TouchableOpacity>
        </View>
        
    );
}

const styles = StyleSheet.create({
    title: {
        fontSize: 45,
        alignContent: 'center',
        fontWeight: 'bold',
        marginBottom: 10
    },
    view: {
        flex: 1,
        alignContent: 'center',
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {
        borderWidth: 1,
        borderRadius: '33px',
        margin: 10,
    },
    btnText: {
        margin: 10,
        fontSize: 18,
    },
    logo: {
        height: 15,
        width: 15,
    },
    heading: {
        flexDirection: 'row',
        height: '5%',
        alignContent: 'center',
        justifyContent: 'center'
    },
    desc: {
        fontSize: 15,
        fontStyle: 'italic',
        marginTop: 20,
        marginBottom: 20,
    }
});


