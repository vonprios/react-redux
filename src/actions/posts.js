import * as types from '../actions/types';
import firestore from '../utils/firestore';

export const fetchPosts = () => dispatch => {
    const list = [];

    //http method 참조
    firestore
        .collection('posts')
        .get()
        .then(querySnapshot => {
            //forEach는 함수 반복, map 데이터를 반복
            querySnapshot.forEach(doc => {
                // console.log(`${doc.id} => ${doc.data()}`);
                let data = doc.data();
                let {title, body} = data;
                list.push({id: doc.id, title: title, body: body});
            });
            dispatch(setPosts(list));
        });
    // dispatch(setPosts([]));
};

export const setPosts = list => ({
    type: types.SET_POSTS,
    list,
});
