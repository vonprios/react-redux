import React, {Component} from 'react';
import {Grid, Container, Button} from 'semantic-ui-react';
import {connect} from 'react-redux';

import {Formik, Field, Form, ErrorMessage} from 'formik';

import * as actions from '../../actions/auth';

//connect to redux
// const enhance = connect(({firebase: {auth, profile}}) => ({
//     auth,
//     profile,
// }));

class SignUp extends Component {
    handleSubmit = ({values, actions}) => {
        // console.log('email', target.elements.email.value);
        // console.log('password', target.elements.password.value);
        const {email, password} = values;
        this.props.registerUser(email, password);
    };

    render() {
        const username = '';
        return (
            <Container>
                <Grid centered columns={2}>
                    <Grid.Column>
                        <h3>Sign Up</h3>
                        {/* <Form onSubmit={this.handleSubmit}>
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
                        </Form> */}
                        <Formik
                            initialValues={{email: '', password: ''}}
                            onSubmit={this.handleSubmit}
                            render={({
                                errors,
                                touched,
                                isSubmitting,
                                status,
                            }) => (
                                <Form className="ui form">
                                    <div className="field">
                                        <label>Email</label>
                                        <Field
                                            type="email"
                                            name="email"
                                            disabled={isSubmitting}
                                        />
                                        <ErrorMessage
                                            name="email"
                                            component="div"
                                        />
                                    </div>
                                    <div className="field">
                                        <label>Password</label>
                                        <Field
                                            type="password"
                                            name="password"
                                            disabled={isSubmitting}
                                        />
                                        <ErrorMessage
                                            name="password"
                                            component="div"
                                        />
                                    </div>
                                    {status && status.msg && (
                                        <div>{status.msg}</div>
                                    )}
                                    <Button
                                        type="submit"
                                        disabled={isSubmitting}
                                    >
                                        Submit
                                    </Button>
                                </Form>
                            )}
                        />
                    </Grid.Column>
                </Grid>
            </Container>
        );
    }
}
const mapStateToProps = ({auth, profile}) => ({
    auth,
    profile,
});

export default connect(
    mapStateToProps,
    actions
)(SignUp);
