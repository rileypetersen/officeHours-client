import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { Item, List, Grid, Form, Segment } from 'semantic-ui-react';
import { orgsActions } from '../../state/actions';
import OrgListItem from './OrgListItem'
const { getAllOrgs } = orgsActions;

class OrgList extends Component {
    constructor(props) {
        super(props)
    }

    componentDidMount = async () => {
        await this.props.getAllOrgs(this.props.usersOrgs)
    }

    render() {
        return (
            <Grid textAlign='center' verticalAlign='middle'>
                <Grid.Column>
                    <Form size='large' onSubmit={ this.handleLogin }>
                        <Segment raised>
                            <Item.Group divided link>
                                { this.props.orgs.map((org, i) => < OrgListItem key={i} org={org} />) }
                            </Item.Group>
                        </Segment>
                    </Form>
                </Grid.Column>
            </Grid>
        )
    }
};

const mapStateToProps = (state) => {
  	return { showGetAllOrgsError: state.orgsReducers.showGetAllOrgsError, orgs: state.orgsReducers.orgs, usersOrgs: state.authReducers.user.organizations }
};

const mapDispatchToProps = (dispatch) => bindActionCreators({ getAllOrgs }, dispatch);

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(OrgList));
