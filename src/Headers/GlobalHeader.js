import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, Image, View, TouchableOpacity } from 'react-native';
import {useRoute} from '@react-navigation/native';


export default function GlobalHeader(props, { navigation, AppState }) {
    
    const route = useRoute();
    const [header, setHeader] = useState(route.name);

    return(
        <View style = {[styles.headerCont, styles.shadowProp]}>
            <Image
                style={styles.logo}
                source={require('../../assets/logo.png')}
                // https://www.flaticon.com/free-icons/galaxy-note-3" Galaxy note 3 icons created by feen
            />
            <Text>{props.pageName}</Text>
        </View>
        
    );
}

const styles = StyleSheet.create({
    headerCont: {
        flex: 1,
        width: '100%',
        paddingLeft: '5%',
        paddingRight: '5%',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row'
    },
    shadowProp: {
        shadowColor: '#171717',
        shadowOffset: {width: -2, height: 4},
        shadowOpacity: 0.2,
        shadowRadius: 3,
    },
    logo: {
        height: 30,
        width: 30,
    },
})