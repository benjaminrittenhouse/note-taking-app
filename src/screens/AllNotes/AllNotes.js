import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Constants from 'expo-constants'
import GlobalFooter from '../../Footers/GlobalFooter'
import GlobalHeader from '../../Headers/GlobalHeader'
import {db, auth} from '../../../firebase/firebase'
import { doc, onSnapshot, getDoc, collection, getDocs } from "firebase/firestore";

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
        const querySnapshot =  await getDocs(collection(db, "users/"+auth.currentUser.uid+"/notes/"));
        querySnapshot.forEach((doc) => {
            allNotes.push({noteTitle: doc.data().title, noteText: doc.data().desc})
        //    console.log("setting " + doc.data().title)
        });

        setAllNotes(allNotes);
        console.log("Notes List: " + allNotes);
    }
    // load data when screen loads
    const onScreenLoad = () => {
        setAllNotes(allNotes)
        getData();
    }

    // call via useEffect
    useEffect(() => {
        // write your code here, it's like componentWillMount
        onScreenLoad();
    }, [])

    return(
        <View style = {[styles.screen]}>
            <GlobalHeader pageName="All Notes"/>
            <View style={styles.body}>
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