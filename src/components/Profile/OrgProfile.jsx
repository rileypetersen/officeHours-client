import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { Card, Button, Image, Label } from 'semantic-ui-react';
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
        // id: 1, organizer_id: 1, name: "WTIA", short_description: "Washington Technology Industry Association is a tr… of the technology community in Washington state.", long_description: "WTIA is an influential co-op of 800 tech companies…n and government leaders building a better world.", …}
        //     hosts_can_create_sessions true
        //     id 1
        //     logo_img_url "http /i1.wp.com/www.dkparker.com/wp-content/uploads/2018/04/wtia-startupclub-logo-800px.png?fit=800%2C274"
        //     long_description "WTIA is an influential co-op of 800 tech companies large and small. We are pragmatic partners with education and government leaders building a better world."
        //     name "WTIA"
        //     organizer_id 1
        //     short_description "Washington Technology Industry Association is a trade association unifying the voice of the technology community in Washington state."
        //     users (7) [{…}, {…}, {…}, {…}, {…}, {…}, {…}]
        //     website_url "http://www.washingtontechnology.org"
        console.log(this.props.match.params)
        console.log('the org!', this.props.currentOrg)
        return (
        <div>
            <Card>
                <Card.Content>
                    <Image floated='left' size='tiny' src={this.props.currentOrg.logo_img_url} />
                    <Card.Header>{this.props.currentOrg.name}</Card.Header>
                    <Card.Meta>{this.props.currentOrg.short_description}</Card.Meta>
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
            { <Tabs orgMembers={this.props.currentOrg.users} /> }
        </div>
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
