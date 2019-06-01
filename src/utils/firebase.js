import firebase from 'firebase/app';
import 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: 'AIzaSyAaaFU641XrTcWR0jlZeoX5UR1eDLl6F8M',
    authDomain: 'react-redux-df0fd.firebaseapp.com',
    databaseURL: 'https://react-redux-df0fd.firebaseio.com',
    projectId: 'react-redux-df0fd',
    storageBucket: 'react-redux-df0fd.appspot.com',
    messagingSenderId: '114495890113',
    appId: '1:114495890113:web:aacb050f1beb3e72',
};
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

export default firebaseApp;
