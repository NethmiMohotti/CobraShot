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
                                <Image source={require('../assets/images/Nethmi.png')} style = {styles.prfImg}/>
                                <Text style = {styles.prfName}>Nethmi Mohotti</Text>
                                <Text style = {styles.position}>Team Leader</Text>
                                <Text style = {styles.position}>W1830188</Text>
                            </View>

                            <View style = {styles.profileContainer}>
                                <Image source={require('../assets/images/sachiImg.jpg')} style = {styles.prfImg}/>
                                <Text style = {styles.prfName}>Sachithra Malshan</Text>
                                <Text style = {styles.position}>Team Member</Text>
                                <Text style = {styles.position}>w1810004</Text>
                            </View>

                            <View style = {styles.profileContainer}>
                                <Image source={require('../assets/images/malaka.jpg')} style = {styles.prfImg}/>
                                <Text style = {styles.prfName}>Malaka Yasantha</Text>
                                <Text style = {styles.position}>Team Member</Text>
                                <Text style = {styles.position}>w1830176</Text>
                            </View>

                            <View style = {styles.profileContainer}>
                                <Image source={require('../assets/images/sewwandi.png')} style = {styles.prfImg}/>
                                <Text style = {styles.prfName}>Sewwandi Premarathna</Text>
                                <Text style = {styles.position}>Team Member</Text>
                                <Text style = {styles.position}>w1809975</Text>
                            </View>

                            <View style = {styles.profileContainer}>
                                <Image source={require('../assets/images/theekshan.png')} style = {styles.prfImg}/>
                                <Text style = {styles.prfName}>Thenuwan Theekshana</Text>
                                <Text style = {styles.position}>Team Member</Text>
                                <Text style = {styles.position}>w1838860</Text>
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
        color: '#EADEDE',
        fontFamily: 'nunito-regular',
    },
    prfName: {
        fontSize: 14,
        fontFamily: 'poppins-bold',
    },
    position: {
        fontSize: 12,
        fontFamily: 'poppins-regular',
    }

    
});