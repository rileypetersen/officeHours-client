import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { Grid } from 'semantic-ui-react';
import SessionHost from './SessionHost'
import SessionDetails from './SessionDetails'
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

 <Container>

{/* Border */}
<Segment padded>

  {/* Arrangement */}
  <Grid stackable columns='equal' verticalAlign='top'>

    {/* Row - Main two sections */}
    <Grid.Row stretched>

        {/* Main left section */}
        <Grid.Column>

            {/* Main Profile layout*/}
            <Grid.Row>

            {/* Main profile */}
            { this.props.sessions.map((session, i) => <SessionHost key={ i } session={ session } />) }
        
            </Grid.Row>

        </Grid.Column>


        {/* Main right section */}        
        <Grid.Column>
            { this.props.sessions.map((session, i) => <SessionDetails key={ i } session={ session } />) }
        </Grid.Column>
  
  </Grid.Row>
</Grid>
</Segment>
</Container>

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