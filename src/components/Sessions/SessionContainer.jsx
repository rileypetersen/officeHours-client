import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { Grid, Segment, Container, Divider } from 'semantic-ui-react';
import SessionHost from './SessionHost'
import SessionDetails from './SessionDetails'
import Session from './Session'
import { usersActions } from '../../state/actions';

const {  } = usersActions;

class SessionContainer extends Component {
    constructor(props) {
        super(props)
    }

    componentDidMount = async () => {
    }

    render() {
        console.log(this.props.sessions)
        return (
            <Container>            
                        {this.props.sessions.map((session, i) => <Session key={i} session={session} />)}
                
            </Container>   
        )
    }
};

const mapStateToProps = (state) => {
    return { 
        
    }
};

const mapDispatchToProps = (dispatch) => bindActionCreators({  }, dispatch);

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SessionContainer));