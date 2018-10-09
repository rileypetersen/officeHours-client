import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import {  } from 'semantic-ui-react';
import { usersActions } from '../../state/actions';
const {  } = usersActions;

class UserProfile extends Component {
    constructor(props) {
        super(props)
    }

    componentDidMount = async () => {
    }

    render() {
        console.log(this.props.match.params)
        return (
        <div>

        </div>
        )
    }
};

const mapStateToProps = (state) => {
  	return {  }
};

const mapDispatchToProps = (dispatch) => bindActionCreators({  }, dispatch);

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(UserProfile));
