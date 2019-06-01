import React, {Component} from 'react';
import {Route} from 'react-router-dom';
import Home from './Home';
import Posts from './Posts';

class App extends Component {
    //함수, 상태 설정
    render() {
        //상수 설정
        return (
            //html
            <div>
                <Route exact path="/" component={Home} />
                <Route path="/posts" component={Posts} />
            </div>
        );
    }
}

export default App;
