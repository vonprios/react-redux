import React, {Component} from 'react';
import {Route} from 'react-router-dom';

import {connect} from 'react-redux';
import firebaseApp from '../utils/firebase';

import Home from './Home';
import Posts from './Posts';

import HeaderNav from './common/HeaderNav';
import '../assets/styles/app.scss';

class App extends Component {
    //컴포넌트가 마운트 되기전에 로그인 유무 체크
    componentWillMount() {
        firebaseApp.auth().onAuthStateChanged(user => {
            if (user) {
                console.log('logged in');
            } else {
                console.log('not logged in');
            }
        });
    }

    //함수, 상태 설정
    render() {
        //상수 설정
        return (
            //html
            <div>
                <HeaderNav />
                <Route exact path="/" component={Home} />
                <Route path="/posts" component={Posts} />
            </div>
        );
    }
}

export default connect(null)(App);

//redux - react 의 데이터 상태 추적 라이브러리
