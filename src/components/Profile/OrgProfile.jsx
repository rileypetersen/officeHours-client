import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import {  } from 'semantic-ui-react';
import { orgsActions } from '../../state/actions';
const {  } = orgsActions;

class OrgProfile extends Component {
    constructor(props) {
        super(props)
    }

    componentDidMount = async () => {
    }

    render() {
        console.log(this.props.match.params)
        return (
        <div>
            <p>I'M AN ORG!</p>
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(OrgProfile));
