import React, {Component} from 'react';
import {connect} from 'react-redux';
import requireAuth from '../../components/requireAuth';
import * as postsActions from '../../actions/posts';
import {Grid, Container, Table, Button} from 'semantic-ui-react';
import {placeholder} from '@babel/types';
import {PostListPlaceholder} from '../common/placeholders';
import PostRow from '../../components/Posts/PostRow';

class Posts extends Component {
    state = {
        loading: true,
        showPostModal: false,
    };

    //componentWillMount 컴포넌트가 마운트 되기 전에 실행
    //react-lifecycle 참조
    componentWillMount() {
        this.props.fetchPosts().then(() => {
            this.setState({loading: false});
        });
    }

    //함수, 상태 설정
    // renderPosts = () => {
    //     const {posts} = this.props;
    //     console.log(posts);
    //     return posts.map(p => (
    //         <Table.Row key={p.id}>
    //             <Table.Cell>{p.title}</Table.Cell>
    //             <Table.Cell>{p.body}</Table.Cell>
    //             <Table.Cell>
    //                 <Button.Group size="tiny">
    //                     <Button>Edit</Button>
    //                     <Button icon="trash" negative />
    //                 </Button.Group>
    //             </Table.Cell>
    //         </Table.Row>
    //     ));
    // };

    // renderPlaceholder() {
    //     return (
    //         <Placeholder>
    //             <Placeholder.Paragraph>
    //                 <placeholder.Line />
    //                 <placeholder.Line />
    //                 <placeholder.Line />
    //                 <placeholder.Line />
    //                 <placeholder.Line />
    //             </Placeholder.Paragraph>
    //         </Placeholder>
    //     );
    // }

    handleNew = () => {
        this.setState({showPostModal: true});
    };

    render() {
        //상수 설정
        const {list} = this.props;
        return (
            //html
            <Container>
                {/* <h2>Posts</h2>
                {this.state.loading ? (
                    this.renderPlaceholder()
                ) : (
                    <Table>
                        <Table.Header>
                            <Table.Row>
                                <Table.HeaderCell>Title</Table.HeaderCell>
                                <Table.HeaderCell>Body</Table.HeaderCell>
                                <Table.HeaderCell>Actions</Table.HeaderCell>
                            </Table.Row>
                        </Table.Header>
                        <Table.Body>
                            {posts ? (
                                this.renderPosts()
                            ) : (
                                <Table.Row>
                                    <Table.Cell>No posts</Table.Cell>
                                </Table.Row>
                            )}
                        </Table.Body>
                    </Table>
                )} */}
                <Grid columns={2}>
                    <Grid.Column>
                        <h2>Posts</h2>
                    </Grid.Column>
                    <Grid.Column textAlign="right">
                        <Button primary onClick={this.handleNew}>
                            New Post
                        </Button>
                    </Grid.Column>
                </Grid>
                {this.state.loading ? (
                    <PostListPlaceholder />
                ) : (
                    <Table>
                        <Table.Header>
                            <Table.Row>
                                <Table.HeaderCell>Title</Table.HeaderCell>
                                <Table.HeaderCell>Body</Table.HeaderCell>
                                <Table.HeaderCell>Actions</Table.HeaderCell>
                            </Table.Row>
                        </Table.Header>
                        <Table.Body>
                            {list ? (
                                list.map(post => (
                                    <PostRow key={post.id} post={post} />
                                ))
                            ) : (
                                <Table.Row>
                                    <Table.Cell>No posts</Table.Cell>
                                </Table.Row>
                            )}
                        </Table.Body>
                    </Table>
                )}
            </Container>
        );
    }
}

const mapStateToProps = ({posts}) => ({
    list: posts.list,
});

export default connect(
    mapStateToProps,
    postsActions
)(requireAuth(Posts));
