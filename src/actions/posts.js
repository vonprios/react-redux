import * as types from '../actions/types';
import firestore from '../utils/firestore';

export const fetchPosts = () => dispatch => {
    //http method 참조
    firestore
        .collection('posts')
        .get()
        .then(querySnapshot => {
            //forEach는 함수 반복, map 데이터를 반복
            querySnapshot.forEach(doc => {
                console.log(`${doc.id} => ${doc.data()}`);
            });
        });
    dispatch(setPosts([]));
};

export const setPosts = posts => ({
    type: types.SET_POSTS,
    posts,
});
