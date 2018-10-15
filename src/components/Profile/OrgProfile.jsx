import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { Container, Item, Label, Segment } from 'semantic-ui-react';
import Tabs from '../Tabs/Tabs'
import { orgsActions } from '../../state/actions';
const {  } = orgsActions;

class OrgProfile extends Component {
    constructor(props) {
        super(props)
    }

    componentDidMount = async () => {
        
    }

    render() {
        const { 
            logo_img_url,
            name,
            short_description,
            long_description,
            users,
            sessions 
        } = this.props.currentOrg
        
        return (
            <Container>
                <Segment>
                    <Item.Group>
                        <Item>
                            <Item.Image floated='left' size='small' src={ logo_img_url } />
                            <Item.Content>
                                <Item.Header as='a' as='h2'>
                                    { name }
                                </Item.Header>
                                <Item.Meta>
                                    { short_description }
                                </Item.Meta>
                                {/* Tags, etc */}
                                <Item.Extra>
                                    <Label compact>Product</Label>
                                    <Label compact>Design</Label>
                                    <Label compact>Marketing</Label>
                                </Item.Extra>
                                <Item.Description>
                                    { long_description }
                                </Item.Description>
                            </Item.Content>
                        </Item>
                    </Item.Group>
                </Segment>
                { <Tabs orgMembers={ users } sessions={ sessions } /> }
            </Container>
        )
    }
};

const mapStateToProps = (state) => {
    return { 
        currentOrg: state.orgsReducers.currentOrg
    }
};

const mapDispatchToProps = (dispatch) => bindActionCreators({  }, dispatch);

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(OrgProfile));
