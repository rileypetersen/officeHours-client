import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { Card, Grid, Image, Button, Label } from 'semantic-ui-react';
import { usersActions } from '../../state/actions';
const {  } = usersActions;

class UserProfile extends Component {
    constructor(props) {
        super(props)
    }

    componentDidMount = async () => {
    }

    render() {
        console.log(this.props.member)
        return (
            <Grid.Column>
            <Card>
                <Card.Content>
                    <Image floated='left' size='tiny' src='https://react.semantic-ui.com/images/avatar/large/steve.jpg' />
                    <Card.Header>{this.props.member.first_name} {this.props.member.last_name}</Card.Header>
                    <Card.Meta>Friends of Elliot</Card.Meta>
                    <Label size='mini' padded>Product</Label>
                    <Label size='mini' padded>Design</Label>
                    <Label size='mini' padded>Software</Label>
                    <Card.Description>
                        Steve wants to add you to the group <strong>best friends</strong>
                    </Card.Description>
                </Card.Content>
                <Card.Content extra>
                    <Button color="green" size="mini" compact>12:00 AM</Button>
                    <Button color="green" size="mini" compact>12:00 AM</Button>
                    <Button color="green" size="mini" compact>12:00 AM</Button>
                    <Button color="green" size="mini" compact>12:00 AM</Button>
                </Card.Content>
            </Card>
        </Grid.Column>
        )
    }
};

const mapStateToProps = (state) => {
    return { 
        currentUser: state.usersReducers.currentUser
    }
};

const mapDispatchToProps = (dispatch) => bindActionCreators({  }, dispatch);

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(UserProfile));
