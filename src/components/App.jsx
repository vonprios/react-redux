import React, {Component} from 'react';
import {Route} from 'react-router-dom';

import {connect} from 'react-redux';

import {ToastContainer, Zoom} from 'react-toastify';
import firebase from 'firebase/app';

import Home from './Home';
import Posts from './Posts';

import HeaderNav from './common/HeaderNav';
import SignUp from '../components/auth/SignUp';
import Login from '../components/auth/Login';
import '../assets/styles/app.scss';
import * as authAction from '../actions/auth';
import * as alerts from '../utils/alerts';

class App extends Component {
    //컴포넌트가 마운트 되기전에 로그인 유무 체크 componentWillMount
    componentWillMount() {
        firebase.auth().onAuthStateChanged(user => {
            if (user) {
                console.log('logged in');
            } else {
                console.log('not logged in');
            }
        });
    }

    handleLogout = () => {
        // this.props.logout();
        const {history} = this.props;
        firebase
            .auth()
            .signOut()
            .then(() => {
                // this.props.changeAuth(false);
                //history 현재 있는 위치에서 /login으로 이동하라
                history.push('/login');
                alerts.success('Successfully logged out');
            })
            .catch(err => {
                alerts.error(err.message);
            });
    };

    //함수, 상태 설정
    render() {
        //상수 설정
        const {auth} = this.props;
        return (
            //html
            <div>
                <HeaderNav isAuthed={auth} handleLogout={this.handleLogout} />
                <section className="app-wrapper">
                    <Route exact path="/" component={Home} />
                    <Route path="/posts" component={Posts} />
                    <Route path="/signup" component={SignUp} />
                    <Route path="/login" component={Login} />
                </section>
                <ToastContainer authClose={false} transition={Zoom} />
            </div>
        );
    }
}

const mapStateToProps = state => ({
    auth: state.auth,
});

export default connect(
    mapStateToProps,
    authAction
)(App);

//redux - react 의 데이터 상태 추적 라이브러리
