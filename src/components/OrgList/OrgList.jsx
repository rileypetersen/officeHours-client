import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { Item, Grid, Form, Segment } from 'semantic-ui-react';
import OrgListItem from './OrgListItem'
import { orgsActions } from '../../state/actions';
const { getAllOrgs, getOneOrg, addOrgUser, removeOrgUser } = orgsActions;

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
                                { this.props.orgs ? 
                                    this.props.orgs.map((org, i) => <OrgListItem key={ i } history={ this.props.history } getOneOrg={ this.props.getOneOrg } addOrgUser={ this.props.addOrgUser } removeOrgUser={ this.props.removeOrgUser } userId={ this.props.userId } org={ org } />) 
                                : 
                                    null
                                }
                            </Item.Group>
                        </Segment>
                    </Form>
                </Grid.Column>
            </Grid>
        )
    }
};

const mapStateToProps = (state) => {
    return {
        showGetAllOrgsError: state.orgsReducers.showGetAllOrgsError,
        orgs: state.orgsReducers.orgs,
        getOneOrg: state.orgsReducers.getOneOrg,
        usersOrgs: state.authReducers.user.organizations,
        addOrgUser: state.orgsReducers.addOrgUser,
        removeOrgUser: state.orgsReducers.removeOrgUser,
        userId: state.authReducers.user.id
    }
};

const mapDispatchToProps = (dispatch) => bindActionCreators({ getAllOrgs, getOneOrg, addOrgUser, removeOrgUser }, dispatch);

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(OrgList));
