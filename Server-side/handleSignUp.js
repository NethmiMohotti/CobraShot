import React, {useEffect, useState} from 'react'
import { auth } from "./fireabase"

const loginScreen = () => {
    const[email, setEmail] = useState('')
    const[password,  setPassword] = useState('')

    const navigation = useNavigation()

    useEffect(() => {
        const unsubcribe = auth.onAuthStatChanged(user => {
            if(user){
                navigation.replace("HOME")
            }
        })
        return unsubcribe
    }, [])
}
const handleSignUp = () => {
    auth
    .createUserWithEmailAndPassword(email, password)
    .then(userCredentials => {
        const user = userCredentials.user;
        console.log('Registered with:',user.email);
    })
    .catch(error => alert(error.message))
}

const handleLogin = () => {
    auth
    .signInWithEmailAndPassword(email, password)
    .then(userCredentials => {
        const user = userCredentials.user;
        console.log('Logged in with:',user.email);
    })
    .catch(error => alert(error.message))
}

const handleSignOut = () => {
    auth
    .signOut()
    .then(() => {
        navigation.replace("LOGIN")
    })
    .cat(error => alert(error.message))
}