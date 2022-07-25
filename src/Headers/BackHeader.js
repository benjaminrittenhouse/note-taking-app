import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, Image, View, TouchableOpacity } from 'react-native';
import {useRoute} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome'


export default function BackHeader({ navigation, AppState }) {

    return(
        <View style = {[styles.headerCont, styles.shadowProp]}>
            <TouchableOpacity onPress = {() => navigation.goBack()} style={styles.iconButton}>
                <Icon style={ styles.icon }name="angle-left" size={40} color="black" />
            </TouchableOpacity>
        </View>
        
    );
}

const styles = StyleSheet.create({
    headerCont: {
        width: '100%',
        paddingLeft: '5%',
        paddingRight: '5%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    icon: {
        position: 'absolute',
        alignItems: 'center',
    },
    iconButton: {
        position: 'absolute',
        left: 0,
        marginLeft: '5%',
        justifyContent: 'center',
        top: -75
    }
})