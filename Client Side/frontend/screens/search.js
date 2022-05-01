import React, { useState } from 'react';
import {
    StyleSheet, View, Text, ImageBackground, TextInput, Modal,
    TouchableWithoutFeedback, Keyboard, Image, ActivityIndicator,
    KeyboardAvoidingView, Alert
} from 'react-native';
import FlatButton from '../shared/button';
import { Ionicons } from '@expo/vector-icons';
import Avatar from '../assets/images/CobraLogo.png';


export default function Search() {

    //avatar uri
    const avatarURI = Image.resolveAssetSource(Avatar).uri;

    const [modalVisible, setModalVisible] = useState(false);

    const handler = () => {
        setModalVisible(true);
    }

    const [isAnimate, setIsAnimate] = useState(false); // for activity indicator
    // to take the inputs from TextInputs
    const [modalSnakeName, setModalSnakeName] = useState("");
    const [modalLocation, setModalLocation] = useState("");
    const [snakeName, setSnakeName] = useState("");
    const [snake, setSnake] = useState("");
    const [scientificName, setScientificName] = useState("");
    const [location, setLocation] = useState("");
    const [image, setImage] = useState(avatarURI); // set the default image to avatar

    /* location tag method */
    async function tagSnakeLocation(snakeName, snakeLocation) {
        // check if the values are not null
        if (snakeName == "" && snakeLocation == "") {

            Alert.alert(
                "Attention!",
                "Both fields are need to be filled!",
                [
                    {
                        text: "OK",
                        onPress: () => console.log("Ok!")
                    }
                ]
            );
        } else {
            //send birdName, and location with fetch
            setIsAnimate(true);
            try {
                await fetch('https://i-freedom-310915.nw.r.appspot.com/tagLocation', {
                    method: 'POST',
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        snakeName: snakeName,
                        snakeLocation: snakeLocation,
                    }),
                });

            } catch (e) {
                console.log(e); // print the error in log
            }
            getSuccess(); // checks whether tag or not
        }

    }


    // search method
    async function searchSnake(snakeName) {
        if (snakeName == "") {

            Alert.alert(
                "Attention!",
                "Please enter Snake Name",
                [
                    {
                        text: "OK",
                        onPress: () => console.log("OK!")
                    }
                ]
            );
        } else {
            setIsAnimate(true); // activating the indicator
            try {
                await fetch('https://i-freedom-310915.nw.r.appspot.com/birdDes', {
                    method: 'POST',
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        snakeName: snakeName,
                    }),
                });
            } catch (e) {
                console.log(e);
            }


            // to get birdDetails back
            getDataFromDatabase();




        }
    }

    //fetch data from the database
    async function getDataFromDatabase() {
        try {
            let response = await fetch('https://i-freedom-310915.nw.r.appspot.com/dataFromDB');
            let responseJSON = await response.json();
            console.log(responseJSON); // for debug purposes
            if (responseJSON.snake == "") {

                Alert.alert(
                    "Attention!",
                    "No snake Found!",
                    [
                        {
                            text: "OK",
                            onPress: () => console.log("OK!")
                        }
                    ]
                );

            } else {
                setSnake(responseJSON.snake);
                setScientificName(responseJSON.snakeScName);
                setLocation(responseJSON.location);
                setImage(responseJSON.snakeImage); // getting the current image

            }
            setIsAnimate(false); // after loading set to false


        } catch (e) {
            console.log(e);
        }
    }

    async function getSuccess() {
        try {
            let response = await fetch('https://i-freedom-310915.nw.r.appspot.com/locationSuccess');
            let responseJSON = await response.json();
            console.log(responseJSON);

            if (responseJSON.success == false) {

                Alert.alert(
                    "Attention!",
                    "No snake Found!",
                    [
                        {
                            text: "OK",
                            onPress: () => console.log("OK!")
                        }
                    ]
                );
                setIsAnimate(false);
            } else {
                Alert.alert(
                    "Success!",
                    "Thanks for Your Contribution",
                    [
                        {
                            text: "OK",
                            onPress: () => console.log("OK!")
                        }
                    ]
                );
            }
            setIsAnimate(false);

        } catch (e) {
            console.log(e);
        }
    }


    return (


        <ImageBackground source={require('../assets/images/drawerbg.jpg')} style={styles.bgImage}>



            <Modal
                visible={modalVisible}
                presentationStyle='pageSheet'
                animationType='slide'>
                <TouchableWithoutFeedback onPress={() => {
                    Keyboard.dismiss();
                    console.log("keybord dismissed");
                }}>
                    <View style={styles.modal}>
                        <Ionicons
                            name="md-close-circle-sharp"
                            size={48}
                            color="#E72D44"
                            onPress={() => setModalVisible(false)}
                            style={styles.closeIcon} />

                        <View style={styles.formStyle}>
                            <TextInput
                                placeholder="Enter Snake"
                                style={styles.modalInput}
                                onChangeText={(text) => { setModalSnakeName(text) }}
                            />

                            <TextInput
                                placeholder="Enter Location"
                                style={styles.modalInput}
                                onChangeText={(text) => { setModalLocation(text) }}
                            />

                            <FlatButton text="Tag Location" onPress={() => tagSnakeLocation(modalSnakeName, modalLocation)} />
                        </View>
                        <ActivityIndicator
                            size="large"
                            color="#E72D44"
                            animating={isAnimate}
                        />
                        <View>

                        </View>
                    </View>
                </TouchableWithoutFeedback>
            </Modal>



            <TouchableWithoutFeedback onPress={() => {
                Keyboard.dismiss();
                console.log("keybord dismissed");
            }}>

                <View style={styles.bg}>

                    <KeyboardAvoidingView
                        behavior={Platform.OS === "ios" ? "padding" : "height"}
                        keyboardVerticalOffset="10"
                    >
                        <View style={styles.inputHolder}>
                            <TextInput
                                style={styles.txtInput}
                                placeholder="Enter Snake Name"
                                onChangeText={(text) => setSnakeName(text)} />
                        </View>
                    </KeyboardAvoidingView>



                    <View style={styles.listHolder}>
                        <Image source={{ uri: image }} style={{ width: 112, height: 112, justifyContent: 'center', alignItems: 'center', marginBottom: 20, borderRadius: 15 }} />
                        <Text style={styles.snakeData}> {snake} </Text>
                        <Text style={styles.snakeSCName}> {scientificName} </Text>
                        <Text style={styles.snakeData}> {location} </Text>
                        <ActivityIndicator
                            size="large"
                            color="#E72D44"
                            animating={isAnimate}
                        />
                    </View>


                    <View style={styles.buttonHolder}>
                        <FlatButton text="Find Snake Species" onPress={() => searchSnake(snakeName)} />
                    </View>


                    <View style={styles.location}>
                        <Text style={styles.tagLocation} onPress={handler}>Tag Location ?</Text>
                    </View>





                </View>

            </TouchableWithoutFeedback>





        </ImageBackground>




    );
}

const styles = StyleSheet.create({
    bgImage: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-around',
        resizeMode: 'cover',
        width: '100%',
        height: '100%',
    },
    txt: {
        padding: 10,
        margin: 10,
    },
    txtInput: {
        textAlign: 'center',
        width: 240,
        height: 40,
        backgroundColor: '#fff',
        fontSize: 18,
        padding: 10,
        borderWidth: 1,
        borderRadius: 15,
        borderColor: '#757575',
        backgroundColor: 'rgba(255,255,255,0.8)',
    },
    bg: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    inputHolder: {
        width: 'auto',
        height: 'auto',
        alignItems: 'center',
        justifyContent: 'center',
    },
    listHolder: {
        width: 300,
        height: 300,
        backgroundColor: '#fff',
        borderRadius: 15,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.32,
        shadowRadius: 5.46,
        elevation: 9,

    },
    buttonHolder: {
        position: 'relative',
    },
    location: {
        position: 'absolute',
        top: 5,
        right: -20,
    },
    tagLocation: {
        color: '#E72D44',
        fontSize: 18,
        fontFamily: 'indie-flower',
        textDecorationLine: 'underline',

    },
    closeIcon: {
        position: 'absolute',
        top: 20,
        right: 20,
    },
    modal: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    formStyle: {
        width: 300,
        height: 300,
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    modalInput: {
        textAlign: 'center',
        width: 240,
        height: 40,
        backgroundColor: '#fff',
        fontSize: 18,
        padding: 10,
        borderWidth: 1,
        borderRadius: 15,
        borderColor: '#757575',
        backgroundColor: 'rgba(255,255,255,0.8)',
    },
    birdData: {
        marginTop: 15,
        color: '#E72D44',
        fontSize: 18,
        fontFamily: 'poppins-regular',
    },
    birdSCName: {
        color: '#E72D44',
        fontSize: 18,
        textDecorationLine: 'underline',
        fontStyle: 'italic',
        fontFamily: 'poppins-italic',
    },
    indicatorContainer: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        alignItems: 'center',
        justifyContent: 'center',

    }

})