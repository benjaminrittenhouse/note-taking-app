import React, { useState, useEffect } from 'react';
import { SafeAreaView, TextInput, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import GlobalFooter from '../../Footers/GlobalFooter'
import CreateHeader from '../../Headers/CreateHeader'
import Constants from 'expo-constants'
import Icon from 'react-native-vector-icons/FontAwesome'
import { collection, addDoc, getFirestore, setDoc, doc} from "firebase/firestore"; 
import {db, auth} from '../../../firebase/firebase'


export default function CreateNote({ navigation, AppState }) {

    const [noteTitle, setNoteTitle] = useState("");
    const [noteDesc, setNoteDesc] = useState("");
    const [height, setHeight] = useState(1);

    function makeid(length) {
        var result           = '';
        var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        var charactersLength = characters.length;
        for ( var i = 0; i < length; i++ ) {
          result += characters.charAt(Math.floor(Math.random() * 
         charactersLength));
       }
       return result;
    }

    // save note in firestore
    async function createNote(noteTitle, noteDesc){
        const d = new Date();
        const rnd = makeid(15);
        await setDoc(doc(db, "users/"+auth.currentUser.uid+"/notes/"+rnd), {
            title: noteTitle,
            desc: noteDesc,
            time: d.getTime(),
            id: rnd
          });

          navigation.navigate("AllNotes")
    }

    // change lineheight onchange
    async function updateDesc(event){
        // somehow know we are over chars per line
    }

    return(
        <View style = {styles.screen}>
            <CreateHeader style={styles.header} AppState={AppState} navigation={navigation}/>
            <SafeAreaView style={styles.body}>
                <TextInput 
                    style={styles.titleInput}
                    onChangeText={text=>setNoteTitle(text)}
                    placeholder="Note Title..."
                    multiline={true}
                />
                <TextInput 
                    style={styles.descInput}
                    onChangeText={text=>setNoteDesc(text)}
                    placeholder="Note details..."
                    multiline={true}
                    numberOfLines={22}
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
        paddingTop: 10,
        paddingLeft: 10,
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