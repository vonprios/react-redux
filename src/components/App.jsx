import React, {Component} from 'react';
import {Route} from 'react-router-dom';

import {connect} from 'react-redux';

import Home from './Home';
import Posts from './Posts';

import HeaderNav from './common/HeaderNav';
import SignUp from '../components/auth/SignUp';
import '../assets/styles/app.scss';

class App extends Component {
    //컴포넌트가 마운트 되기전에 로그인 유무 체크 componentWillMount
    // componentWillMount() {
    //     firebaseApp.auth().onAuthStateChanged(user => {
    //         if (user) {
    //             console.log('logged in');
    //         } else {
    //             console.log('not logged in');
    //         }
    //     });
    // }

    //함수, 상태 설정
    render() {
        //상수 설정
        return (
            //html
            <div>
                <HeaderNav />
                <section className="app-wrapper">
                    <Route exact path="/" component={Home} />
                    <Route path="/posts" component={Posts} />
                    <Route path="/signup" component={SignUp} />
                </section>
            </div>
        );
    }
}

export default connect(null)(App);

//redux - react 의 데이터 상태 추적 라이브러리
