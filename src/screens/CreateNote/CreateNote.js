import React, { useState, useEffect } from 'react';
import { SafeAreaView, TextInput, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import GlobalFooter from '../../Footers/GlobalFooter'
import CreateHeader from '../../Headers/CreateHeader'
import Constants from 'expo-constants'
import Icon from 'react-native-vector-icons/FontAwesome'
import { collection, addDoc, getFirestore, setDoc, doc} from "firebase/firestore"; 
import {db, auth} from '../../../firebase/firebase'


export default function CreateNote({ navigation, AppState }) {

    async function createNote(noteTitle, noteDesc){
            await addDoc(doc(db, "users", auth.currentUser.uid, "notes"), {
                title: noteTitle,
                desc: noteDesc
              });
    }

    const [noteTitle, setNoteTitle] = useState("");
    const [noteDesc, setNoteDesc] = useState("");

    return(
        <View style = {styles.screen}>
            <CreateHeader style={styles.header} AppState={AppState} navigation={navigation}/>
            <SafeAreaView style={styles.body}>
                <TextInput 
                    style={styles.titleInput}
                    onChangeText={text=>setNoteTitle(text)}
                    placeholder="Note Title..."
                />
                <TextInput 
                    style={styles.descInput}
                    onChangeText={text=>setNoteDesc(text)}
                    placeholder="Note details..."
                />

            <TouchableOpacity style={styles.plus} onPress = {() => createNote(noteTitle, noteDesc)}>
                <Icon name="plus" size={25} color="black" />
            </TouchableOpacity>
            </SafeAreaView>

            <GlobalFooter AppState = {AppState} navigation = {navigation}/>
        </View>
        
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: Constants.statusBarHeight,
        backgroundColor: '#fff'
    },
    body: {
        flex: 8,
        width: '100%'
    },
    titleInput: {
        fontSize: 25,
        marginTop: 10,
        marginLeft: 10,
    }, 
    descInput: {
        marginTop: 10,
        marginLeft: 10,
    },
    header: {
        fontSize: 50,
        fontColor: 'red',
    },
    plus: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 50,
    }
})