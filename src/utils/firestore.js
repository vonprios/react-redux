import firebase from 'firebase/app';

const firestore = firebase.firestore();
const settings = {
    timestampInSnapshots: true,
};
firestore.settings(settings);

export default firestore;
