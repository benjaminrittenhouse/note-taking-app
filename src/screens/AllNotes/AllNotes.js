import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Constants from 'expo-constants'
import GlobalFooter from '../../Footers/GlobalFooter'
import GlobalHeader from '../../Headers/GlobalHeader'

export default function Home({ navigation, AppState }) {
    const { allNotes, setNote } = AppState;

    const handlePress = (element) => {
        // set the value of note to whatever they click on
        setNote(element);

        // go to note screen
        navigation.navigate('Note');
    }

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