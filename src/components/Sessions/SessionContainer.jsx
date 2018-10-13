import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { Card, Image, Grid, Label, Button } from 'semantic-ui-react';
import SessionCard from './SessionCard'
import { usersActions } from '../../state/actions';

const {  } = usersActions;

class SessionContainer extends Component {
    constructor(props) {
        super(props)
    }

    componentDidMount = async () => {
    }

    render() {
        return (
            <div>
                <Grid relaxed='very' columns={4}>
                    { this.props.sessions.map(session => <SessionCard session={session} />) }
                </Grid>
            </div>
        )
    }
};

const mapStateToProps = (state) => {
    return { 
        
    }
};

const mapDispatchToProps = (dispatch) => bindActionCreators({  }, dispatch);

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SessionContainer));