import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import AllNotes from '../screens/AllNotes/AllNotes'
import Note from '../screens/Note/Note'
import CreateNote from '../screens/CreateNote/CreateNote'
import Login from '../User/Login'
import Landing from '../User/Landing'
import Register from '../User/Register'

const Stack = createNativeStackNavigator();

export default function AppNavigation({ AppState }){
    return(
        <NavigationContainer>
            <Stack.Navigator>

                <Stack.Screen name = "Landing" options = {{headerShown: false}}>
                    {props => <Landing {...props} AppState={AppState} />}
                </Stack.Screen>

                <Stack.Screen name = "Register" options = {{headerShown: false}}>
                    {props => <Register {...props} AppState={AppState} />}
                </Stack.Screen>

                <Stack.Screen name = "Login" options = {{headerShown: false}}>
                    {props => <Login {...props} AppState={AppState} />}
                </Stack.Screen>
                
                <Stack.Screen name = "AllNotes" options = {{headerShown: false}}>
                    {props => <AllNotes {...props} AppState={AppState} />}
                </Stack.Screen>

                <Stack.Screen name = "Note" options = {{headerShown: false}}>
                    {props => <Note {...props} AppState={AppState} />}
                </Stack.Screen>

                <Stack.Screen name = "CreateNote" options = {{headerShown: false}}>
                    {props => <CreateNote {...props} AppState={AppState} />}
                </Stack.Screen>
                
            </Stack.Navigator>
        </NavigationContainer>
    );
}