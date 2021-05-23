import React, {createContext, useState} from 'react';
import auth from '@react-native-firebase/auth';
import {useDispatch} from 'react-redux';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import {LoginManager, AccessToken} from 'react-native-fbsdk-next';
import {
  LOGOUT_USER,
  FETCHING_INITIAL_USER,
  AUTH_FAILED,
} from '../redux/constants';
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
          dispatch({type: FETCHING_INITIAL_USER});
          const {idToken} = await GoogleSignin.signIn();

          // Create a Google credential with the token
          const googleCredential = auth.GoogleAuthProvider.credential(idToken);

          // Sign-in the user with the credential
          return auth().signInWithCredential(googleCredential);
        },
        login: async (email, password) => {
          try {
            dispatch({type: FETCHING_INITIAL_USER});
            await auth().signInWithEmailAndPassword(email, password);
            dispatch(clearErrors());
          } catch (e) {
            dispatch(getErrors('Login Failed! Invalid Credentials'));
            dispatch({type: AUTH_FAILED});
          }
        },
        fbLogin: async () => {
          try {
            dispatch({type: FETCHING_INITIAL_USER});
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
            // Sign-in the user with the credential
            return auth().signInWithCredential(facebookCredential);
          } catch (e) {
            console.log(e);
            dispatch(getErrors(e));
          }
        },
        register: async (email, password) => {
          try {
            dispatch({type: FETCHING_INITIAL_USER});
            await auth().createUserWithEmailAndPassword(email, password);
            dispatch(clearErrors());
          } catch (e) {
            console.warn(e);
            dispatch(getErrors('Registration Failed!'));
            dispatch({type: AUTH_FAILED});
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
