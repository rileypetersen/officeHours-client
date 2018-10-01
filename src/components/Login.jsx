import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { Button, Form, Grid, Header, Image, Message, Segment, Transition } from 'semantic-ui-react';
import './Login.css';
import { authActions } from '../state/actions';
const { userLogin } = authActions;

class Login extends Component {
	state = {
		email: 'test@test.com',
		password: 'test'
	};

	handleChange = (event) => {
		this.setState({ [event.target.name]: event.target.value });
	};

	componentDidMount() {
		console.log('mounting')
		// setTimeout(() => this.setState({ visible: true }), 1);
	}
  
	handleLogin = async (event) => {
		event.preventDefault();
		await this.props.userLogin(this.state);
		if (this.props.isLoggedIn && !this.props.showLoginError) {
			this.props.history.push('/home');
		}
	};

	render () {
		return (
			<div className='login-form-desktop'>
				<Grid textAlign='center' verticalAlign='middle'>
					<Grid.Column>
						<Header as='h2' textAlign='center'>
							<Image src='/oh.jpg' /> Login to your account
						</Header>
						<Form size='large' onSubmit={ this.handleLogin }>
						<Segment raised>
							<Form.Input
								fluid
								required
								label='Email'
								name='email'
								icon='user' 
								iconPosition='left' 
								placeholder='john.doe@email.com'
								onChange={ (e) => this.handleChange(e) }
							/>
							<Form.Input
								fluid
								required
								label='Password'
								name='password'
								icon='lock'
								iconPosition='left'
								placeholder='*******'
								type='password'
								onChange={ (e) => this.handleChange(e) }                  
							/>
							<Button animated='fade' color='purple' fluid size='large'>
								<Button.Content visible>Login</Button.Content>
								<Button.Content hidden>LOGIN</Button.Content>
							</Button>
						</Segment>
						</Form>
						<Message>
							New to Office Hours? <a href='/register'>Register</a>
						</Message>

						{ this.props.showLoginError ? <Message
								error
								content='Incorrect email and/or password...'
							/> : null }

					</Grid.Column>
				</Grid>
			</div>
		);
	};
};

const mapStateToProps = (state) => {
  	return { showLoginError: state.authReducers.showLoginError, isLoggedIn: state.authReducers.isLoggedIn }
};

const mapDispatchToProps = (dispatch) => bindActionCreators({ userLogin }, dispatch);

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Login));
