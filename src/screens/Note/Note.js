import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, TextInput, View, TouchableOpacity, Alert} from 'react-native';
import GlobalFooter from '../../Footers/GlobalFooter'
import GlobalHeader from '../../Headers/GlobalHeader'
import Constants from 'expo-constants'
import { doc, onSnapshot, collection, getDocs, getDoc, query, updateDoc, deleteDoc } from "firebase/firestore";
import {db, auth} from '../../../firebase/firebase'
import Icon from 'react-native-vector-icons/FontAwesome'





export default function Note({ navigation, AppState }) {
    const { note } = AppState;

    // update note as they edit it
    async function updateTitle(t){
        const washingtonRef = doc(db, "users", auth.currentUser.uid, "notes", note.id);

        await updateDoc(washingtonRef, {
            title: t
        });
    }


  async function updateTitle(event){
    const ref = doc(db, "users", auth.currentUser.uid, "notes", note.id);

    await updateDoc(ref, {
        title: event.target.value
    });
  };

    async function updateDesc(event){
        const ref = doc(db, "users", auth.currentUser.uid, "notes", note.id);

        await updateDoc(ref, {
            desc: event.target.value
        });
    }

    async function deleteNote(){
        const ref = doc(db, "users", auth.currentUser.uid, "notes", note.id);

        await deleteDoc(ref)

        alert('Note Deleted');
        navigation.navigate("AllNotes")
    }

    return(
        <View style = {styles.screen}>
            <GlobalHeader />

            <View style={styles.body}>
                <TextInput style={styles.noteTitle} defaultValue={note.noteTitle} onChange={updateTitle}/>
                <TextInput style={styles.noteDesc} defaultValue={note.noteDesc} onChange={updateDesc}/>
                
            </View>

            <View style={styles.icons}>
                <TouchableOpacity style={styles.plus} onPress = {() => navigation.navigate("AllNotes")}>
                    <Icon name="check" size={25} color="black" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.plus2} onPress = {() => deleteNote()}>
                    <Icon name="trash" size={25} color="black" />
                </TouchableOpacity>
            </View>
           
            <GlobalFooter AppState = {AppState} navigation = {navigation} />
        </View>
        
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff'
    },
    body: {
        flex: 8,
        width: '100%',
        marginLeft: 30,
        marginTop: 10,
        marginRight: 30,
    },
    noteTitle: {
        fontSize: 25,
        fontWeight: "bold",
        paddingLeft: 15
    }, 
    noteDesc: {
        fontSize: 15,
        paddingLeft: 15,
        paddingTop: 10,
    },
    have: {
        margin: 10,
        marginTop: 20,
    }, 
    haveText: {
        fontSize: 15,
        color: '#3486eb',
    },
    plus: {
        marginBottom: 60,
        marginRight: 15,
    },
    plus2: {
        marginBottom: 60,
        marginLeft: 15,
    },
    icons: {
        flex: 1,
        flexDirection: 'row',
    }
})