import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import GlobalFooter from '../../Footers/GlobalFooter'
import GlobalHeader from '../../Headers/GlobalHeader'
import Constants from 'expo-constants'


export default function Note({ navigation, AppState }) {
    const { note } = AppState;

    return(
        <View style = {styles.screen}>
            <GlobalHeader pageName={note.noteTitle}/>

            <View style={styles.body}>
                <Text>Note Title: { note.noteTitle }</Text>
                <Text>Note Text: { note.noteDesc }</Text>
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
        width: '100%'
    },
})