import React from 'react';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware, compose} from 'redux';
import {reactReduxFirebase, getFirebase} from 'react-redux-firebase';
import reducers from './reducers';
import reduxThunk from 'redux-thunk';
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

const rrfConfig = {
    userProfile: 'users',
    userFirestoreForProfile: true,
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const createStoreWithFirebase = compose(
    applyMiddleware(reduxThunk.withExtraArgument(getFirebase)),
    reactReduxFirebase(firebase, rrfConfig)
)(createStore);

export default ({children, initialState = {}}) => {
    const store = createStoreWithFirebase(
        reducers, //사용자 반응 상태
        initialState //초기값
    );
    return <Provider store={store}>{children}</Provider>;
};
