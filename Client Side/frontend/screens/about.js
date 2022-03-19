import React from 'react';
import { StyleSheet, View, Text, ImageBackground, SafeAreaView, Image, ScrollView} from 'react-native';
import { globalStyles } from '../styles/globalStyles';

export default function About() {
    return(
        <ImageBackground source = {require('../assets/images/commonbg.png')} style = {globalStyles.bgImageContainer}>
            <ScrollView>
                <View>

                    <Text style = {styles.about}>Design specially for hikers,
                        CobraShot is a snake identification application developed by "Binary Architects"
                        for the University of Westminster's BSc Computer Science/ BEng Software Engineering second
                        year Software Development group project.</Text>

                    <SafeAreaView style = {styles.scrollView}>
                        <ScrollView horizontal = {true}>

                            <View style = {styles.profileContainer}>
                                <Image source={require('../assets/images/sachiImg.jpg')} style = {styles.prfImg}/>
                                <Text style = {styles.prfName}>Nethmi Mohottiarachchi</Text>
                                <Text style = {styles.position}>Team Leader</Text>
                            </View>

                            <View style = {styles.profileContainer}>
                                <Image source={require('../assets/images/sachiImg.jpg')} style = {styles.prfImg}/>
                                <Text style = {styles.prfName}>Sachithra Malshan</Text>
                                <Text style = {styles.position}>Team Member</Text>
                            </View>

                            <View style = {styles.profileContainer}>
                                <Image source={require('../assets/images/sachiImg.jpg')} style = {styles.prfImg}/>
                                <Text style = {styles.prfName}>Malaka</Text>
                                <Text style = {styles.position}>Team Member</Text>
                            </View>

                            <View style = {styles.profileContainer}>
                                <Image source={require('../assets/images/sachiImg.jpg')} style = {styles.prfImg}/>
                                <Text style = {styles.prfName}>Theekshana</Text>
                                <Text style = {styles.position}>Team Member</Text>
                            </View>

                            <View style = {styles.profileContainer}>
                                <Image source={require('../assets/images/sachiImg.jpg')} style = {styles.prfImg}/>
                                <Text style = {styles.prfName}>Sewwandi</Text>
                                <Text style = {styles.position}>Team Member</Text>
                            </View>

                        </ScrollView>
                    </SafeAreaView>

                </View>
            </ScrollView>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    scrollView : {
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'transparent'
    },
    prfImg : {
        marginTop: 20,
        marginBottom: 10,
        width: 100,
        height: 100,
        borderRadius: 50,
    },
    profileContainer : {
        margin: 50,
        width: 200,
        height: 200,
        backgroundColor: '#ECCFD0',
        borderRadius: 15,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 4
        },
        shadowOpacity: 0.32,
        shadowRadius: 5.46,
        elevation: 9
    
    },
    about: {
        margin: 30,
        fontSize: 14,
        color: '#EADEDE'
    },
    prfName: {
        fontSize: 14,
    },
    position: {
        fontSize: 12,
    }

    
});