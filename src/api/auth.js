import {GoogleSignin} from '@react-native-google-signin/google-signin'

export const authConfig = async () => {

    // const isLogin = async () => {
    //     const isSignedIn = await GoogleSignin.isSignedIn();

    // }
    GoogleSignin.configure({
        scopes: ['https://www.googleapis.com/auth/youtube.readonly'],
        webClientId: '1068155715564-mqkrkna4ndm4pboknd9oj8bstpubucq7.apps.googleusercontent.com',
        offlineAccess: false,
    });
    try {
        await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });
        const userInfo = await GoogleSignin.signIn();
        const accessToken = await GoogleSignin.getTokens();
        // console.log('User Info:', JSON.stringify(userInfo));
        // console.log(userInfo.idToken)
        // console.log(userInfo.user)
        // console.log(userInfo)
        return userInfo
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

export const logoutConfig = async() =>{
    try {
        await GoogleSignin.signOut();
        const userInfo = null;
        return userInfo;
      } catch (error) {
        console.error(error);
      }
}