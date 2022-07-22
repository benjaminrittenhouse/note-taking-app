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
        setNote(element);
        // go to note screen
        navigation.navigate('Note');
    }

    // fetch user notes
    async function getData(){
        console.log("getting data...");
        const locallist = [];
        const querySnapshot =  await getDocs(collection(db, "users/"+auth.currentUser.uid+"/notes/"));
        querySnapshot.forEach((doc) => {
            locallist.push({noteTitle: doc.data().title, noteText: doc.data().desc});
        //    console.log("setting " + doc.data().title)
        });

        setAllNotes(locallist);
        console.log("Notes List: " + allNotes);

        //return = () => 
    }
    // load data when screen loads
    const onScreenLoad = () => {
        // setAllNotes(allNotes)
       // getData();
    }

    async function test(){
        console.log("users -> " + auth.currentUser.uid);
        const docRef = collection(db, "users");
        console.log(docRef)
    }

    // call via useEffect
    useEffect(() => {
        const q = query(collection(db, "users", auth.currentUser.uid, "notes"));
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
        const notes = [];
        querySnapshot.forEach((doc) => {
            console.log(doc.data());
            notes.push({noteTitle: doc.data().title, noteDesc: doc.data().desc, noteTime: doc.data().time});
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