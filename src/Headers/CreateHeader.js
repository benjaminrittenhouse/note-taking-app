import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, Image, View, TouchableOpacity } from 'react-native';
import {useRoute} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome'


export default function CreateHeader(props, { navigation, AppState }) {

    return(
        <View style = {[styles.headerCont, styles.shadowProp]}>
            <TouchableOpacity onPress = {() => navigation.goBack(null)} style={styles.iconButton}>
                <Icon style={ styles.icon }name="angle-left" size={40} color="black" />
            </TouchableOpacity>
            <Text style={styles.hText}>{props.pageName}</Text>
        </View>
        
    );
}

const styles = StyleSheet.create({
    headerCont: {
        flex: 1,
        width: '100%',
        paddingLeft: '5%',
        paddingRight: '5%',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        height: '100%'
    },
    shadowProp: {
        shadowColor: '#171717',
        shadowOffset: {width: -2, height: 4},
        shadowOpacity: 0.2,
        shadowRadius: 3,
    },
    icon: {
        position: 'absolute',
        alignItems: 'center',
    },
    iconButton: {
        height: '100%',
        width: '30%',
        position: 'absolute',
        left: 0,
        marginLeft: '5%',
        justifyContent: 'center'
    }
})