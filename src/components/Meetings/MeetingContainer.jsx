import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { Grid } from 'semantic-ui-react';
import MeetingCard from './MeetingCard'
import { usersActions } from '../../state/actions';

const {  } = usersActions;

class MeetingContainer extends Component {
    constructor(props) {
        super(props)
    }

    componentDidMount = async () => {
        
    }

    render() {
        return (
            <div>
                <Grid relaxed='very' columns={ 3 }>
                    { this.props.meetings.map((meeting, i) => <MeetingCard key={ i } meeting={ meeting } />) }
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MeetingContainer));