import {combineReducers} from 'redux';
import authReducer from './auth';
// import {firebaseReducer} from 'react-redux-firebase';
import postsReducer from './posts';

export default combineReducers({
    auth: authReducer,
    posts: postsReducer,
});
