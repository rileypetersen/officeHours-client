import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { Card, Button, Image, Label } from 'semantic-ui-react';
import { orgsActions } from '../../state/actions';
const {  } = orgsActions;

class OrgProfile extends Component {
    constructor(props) {
        super(props)
    }

    componentDidMount = async () => {
    }

    render() {
        console.log(this.props.match.params)
        console.log('the org!', this.props.currentOrg)
        return (
        <div>
            <p>I'M AN ORG!</p>
            <Card>
                <Card.Content>
                    <Image floated='left' size='tiny' src='https://react.semantic-ui.com/images/avatar/large/steve.jpg' />
                    <Card.Header>Steve Sanders</Card.Header>
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
