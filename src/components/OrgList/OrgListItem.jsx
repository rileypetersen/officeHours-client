import React from 'react';
import { List } from 'semantic-ui-react';

const OrgListItem = ({ org }) => {
    return (
        <List.Item>
            <List.Icon name='user' size='big' verticalAlign='middle' />
            <List.Content>
                <List.Header as='a'>{ org.name }</List.Header>
            </List.Content>
        </List.Item>
    )
}

export default OrgListItem
