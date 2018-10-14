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
        let { profile_img_url, first_name, last_name, user_title , short_description, long_description, tags } = this.props.member
        return (
            <Container>
                <Segment>
                    <Item.Group>
                        <Item>
                            <Item.Image floated='left' size='small' src={ profile_img_url } />
                            <Item.Content>
                                {/* Name */}
                                <Item.Header as='a' as='h2'>{ first_name } { last_name }</Item.Header>
                                <Item.Extra>
                                    { user_title }
                                </Item.Extra>
                                {/* Short description */}
                                <Item.Meta>{ short_description }</Item.Meta>
                                {/* Tags, etc */}
                                <Item.Extra>
                                    { tags.map(tag =>  <Label compact>{tag.tag_name}</Label>) }
                                </Item.Extra>
                                {/* Long description */}
                                <Item.Description>
                                    { long_description }
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
