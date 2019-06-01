import React, {Component} from 'react';
import {Grid, Container, Button, Form} from 'semantic-ui-react';
import {connect} from 'react-redux';

//connect to redux
const enhance = connect(({firebase: {auth, profile}}) => ({
    auth,
    profile,
}));

class SignUp extends Component {
    handleSubmit = ({target}) => {
        console.log('email', target.elements.email.value);
        console.log('password', target.elements.password.value);
    };

    render() {
        const username = '';
        return (
            <Container>
                <Grid centered columns={2}>
                    <Grid.Column>
                        <h3>Sign Up</h3>
                        <Form onSubmit={this.handleSubmit}>
                            <Form.Field>
                                <label>Email</label>
                                <input
                                    name="email"
                                    placeholder="Enter email.."
                                />
                            </Form.Field>
                            <Form.Field>
                                <label>Password</label>
                                <input
                                    name="password"
                                    placeholder="Enter password.."
                                />
                            </Form.Field>
                            <Button type="submit">Submit</Button>
                        </Form>
                    </Grid.Column>
                </Grid>
            </Container>
        );
    }
}

export default enhance(SignUp);
