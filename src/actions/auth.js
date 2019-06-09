import firebase from 'firebase/app';
import * as types from './types';
import * as alerts from '../utils/alerts';

export const registerUser = (email, password) => dispatch => {
    console.log(email, password);
    return firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then(res => {
            dispatch(changeAuth(true));
            alerts.success('Successful');
        })
        .catch(error => {
            console.log(error.code, error.message);
            alerts.error(error.message);
        });
};

export const changeAuth = isAuthed => ({
    type: types.CHANGE_AUTH,
    isAuthed: isAuthed,
});

// export const logout = () => dispatch => {
//     firebase
//         .auth()
//         .signOut()
//         .then(function() {
//             dispatch(changeAuth(false));
//         })
//         .catch(function(error) {
//             console.log(error.code, error.message);
//             alerts.error(error.message);
//         });
// };
