import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react';
import './Register.css';
// import { userRegister } from '../state/actions/auth';


class Register extends Component {
    state = {
        first_name: '',
        last_name: '',
        email: '',
        password: '',
        password2: ''
    };

    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    };

    // User type for this kind of registering will ALWAYS be "member" and "can_create_session" will ALWAYS be FALSE
    // profile_img_url, long_description, 'linkedin_url', 'website_url' can/will be set after inital registering...
    handleRegister = event => {
        event.preventDefault();
        // this.props.userRegister(this.state, this.props.history);
    };

    render () {
        return (
            <div className='register-form-desktop'>
                <Grid textAlign='center' verticalAlign='middle'>
                    <Grid.Column>
                        <Header as='h2' textAlign='center'>
                            <Image src='/oh.jpg' /> Register your new account
                        </Header>
                        <Form size='large' onSubmit={ this.handleRegister }>
                            <Segment raised>
                                <Form.Input 
                                    required
                                    name='first_name'
                                    label='First name'
                                    placeholder='John'
                                    onChange={ (e) => this.handleChange(e) }
                                />
                                <Form.Input
                                    required
                                    name='last_name'
                                    label='Last name'
                                    placeholder='Doe'
                                    onChange={ (e) => this.handleChange(e) }
                                />
                                <Form.Input
                                    required 
                                    name='email'
                                    label='Email'
                                    iconPosition='left' 
                                    placeholder='john.doe@email.com'
                                    onChange={ (e) => this.handleChange(e) }
                                />     
                                <Form.Input
                                    required
                                    name='password'
                                    label='Password'
                                    fluid
                                    icon='lock'
                                    iconPosition='left'
                                    placeholder='Password'
                                    type='password'
                                    onChange={ (e) => this.handleChange(e) }
                                />
                                <Form.Input
                                    required
                                    name='password2'
                                    label='Re-Enter Password'
                                    fluid
                                    icon='lock'
                                    iconPosition='left'
                                    placeholder='Password'
                                    type='password'
                                    onChange={ (e) => this.handleChange(e) }
                                />
                                <Button animated='fade' color='purple' fluid size='large'>
                                    <Button.Content visible>Register</Button.Content>
                                    <Button.Content hidden>REGISTER</Button.Content>
                                </Button>
                            </Segment>
                        </Form>
                        <Message>
                            Already have an account? <a href='/login'>Login</a>
                        </Message>
                    </Grid.Column>
                </Grid>
            </div>
        );
    };
};

const mapStateToProps = state => ({
  // showLoginError: state.auth.showLoginError
});

const mapDispatchToProps = dispatch => bindActionCreators({
  // userLogin
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Register);


