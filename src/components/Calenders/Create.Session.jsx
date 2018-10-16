import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { Form, Input } from 'semantic-ui-react';
import { usersActions } from '../../state/actions';

const {  } = usersActions;

class CreateSession extends Component {
    constructor(props) {
        super(props)
    }

    componentDidMount = async () => {

    }

    render() {
        return (
            <Form>
              <Form.Field required>
                <label>Last name</label>
                <Input placeholder='Full name' />
              </Form.Field>
            </Form>
        )
    }
};

const mapStateToProps = (state) => {
    return {

    }
};

const mapDispatchToProps = (dispatch) => bindActionCreators({  }, dispatch);

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CreateSession));
