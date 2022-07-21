import React, { useState, useEffect } from 'react';
import { SafeAreaView, TextInput, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import GlobalFooter from '../../Footers/GlobalFooter'
import CreateHeader from '../../Headers/CreateHeader'
import Constants from 'expo-constants'


export default function CreateNote(props, { navigation, AppState }) {

    return(
        <View style = {styles.screen}>
            <CreateHeader AppState={AppState} navigation={navigation} pageName="Create new note" />
            <SafeAreaView style={styles.body}>
                <TextInput 
                    style={styles.titleInput}
                    //onChangeText={onChangeTitle}
                    //value={title}
                    placeholder="Note Title..."
                />
                <TextInput 
                    style={styles.descInput}
                    //onChangeText={onChangeDesc}
                    //value={desc}
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
    titleInput: {
        fontSize: 25,
    }, 
    descInput: {

    }
})