import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { List } from 'semantic-ui-react';
import { orgsActions } from '../../state/actions';
const { getAllOrgs } = orgsActions;

class OrgList extends Component {
    constructor(props) {
        super(props)
    }

    componentDidMount = async () => {
        await this.props.getAllOrgs()
    }

    render() {
        return (
          <List divided relaxed>
            <List.Item>
              <List.Icon name='github' size='large' verticalAlign='middle' />
              <List.Content>
                <List.Header as='a'>Semantic-Org/Semantic-UI</List.Header>
                <List.Description as='a'>Updated 10 mins ago</List.Description>
              </List.Content>
            </List.Item>
            <List.Item>
              <List.Icon name='github' size='large' verticalAlign='middle' />
              <List.Content>
                <List.Header as='a'>Semantic-Org/Semantic-UI-Docs</List.Header>
                <List.Description as='a'>Updated 22 mins ago</List.Description>
              </List.Content>
            </List.Item>
            <List.Item>
              <List.Icon name='github' size='large' verticalAlign='middle' />
              <List.Content>
                <List.Header as='a'>Semantic-Org/Semantic-UI-Meteor</List.Header>
                <List.Description as='a'>Updated 34 mins ago</List.Description>
              </List.Content>
            </List.Item>
          </List>
        )
    }
};

const mapStateToProps = (state) => {
  	return { showGetAllOrgsError: state.orgsReducers.showGetAllOrgsError }
};

const mapDispatchToProps = (dispatch) => bindActionCreators({ getAllOrgs }, dispatch);

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(OrgList));
