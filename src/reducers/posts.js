import * as types from '../actions/types';

const initalState = {
    list: [],
    showModal: false,
};

export default (posts = initalState, action) => {
    switch (action.type) {
        case types.SET_POSTS:
            return {...posts, list: action.list};
        default:
            return posts;
    }
};
