import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import {  } from 'semantic-ui-react';
import { usersActions } from '../../state/actions';
import OrgProfile from './OrgProfile'
import UserProfile from './UserProfile'

const {  } = usersActions;

class Profile extends Component {
    constructor(props) {
        super(props)
    }

    componentDidMount = async () => {
    }

    render() {
        return (
            <div>
                { this.props.currentOrg ? <OrgProfile /> : <UserProfile />}
            </div>
        )
    }
};

const mapStateToProps = (state) => {
    return { 
        currentOrg: state.orgsReducers.currentOrg
    }
};

const mapDispatchToProps = (dispatch) => bindActionCreators({  }, dispatch);

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Profile));
