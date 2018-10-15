import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { Grid, Segment, Container, Divider } from 'semantic-ui-react';
import SessionHost from './SessionHost'
import SessionDetails from './SessionDetails'
import { usersActions } from '../../state/actions';

const {  } = usersActions;

class Session extends Component {
    constructor(props) {
        super(props)
    }

    componentDidMount = async () => {
    }

    render() {
        return (           
                <Container>
                       <Segment>
                        <Grid stackable columns='equal' divided>
                            <Grid.Row >
                                <Grid.Column>                                    
                                    <SessionHost session={this.props.session} />
                                </Grid.Column>
                                
                                <Grid.Column>
                                    <SessionDetails session={this.props.session} />
                                </Grid.Column>
                            </Grid.Row>

                        </Grid>
                    </Segment>
                    <Divider hidden/>
                </Container>
          
        )
    }
};

const mapStateToProps = (state) => {
    return { 
        
    }
};

const mapDispatchToProps = (dispatch) => bindActionCreators({  }, dispatch);

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Session));