import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react';
import './Login.css';
// import { userLogin } from '../state/actions/auth';


class Login extends Component {
	state = {
		email: '',
		password: ''
	};

	handleChange = event => {
		this.setState({ [event.target.name]: event.target.value });
	};
  
	handleLogin = event => {
		event.preventDefault();
		// this.props.userLogin(this.state, this.props.history);
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

const mapStateToProps = state => ({
  	// showLoginError: state.auth.showLoginError
});

const mapDispatchToProps = dispatch => bindActionCreators({
  	// userLogin
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Login);
