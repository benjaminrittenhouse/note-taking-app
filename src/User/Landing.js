import * as React from 'react';
import Register from './Register';
import Login from './Login';
import { TouchableOpacity, View, Text } from 'react-native';


export default function Landing({AppState, navigation}){
    return(
        <View>
            <TouchableOpacity onPress ={() => navigation.navigate("Login")}>
                <Text>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text onPress ={() => navigation.navigate("Register")}>Register</Text>
            </TouchableOpacity>
        </View>
        
    );
}


