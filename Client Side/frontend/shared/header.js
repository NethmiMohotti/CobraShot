import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

// Header for the application

export default function Header({ navigation, title}){
    
    const menu = () => {
        navigation.openDrawer();
    }

    return(
        <View style={styles.header}>
            <MaterialIcons name='menu' size={34} color= '#E72D44' onPress={menu} style={styles.icon} />
            <View style={styles.headerTitle}>
              <Text style={styles.headerText}>{ title }</Text>  
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',

    },
    headerText: {
        fontWeight: 'bold',
        fontSize: 30,
        color: '#E72D44'
    },
    icon: {
        position: 'absolute',
        left: 16
    },
    headerTitle: {
        flexDirection: 'row-reverse'
    }
})