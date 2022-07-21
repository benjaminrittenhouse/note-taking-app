import React, { useState, useEffect } from 'react';
import { SafeAreaView, TextInput, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import GlobalFooter from '../../Footers/GlobalFooter'
import GlobalHeader from '../../Headers/GlobalHeader'
import Constants from 'expo-constants'


export default function CreateNote({ navigation, AppState }) {
    const { note } = AppState;

    return(
        <View style = {styles.screen}>
            <GlobalHeader pageName="Create new note..."/>

            <SafeAreaView>
                <TextInput 
                    style={styles.input}
                    onChangeText={onChangeTitle}
                    value={title}
                    placeholder="Note Title..."
                />
                <TextInput 
                    style={styles.input}
                    onChangeText={onChangeDesc}
                    value={desc}
                    placeholder="Note details..."
                />
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
})