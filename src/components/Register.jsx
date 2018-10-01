import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { Button, Form, Grid, Header, Image, Message, Segment, Transition } from 'semantic-ui-react';
import './Register.css';
import { authActions } from '../state/actions';
const { userRegister } = authActions;

class Register extends Component {
    state = {
        first_name: 'tester',
        last_name: 'test',
        email: 'test5@test.com',
        password: 'test',
        password2: 'test'
    };

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    };

    handleRegister = async (event) => {
        event.preventDefault();
        // this.props.userRegister(this.state, this.props.history);
        if (this.state.password !== this.state.password2) console.log('must match!') 
		await this.props.userRegister(this.state, this.props.history);
		if (this.props.showRegisterSuccess) setTimeout(() => this.props.history.push('/login'), 2000);
    };

    componentDidMount() {
		console.log('mounting')
		// setTimeout(() => this.setState({ visible: true }), 1);
	}

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
                                    value="tester"
                                />
                                <Form.Input
                                    required
                                    name='last_name'
                                    label='Last name'
                                    placeholder='Doe'
                                    onChange={ (e) => this.handleChange(e) }
                                    value="test"
                                />
                                <Form.Input
                                    required 
                                    name='email'
                                    label='Email'
                                    iconPosition='left' 
                                    placeholder='john.doe@email.com'
                                    onChange={ (e) => this.handleChange(e) }
                                    value="test1@test.com"
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
                                    value="test"
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
                                    value="test"
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

                        { this.props.showRegisterSuccess ? <Message
								success
								content='Register successful'
                            /> : null }

                        { this.props.showRegisterError ? <Message
								error
								content={`${this.props.registerErrorMessage}...`}
                            /> : null }
                            
                    </Grid.Column>
                </Grid>
            </div>
        );
    };
};

const mapStateToProps = (state) => {
  return { showRegisterSuccess: state.authReducers.showRegisterSuccess, showRegisterError: state.authReducers.showRegisterError, registerErrorMessage: state.authReducers.registerErrorMessage }
};

const mapDispatchToProps = (dispatch) => bindActionCreators({ userRegister }, dispatch);

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Register));