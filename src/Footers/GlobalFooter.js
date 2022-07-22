import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'

export default function GlobalFooter({ navigation, AppState }) {

    return(
        <View style = {styles.footerCont}>
            <TouchableOpacity onPress = {() => navigation.navigate("AllNotes")}>
                <Icon name="list" size={30} color="black" />
            </TouchableOpacity>
            <TouchableOpacity onPress = {() => navigation.navigate("CreateNote")}>
                <Icon name="pencil" size={30} color="black" />
            </TouchableOpacity>
        </View>
        
    );
}

const styles = StyleSheet.create({
    footerCont: {
        flex: 1,
        width: '100%',
        justifyContent: 'space-around',
        alignItems: 'center',
        borderTopWidth: .75,
        flexDirection: 'row',
        borderColor: 'gray',
        backgroundColor: 'white'
    }
})