import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';
import Constants from 'expo-constants'
import GlobalFooter from '../../Footers/GlobalFooter'
import GlobalHeader from '../../Headers/GlobalHeader'
import {db, auth} from '../../../firebase/firebase'
import { doc, onSnapshot, collection, getDocs, getDoc, query } from "firebase/firestore";

export default function Home({ navigation, AppState }) {
    const { allNotes, setNote, setAllNotes } = AppState;

    const handlePress = (element) => {
        // set the value of note to whatever they click on
        console.log("element: " + element);
        setNote(element);
        // go to note screen
        navigation.navigate('Note');
    }

    // fetch user notes
    // call via useEffect
    useEffect(() => {
        const q = query(collection(db, "users", auth.currentUser.uid, "notes"));
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
        const notes = [];
        querySnapshot.forEach((doc) => {
            notes.push({noteTitle: doc.data().title, noteDesc: doc.data().desc, noteTime: doc.data().time, id: doc.data().id});
        });

        notes.sort((a,b) => b.noteTime - a.noteTime);

        setAllNotes(notes)
    });
    }, [])

    return(
        <View style = {[styles.screen]}>
            
            <GlobalHeader pageName="All Notes"/>
                <View style={styles.body}>
                <ScrollView>
                    {  allNotes.map((e, i) => {
                        return(
                            <TouchableOpacity 
                                key = {i} 
                                onPress={() => handlePress(e)}
                                style={[styles.noteCont, styles.shadowProp]}
                            >

                                <Text>{ e.noteTitle }</Text>

                            </TouchableOpacity>
                        );
                    }) }
                    </ScrollView>
                </View>
            <GlobalFooter AppState={AppState} navigation = {navigation}/>
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
    noteCont: {
        margin: 20,
        padding: 20,
        paddingLeft: 10,
        borderWidth: .25,
        borderColor: 'gray'
    },
    shadowProp: {
        shadowColor: '#171717',
        shadowOffset: {width: -2, height: 4},
        shadowOpacity: 0.2,
        shadowRadius: 3,
      },
})