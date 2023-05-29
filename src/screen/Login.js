import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, {useState} from 'react'

import Youtube from 'YoutubeRently/assest/svg/youtube.svg'
import LoginSvg from 'YoutubeRently/assest/svg/LoginSvg.svg'

import {GoogleSigninButton} from '@react-native-google-signin/google-signin'
import {useDispatch} from 'react-redux'
import { authenticateUser } from '../redux/action/authAction'
const Login = () => {

  const [idToken, setIdToken] = useState('');

  const dispatch = useDispatch();
  return (
    <View style={styles.container}>

      <View style={styles.appName}>
        <Youtube width={80} height={80} />
        <Text style={styles.title}>YouTube</Text>
      </View>

      <Text style={styles.title2}>Online Video Sharing Platform</Text>
      <LoginSvg width={'90%'} height={280} />

      <GoogleSigninButton
      style={{ width:200, height: 60 ,marginTop:40,}}
      size={GoogleSigninButton.Size.Wide}
      color={GoogleSigninButton.Color.Light}
      onPress={() => dispatch(authenticateUser())}
      />
      {/* <Google/> */}

    </View>
  )
}

export default Login

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    // justifyContent: 'center',
    backgroundColor: '#fffbd4'
  },
  appName: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20
  },
  title: {
    fontSize: 45,
    fontWeight: 'bold',
    color: 'red',
    textAlign: 'center'
  },
  title2: {
    fontSize: 18,
    marginLeft:20,
    fontWeight: 'normal',
    color: 'black',
    textAlign: 'center',
    marginBottom:100,
  },
  button: {
    position: 'absolute',
    bottom: 40,
    margin: 30,
    borderRadius: 20,
    borderWidth: 2,
    padding: 10,
    alignSelf: 'center',
    width:'80%',
    backgroundColor: '#ffdbe6'
  },
  buttonText: {
    textAlign: 'center',
    color: '#273b73',
    fontSize: 22,
    fontWeight: 'bold'
  }
})



// import React, { useEffect, useState } from 'react';
// import { View, Button, Text } from 'react-native';
// import { GoogleSignin, statusCodes } from '@react-native-google-signin/google-signin';

// const Login = () => {
  // const [accessToken, setAccessToken] = useState('');
  // const [refreshToken, setRefreshToken] = useState('');

//   useEffect(() => {
//     GoogleSignin.configure({
//       webClientId: '920204686935-dfgcvbo41sblca6eaj1gdakbi6898j29.apps.googleusercontent.com',
//     });
//   }, []);

//   const signInWithGoogle = async () => {
//     try {
//       await GoogleSignin.hasPlayServices();
//       const userInfo = await GoogleSignin.signIn();
//       console.log('USERINFO : ', userInfo )
//       const tokens = await GoogleSignin.getTokens();
//       console.log('Access Token:', tokens.accessToken);
//       console.log('Refresh Token:', tokens.refreshToken);
//       setAccessToken(tokens.accessToken);
//       setRefreshToken(tokens.refreshToken);
//       // Perform necessary actions with user info and tokens
//     } catch (error) {
//       if (error.code === statusCodes.SIGN_IN_CANCELLED) {
//         console.log('User canceled the sign-in process');
//       } else if (error.code === statusCodes.IN_PROGRESS) {
//         console.log('Sign-in process is already in progress');
//       } else {
//         console.log('Error occurred while signing in:', error);
//       }
//     }
//   };

//   return (
//     <View>
//       <Button title="Sign in with Google" onPress={signInWithGoogle} />
//       <Text>Access Token: {accessToken}</Text>
//       <Text>Refresh Token: {refreshToken}</Text>
//     </View>
//   );
// };

// export default Login;
