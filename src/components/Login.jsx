import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react';
import './Login.css';
import { usersActions } from '../state/actions';
console.log(usersActions)
const { loginUser } = usersActions;

class Login extends Component {
	state = {
		email: '',
		password: ''
	};

	handleChange = (event) => {
		this.setState({ [event.target.name]: event.target.value });
	};
  
	handleLogin = async (event) => {
		console.log(this.props)
		event.preventDefault();
		await this.props.loginUser(this.state);
			if (this.props.isLoggedIn && !this.props.showLoginError) this.props.history.push("/home");
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
					</Grid.Column>
				</Grid>
			</div>
		);
	};
};

const mapStateToProps = (state) => {
  	return { showLoginError: state.showLoginError, isLoggedIn: state.isLoggedIn }
};

const mapDispatchToProps = (dispatch) => bindActionCreators({ loginUser }, dispatch);

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Login));
