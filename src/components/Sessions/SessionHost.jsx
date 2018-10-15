import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { Card, Image, Grid, Label, Button, Item, Header, Segment, Container, Divider, Popup } from 'semantic-ui-react';
import { usersActions } from '../../state/actions';

const {  } = usersActions;

class SessionHost extends Component {
    constructor(props) {
        super(props)
    }

    componentDidMount = async () => {

    }

    render() {
        let meetings = this.props.session.meetings || []
        let { date, location } = this.props.session
        let profile_img_url = this.props.session.host.profile_img_url || 'http://profilepicturesdp.com/wp-content/uploads/2018/06/default-profile-picture-circle-5.png'
        let first_name = this.props.session.host.first_name || 'HOST'
        let last_name = this.props.session.host.last_name || 'NEEDED'
        let tags = this.props.session.host.tags || 'product'
        let short_description = this.props.session.host.short_description || 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'
        let long_description = this.props.session.host.long_description || 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'

        return (
            <Item.Group>
                  <Item>
                  <Item.Image src= { profile_img_url } size='tiny' />
                    <Item.Content >
                    <Header>
                      { first_name } { last_name }
                    <Header.Subheader> { short_description }</Header.Subheader>
                      </Header>
                      <Item.Meta>
                        <Label size='tiny'>Product</Label>
                        <Label size='tiny'>Design</Label>
                        <Label size='tiny'>Marketing</Label>
                        <Label size='tiny'>Product</Label>
                        <Label size='tiny'>Design</Label>
                        <Label size='tiny'>Marketing</Label>
                      </Item.Meta>
                   {/* <Item.Description>
                      
                      </Item.Description>
                      <Button floated='right' primary>
                          Full Profile
                          <Icon name='right chevron' />
                        </Button> */}
                      <Item.Extra>
                      <Popup
                        trigger={<Button content='Full Bio' size='mini' basic color='blue' compact/>}
                        content={ long_description }
                        on='hover'
                        hideOnScroll
                        />
                      </Item.Extra>
                    </Item.Content>
                  </Item>
                </Item.Group>

        )
    }
};

const mapStateToProps = (state) => {
    return {

    }
};

const mapDispatchToProps = (dispatch) => bindActionCreators({  }, dispatch);

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SessionHost));