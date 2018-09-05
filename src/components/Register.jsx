import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react';
import './Register.css';
// import { userRegister } from '../state/actions/auth';


class Register extends Component {
  state = {
    email: '',
    password: ''
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  // User type for this kind of registering will ALWAYS be "member"
  handleLogin = event => {
    event.preventDefault();
    this.props.userLogin(this.state, this.props.history);
  };

  render () {
    return (
      <div className='login-form'>
        <Grid textAlign='center' verticalAlign='middle'>
          <Grid.Column>
            <Header as='h2' textAlign='center'>
              <Image src='/oh.jpg' /> Register
            </Header>
            <Form size='large'>
              <Segment raised>
                <Form.Input 
                    fluid 
                    icon='user' 
                    iconPosition='left' 
                    placeholder='User Name' 
                />
                <Form.Input 
                    fluid 
                    icon='user' 
                    iconPosition='left' 
                    placeholder='User Name' 
                />
                <Form.Input 
                    fluid 
                    icon='user' 
                    iconPosition='left' 
                    placeholder='User Name' 
                />
                <Form.Input
                    fluid
                    icon='lock'
                    iconPosition='left'
                    placeholder='Password'
                    type='password'
                />
                <Form.Input
                    fluid
                    icon=''
                    iconPosition='left'
                    placeholder='profile_img_url'
                />
                <Form.Input
                    fluid
                    icon=''
                    iconPosition='left'
                    placeholder='title'
                />
                <Form.Input
                    fluid
                    icon=''
                    iconPosition='left'
                    placeholder='short_description'
                />
                <Form.Input
                    fluid
                    icon=''
                    iconPosition='left'
                    placeholder='long_description'
                />
                <Form.Input
                    fluid
                    icon=''
                    iconPosition='left'
                    placeholder='linkedin_url'
                />
                <Form.Input
                    fluid
                    icon=''
                    iconPosition='left'
                    placeholder='website_url'
                />
                <Form.Input
                    fluid
                    icon=''
                    iconPosition='left'
                    placeholder='can_create_session'
                />

                <Button animated='fade' color='purple' fluid size='large'>
                    <Button.Content visible>Register</Button.Content>
                    <Button.Content hidden>REGISTER</Button.Content>
                </Button>
              </Segment>
            </Form>
            <Message>
              Alread have an account? <a href='/login'>Login</a>
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


