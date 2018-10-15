import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { Tab, Button } from 'semantic-ui-react';
import SessionContainer from '../Sessions/SessionContainer'
import ProfileContainer from '../Profile/ProfileContainer'
import { usersActions } from '../../state/actions';

const {  } = usersActions;


class Tabs extends Component {
    constructor(props) {
        super(props)
    }

    componentDidMount = async () => {

    }

    render() {
        const  panes = [
            { menuItem: 'Sessions', render: () => <Tab.Pane attached={false}> { <SessionContainer sessions={ this.props.sessions } /> } </Tab.Pane> },
            { menuItem: 'Members', render: () => <Tab.Pane attached={false}> { <ProfileContainer members={ this.props.orgMembers } /> } </Tab.Pane> },
            { menuItem: 'Admin', render: () => <Tab.Pane attached={false}>Admin stuff?</Tab.Pane> },
        ]
        return (
            <Tab grid={{ paneWidth: 12, tabWidth: 4}} menu={{ secondary: true, pointing: true }} panes={ panes } />
        )
    }
};

const mapStateToProps = (state) => {
    return { 
        
    }
};

const mapDispatchToProps = (dispatch) => bindActionCreators({  }, dispatch);

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Tabs));

