import React, {Component} from 'react';
import {connect} from 'react-redux';
import requireAuth from '../../components/requireAuth';
import * as postsActions from '../../actions/posts';

class Posts extends Component {
    //componentWillMount 컴포넌트가 마운트 되기 전에 실행
    //react-lifecycle 참조
    componentWillMount() {
        this.props.fetchPosts();
    }

    //함수, 상태 설정
    render() {
        //상수 설정
        return (
            //html
            <div>this is the posts index{this.props.auth}</div>
        );
    }
}

const mapStateToProps = ({posts}) => ({
    posts,
});

export default connect(
    mapStateToProps,
    postsActions
)(requireAuth(Posts));
