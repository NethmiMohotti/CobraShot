import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function FlatButton({ text, onPress}){
    return(
        <TouchableOpacity onPress={onPress}>
            <View style={styles.button}>
                <Text style={styles.buttonText}>{ text }</Text>
            </View>
        </TouchableOpacity>

    )
}

const styles = StyleSheet.create({
    button: {
        borderRadius: 8,
        paddingVertical: 19,
        paddingHorizontal: 25,
        backgroundColor: '#DC080F',
    },
    buttonText: {
        color: '#fff',
        fontWeight: '200',
        textTransform: 'uppercase',
        fontSize: 16,
        textAlign: 'center',
        fontFamily: 'poppins-bold',
    }
})