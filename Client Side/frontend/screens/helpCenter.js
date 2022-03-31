import React from "react";
import { StyleSheet, View, Text, ImageBackground , Linking, Button, ScrollView} from 'react-native';
import { globalStyles } from '../styles/globalStyles';


export default function helpCenter(){
    return(

        <ImageBackground source={require('../assets/images/commonbg.png')} style={globalStyles.bgImageContainer}>
            <ScrollView>
            <View style={styles.view}>
                <Text style = {styles.questionType}>General Questions</Text>
                    <Text style = {styles.question}>What is CobraShot?</Text>
                    <Text style = {styles.answer}>
                        CobraShot, a mobile application that ill give the user identification of a snake and how
                        to treat its poison.It can identify snakes by their snaps.It taps into thousand of records
                        within our database to find out what snake it is that you most likely encounted in the 
                        vicinity of where you saw the bird.
                    </Text>

                    <Text style = {styles.question}>How does CobraShot works?</Text>
                    <Text style = {styles.answer}>
                        CobraShot will present you with accurate information about the snakes you just saw, 
                        which has been gathered from reputable and well-known internet sources.
                    </Text>

                    <Text style = {styles.question}>Do I need to have a Internet Connection?</Text>
                    <Text style = {styles.answer}>Yes, you have to have a working internet connection to use CobraShot</Text>

            </View>
            </ScrollView>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    answer:{
        fontSize: 14,
        marginBottom: 10,
        color: '#F1DFDF',
        fontFamily: 'nunito-regular',
      },
      question:{
        fontSize: 16,
        fontWeight:'bold',
        marginBottom: 10,
        color: '#FFFFFF',
        textDecorationLine: 'underline',
        fontFamily: 'nunito-regular',
      }
      ,
      questionType:{
        fontSize: 24,
        fontWeight:'bold',
        marginBottom: 20,
        color: '#FFFFFF',
        textDecorationLine: 'underline',
        fontFamily: 'nunito-regular',
      },
      view : {
          padding: 20,
      }
})