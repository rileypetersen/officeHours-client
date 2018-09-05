import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Button, Form, Grid, Header, Image, Input, Message, Segment, TextArea } from 'semantic-ui-react';
import './Register.css';
// import { userRegister } from '../state/actions/auth';


class Register extends Component {
    state = {
        first_name: '',
        last_name: '',
        user_name: '',
        title: '',
        profile_img_url: '',
        short_description: '',
        long_description: '',
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
        this.props.userRegister(this.state, this.props.history);
    };

    render () {
        return (
            <div className='register-form-desktop'>
                <Grid textAlign='center' verticalAlign='middle'>
                    <Grid.Column>
                        <Header as='h2' textAlign='center'>
                            <Image src='/oh.jpg' /> Register your new account
                        </Header>
                        <Form size='large'>
                            <Segment raised>
                                <Form.Group widths='equal'>
                                    <Form.Input 
                                        required
                                        name='first_name'
                                        label='First name'
                                        placeholder='John'
                                        onChange={(e) => this.handleChange(e)}
                                    />
                                    <Form.Input
                                        required
                                        name='last_name'
                                        label='Last name'
                                        placeholder='Doe'
                                        onChange={(e) => this.handleChange(e)}
                                    />
                                </Form.Group>

                                <Form.Group widths='equal'>
                                    <Form.Input
                                        required 
                                        name='user_name'
                                        label='Username'
                                        fluid 
                                        icon='user'
                                        iconPosition='left' 
                                        placeholder='User.Name'
                                        onChange={(e) => this.handleChange(e)}
                                    />         

                                    <Form.Input
                                        required
                                        name='title'
                                        label='Title'
                                        fluid
                                        icon=''
                                        iconPosition='left'
                                        placeholder='title'
                                        onChange={(e) => this.handleChange(e)}
                                    />    
                                </Form.Group>

                                {/* <label>Profile Image URL</label>
                                    <Input
                                        name='profile_img_url'
                                        fluid
                                        label='http://' 
                                        placeholder='profile-img-url.com'
                                        onChange={ (e) => this.handleChange(e) }
                                    /> */}

                                <label>Brief Description</label>
                                    <Form.Input
                                        required
                                        name='short_description'
                                        control={TextArea}                    
                                        fluid
                                        icon=''
                                        iconPosition='left'
                                        placeholder='A brief snippet about you...'
                                        onChange={ (e) => this.handleChange(e) }
                                    />

                                {/* <label>In-Depth Description</label>                
                                    <Form.Input
                                        required
                                        name='long_description'
                                        control={TextArea}
                                        fluid
                                        icon=''
                                        iconPosition='left'
                                        placeholder='Tell us more about you...'
                                        onChange={ (e) => this.handleChange(e) }
                                    />

                                    <Input
                                        required
                                        name='linkedin_url'
                                        fluid
                                        label='https://www.linkedin.com/in/'
                                        icon='linkedin square'
                                        iconPosition='left'
                                        placeholder='john-doe-1234'
                                        onChange={ (e) => this.handleChange(e) }
                                    />
                                        
                                    <Input
                                        name='website_url'
                                        fluid
                                        label='http://' 
                                        placeholder='mysite.com' 
                                        onChange={ (e) => this.handleChange(e) }
                                    /> */}
                                <Form.Group widths='equal'>                                
                                    <label>Password</label>                
                                        <Form.Input
                                            required
                                            name='password'
                                            fluid
                                            icon='lock'
                                            iconPosition='left'
                                            placeholder='Password'
                                            type='password'
                                            onChange={ (e) => this.handleChange(e) }
                                        />

                                    <label>Re-Enter Password</label>                                
                                    <Form.Input
                                        required
                                        name='password2'
                                        fluid
                                        icon='lock'
                                        iconPosition='left'
                                        placeholder='Password'
                                        type='password'
                                        onChange={ (e) => this.handleChange(e) }
                                    />
                                </Form.Group>
                                

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


