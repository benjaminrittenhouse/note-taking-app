import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native';
import GlobalFooter from '../../Footers/GlobalFooter'
import GlobalHeader from '../../Headers/GlobalHeader'
import Constants from 'expo-constants'
import { doc, onSnapshot, collection, getDocs, getDoc, query, updateDoc } from "firebase/firestore";
import {db, auth} from '../../../firebase/firebase'




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
    const washingtonRef = doc(db, "users", auth.currentUser.uid, "notes", note.id);

    await updateDoc(washingtonRef, {
        title: event.target.value
    });
  };

    async function updateDesc(event){
        const washingtonRef = doc(db, "users", auth.currentUser.uid, "notes", note.id);

        await updateDoc(washingtonRef, {
            desc: event.target.value
        });
    }

    return(
        <View style = {styles.screen}>
            <GlobalHeader />

            <View style={styles.body}>
                <TextInput style={styles.noteTitle} defaultValue={note.noteTitle} onChange={updateTitle}/>
                <TextInput style={styles.noteDesc} defaultValue={note.noteDesc} onChange={updateDesc}/>
                
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
    }, 
    noteDesc: {
        fontSize: 15,

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