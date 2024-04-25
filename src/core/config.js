import {initializeApp} from 'firebase/app';
import {getAuth} from 'firebase/auth';

export const config_firebase = {
    apiKey: "AIzaSyCcZA0xKqvkMvif6rxL7vzk5Wifyulu1H0",
    authDomain: "authlogin-ce216.firebaseapp.com",
    projectId: "authlogin-ce216",
    storageBucket: "authlogin-ce216.appspot.com",
    messagingSenderId: "249334367768",
    appId: "1:249334367768:web:a17c832852b4b45ddf256d"
  };

  const app  = initializeApp(config_firebase);
export const auth = getAuth(app) 

  