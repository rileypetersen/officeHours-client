import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { Container, Form, Input, Button, Checkbox } from 'semantic-ui-react';
import { DateInput, TimeInput } from 'semantic-ui-calendar-react';
import { sessionsActions } from '../../state/actions';

const {  } = sessionsActions;

class CreateSession extends Component {
    constructor(props) {
        super(props)
    	state = {
            organization_id: null,
            organizer_id: null,
            host_id: null,
            date: '',
            location: '',
            start_time: '',
            duration: '',
            checked: false
    	};
    }

    handleChange = (event) => {
    	this.setState({ [event.target.name]: event.target.value });
    };

    toggle = () => this.setState({ checked: !this.state.checked });

    handleSubmit = async (event) => {
    	event.preventDefault();
    	await this.props.userLogin({
            organization_id: null,
            organizer_id: null,
            host_id: null,
            date: '',
            location: '',
            start_time: '',
            duration: '',
            checked: false
    	});
    };

// update this once our new sessions actions/models/reducers have been created...
    componentDidMount = async () => {
        this.setState({
            organization_id: null,
            organizer_id: null,
            host_id: null
        })
    }

    render() {
        return (
          <Container>
              <Form onSubmit={ this.handleLogin }>
                  <Form.Group widths='equal'>
                      <Form.Field>
                          <DateInput
                              label='Choose a date:'
                              required
                              name="date"
                              placeholder="Date"
                              iconPosition="left"
                              onChange={ (e) => this.handleChange(e) }
                              />
                      </Form.Field>
                      <Form.Field>
                          <TimeInput
                              label='Choose a starting time:'
                              required
                              name="start_time"
                              placeholder="Time"
                              iconPosition="left"
                              onChange={ (e) => this.handleChange(e) }
                              />
                      </Form.Field>
                      <Form.Field>
                          <TimeInput
                              label='Choose a duration:'
                              name="duration"
                              placeholder="Duration"
                              iconPosition="left"
                              onChange={ (e) => this.handleChange(e) }
                              />
                      </Form.Field>
                      <Form.Field>
                          <label>Location</label>
                          <input
                              name='location'
                              placeholder='Location'
                              onChange={ (e) => this.handleChange(e) }
                          />
                      </Form.Field>
                  </Form.Group>
                  <Form.Group>
                      <Form.Field>
                          <Checkbox
                              label='Would you also like to schedule a meeting?'
                              onChange={this.toggle}
                              checked={this.state.checked}
                          />
                      </Form.Field>
                  </Form.Group>
                  <Button animated='fade' color='purple' fluid size='large'>
                      <Button.Content visible>Submit</Button.Content>
                      <Button.Content hidden>SUBMIT</Button.Content>
                  </Button>
              </Form>
          </Container>
        )
    }
};

const mapStateToProps = (state) => {
    return {

    }
};

const mapDispatchToProps = (dispatch) => bindActionCreators({  }, dispatch);

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CreateSession));
