import React, {createContext, useState} from 'react';
import auth from '@react-native-firebase/auth';
import {useDispatch} from 'react-redux';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import {LoginManager, AccessToken} from 'react-native-fbsdk-next';
import {LOGOUT_USER} from '../redux/constants';
import {getErrors, clearErrors} from '../redux/actions/errorActions';

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
  const [user, setUser] = useState(null);
  const dispatch = useDispatch();

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        googleLogin: async () => {
          // Get the users ID token
          const {idToken} = await GoogleSignin.signIn();

          // Create a Google credential with the token
          const googleCredential = auth.GoogleAuthProvider.credential(idToken);
          dispatch(clearErrors());

          // Sign-in the user with the credential
          return auth().signInWithCredential(googleCredential);
        },
        login: async (email, password) => {
          try {
            await auth().signInWithEmailAndPassword(email, password);
            dispatch(clearErrors());
          } catch (e) {
            dispatch(getErrors('Login Failed! Invalid Credentials'));
          }
        },
        fbLogin: async () => {
          try {
            // Attempt login with permissions
            const result = await LoginManager.logInWithPermissions([
              'public_profile',
              'email',
            ]);

            if (result.isCancelled) {
              throw 'User cancelled the login process';
            }

            // Once signed in, get the users AccesToken
            const data = await AccessToken.getCurrentAccessToken();
            // console.log(data)

            if (!data) {
              throw 'Something went wrong obtaining access token';
            }

            // Create a Firebase credential with the AccessToken
            const facebookCredential = auth.FacebookAuthProvider.credential(
              data.accessToken,
            );
            dispatch(clearErrors());
            console.log("Running fb login")
            // Sign-in the user with the credential
            return auth().signInWithCredential(facebookCredential);
          } catch (e) {
            console.log(e);
            dispatch(getErrors(e));
          }
        },
        register: async (email, password) => {
          try {
            await auth().createUserWithEmailAndPassword(email, password);
            dispatch(clearErrors());
          } catch (e) {
            console.warn(e);
            dispatch(getErrors('Registration Failed!'));
          }
        },
        logout: async () => {
          try {
            await auth().signOut();
            dispatch({type: LOGOUT_USER});
          } catch (e) {
            console.warn(e);
          }
        },
      }}>
      {children}
    </AuthContext.Provider>
  );
};
