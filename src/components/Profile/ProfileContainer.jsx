import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { Card, Image, Grid, Label, Button } from 'semantic-ui-react';
import UserProfile from './UserProfile'
import { usersActions } from '../../state/actions';

const {  } = usersActions;

class ProfileContainer extends Component {
    constructor(props) {
        super(props)
    }

    componentDidMount = async () => {
    }

    render() {
        return (
            <div>
                <Grid relaxed='very' columns={4}>
                    { this.props.members.map((member, i) => <UserProfile key={ i } member={member} />) }
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ProfileContainer));