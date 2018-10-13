import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { Button, Card, Container, Grid, Image, Item, Label, Segment } from 'semantic-ui-react';
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
            <Container>
                <Segment>
                    <Item.Group>
                        <Item>
                            <Item.Image floated='left' size='small' src='https://via.placeholder.com/160x160' />
                            <Item.Content>
                                {/* Name */}
                                <Item.Header as='a' as='h2'>{this.props.member.first_name} {this.props.member.last_name}</Item.Header>
                                {/* Short description */}
                                <Item.Meta>Product Manager at Amazon</Item.Meta>
                                {/* Tags, etc */}
                                <Item.Extra>
                                    <Label compact>Product</Label>
                                    <Label compact>Design</Label>
                                    <Label compact>Marketing</Label>
                                </Item.Extra>
                                {/* Long description */}
                                <Item.Description>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                </Item.Description>
                            </Item.Content>
                        </Item>
                    </Item.Group>
                </Segment>
            </Container>
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
