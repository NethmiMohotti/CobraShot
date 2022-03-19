import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, ImageBackground, Modal, Image, StatusBar, ActivityIndicator, Platform} from 'react-native';
import FlatButton from '../shared/button';
import { Ionicons } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';
import Avatar from '../assets/images/snakeAvatar.png'

export default function Home(){

  // Avatar Uri
  const avatarUri = Image.resolveAssetSource(Avatar).uri;

  // State set the modal vistible true
  const [modalVisible, setModalVisible] = useState(false);

  // State for set image
  const [image, setImage] = useState(avatarUri);

  // If the button pressed then modal visible set to true
  const handler = () => {
    setModalVisible(true);
  }

  // Snake name
  const [snakeName, setSnakeName] = useState("Snake Name ");

  // Snake Scientific Name
  const [snakeSname, setSnakeSname] = useState("Scientific Name ");

  // Snake Location
  const [location, setLocation] = useState("Location ");

  // for Activity Indicator
  const [isLoaded, setIsLoaded] = useState(false);
  const [isAnimate, setIsAnimate] = useState(false);


  // Asking permission for camera roll and Media library access
  useEffect( () => {
    (async () => {
      // Checking the platform
      if (Platform.OS !== 'web') {
        // Setting permision
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== 'granted') {
          alert ("Sorry,Permission to access Camera roll denied ")
        }
      }
    })();
  },[]);

  // Image from the media library
  const chooseImage = async () => {
    // Launching the media library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images, 
      allowsEditing: true, // allowing to crop and flip
      aspect: [4,3], // ratio
      quality: 1, // Number of images that can choose
      base64: true, // Converting the image to the base64 format

    })

    setIsAnimate(true);

    if(!result.cancelled) {
      uploadImage(result.base64); // Connecting the image with the backend
      setImage(result.uri);

      setModalVisible(false);
    }
  }

  // Taking a snap 
  const takeImage = async() =>{
    let result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: false,
      aspect: [4,3],
      quality: 1,
      base64: true,
    });

    setIsAnimate(true);

    if (!result.cancelled){
      uploadImage(result.base64);
      setImage(result.uri);
      setModalVisible(false0);
    }
  }

  // Method to send the image uri as base64
  async function uploadImage(str){
    try{
      await fetch('https://i-freedom-310915.nw.r.appspot.com/classification',{
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          image: str,
        }),
      });

      getSnakeDetails();

    }catch(err) {
      console.log(err)
    }
  }

  // Receving Snake information from the backend
  async function getSnakeDetails(){
    try{
      let response = await fetch('https://i-freedom-310915.nw.r.appspot.com/bird');
      let responseJSON = await response.json();

      setSnakeName(responseJSON.snake);
      setSnakeSname(responseJSON.snakeSname);
      setLocation(responseJSON.location);
      setIsLoaded(true);
      console.log(responseJSON.snake);
      setIsAnimate(false);

    }catch (err){
      console.log(err)
    }
  }

  return (

    <ImageBackground source={require('../assets/images/homePagebg.png')} style={styles.backGroundImage}>
      <StatusBar barStyle="dark-content"/>

      {/* Popup window for upload and take image     */}
      <Modal
      visible = { modalVisible }
      presentationStyle = 'pageSheet'
      animationType = "slide">
        
        <ImageBackground source = {require('../assets/images/commonbg.png')} style = {styles.backGroundImage}>
          {/* Icon to close the Modal */}
          <View style={styles.modalContent}>
            <Ionicons
              name="md-close-circle-sharp"
              size={48}
              color="#E72D44"
              onPress={ () => setModalVisible(false)}
              style = {styles.closeIcon}/>

              <View style={styles.buttonHolder}>
                <FlatButton text="Upload Image" onPress={chooseImage}></FlatButton>
                <FlatButton text="Take Image" onPress={takeImage}></FlatButton>  
              </View>
          </View>
        </ImageBackground>
      </Modal>

      <View style={styles.imageContainer}>
        <Image source={{ uri: image}} style={{ width: 150, height: 112.5, justifyContent: 'center', alignItems: 'center', marginBottom: 20, borderRadius: 15 }}/>
        <Text style={styles.snakeName}>{ snakeName }</Text>
        <Text style={styles.snakeSname}>{ snakeSname }</Text>  
        <Text style={styles.snakeData}>{ location }</Text>
        <ActivityIndicator
          size="large"
          color="#E72D44"
          animating = { isAnimate }/>
      </View>
      <FlatButton text= "Find Snake" onPress={handler}/>

    </ImageBackground>
  );

}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'space-around',
      padding: 20,
    },
    imageContainer: {
      width: 300,
      height: 300,
      backgroundColor: '#fff',
      borderRadius: 15,
      alignItems: 'center',
      justifyContent: 'center',
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 4,
      },
      shadowOpacity: 0.32,
      shadowRadius: 5.46,
      elevation: 9,
    },
    backGroundImage: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'space-around',
      resizeMode: 'cover',
      width: '100%',
      height: '100%'
    },
    modalContent: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 40
      
    },
    closeIcon : {
      position: 'absolute',
      top: 20,
      right: 20
    },
    buttonHolder : {
      width : 300,
      height : 300,
      justifyContent: 'space-around',
      alignItems : 'center'
    },
    snakeName: {
      color: '#E72D44',
      fontSize: 18
    },
    snakeSname: {
      color: '#E72D44',
      fontSize: 18,
      textDecorationLine: 'underline',
      fontStyle: 'italic',
    },
    snakeData: {
      marginTop: 15,
      color: '#E72D44',
      fontSize: 18,
    }


  });