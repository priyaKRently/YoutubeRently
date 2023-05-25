import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { GoogleSignin, GoogleSigninButton, statusCodes } from '@react-native-google-signin/google-signin'

// useEffect(() => {
//     GoogleSignin.configure({
//         webClientId: '1068155715564-qunl9bhg3l90cvp7kefh6q14mm5p0cbb.apps.googleusercontent.com',
//         offlineAccess: false
//     });
// },[])

const Google = () => {
    
    const handleGoogleSignin = async () => {
        GoogleSignin.configure({
            scopes: ['https://www.googleapis.com/auth/youtube.readonly'],
            webClientId: '1068155715564-mqkrkna4ndm4pboknd9oj8bstpubucq7.apps.googleusercontent.com',
            offlineAccess: false
        });
        try {
            await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });
            const userInfo = await GoogleSignin.signIn();
            console.log('User Info:', JSON.stringify(userInfo));
            // console.log(userInfo.idToken)
            console.log(userInfo.user)
        } catch (error) {
            if (error.code === statusCodes.SIGN_IN_CANCELLED) {
                console.log('Sign-in process canceled');
            } else if (error.code === statusCodes.IN_PROGRESS) {
                console.log('Sign-in process is already in progress');
            } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
                console.log('Play services not available');
            } else {
                console.log('Error:', error.message);
            }
        }
    }

    const handleGoogleSignout =async () => {
        try{
            await GoogleSignin.signOut();
            console.log(Logout)
            // setState({ user: null }); // Remember to remove the user from your app's state as well
          } catch (error) {
            console.error(error);
          }
    }
    return (
        <View>
            <GoogleSigninButton
                style={{ width:200, height: 60 ,marginTop:30,}}
                size={GoogleSigninButton.Size.Wide}
                color={GoogleSigninButton.Color.Dark}
                onPress={handleGoogleSignin} />
        </View>
    )
}

export default Google

const styles = StyleSheet.create({})