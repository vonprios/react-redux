import React from 'react';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import reducers from 'reducers';
import reduxThunk from 'redux-thunk';

export default ({children, initialState = {}}) => {
    const store = createStore(
        reducers, //사용자 반응 상태
        initialState, //초기값
        applyMiddleware(reduxThunk)
    );
    return <Provider store={store}>{children}</Provider>;
};
