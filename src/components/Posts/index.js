import React, {Component} from 'react';
import {connect} from 'react-redux';

class Posts extends Component {
    //함수, 상태 설정
    render() {
        //상수 설정
        return (
            //html
            <div>this is the posts index{this.props.auth}</div>
        );
    }
}

export default connect(null)(Posts);
