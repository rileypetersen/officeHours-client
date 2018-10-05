import React from 'react';
import { List } from 'semantic-ui-react';

const OrgListItem = ({ org }) => {
    console.log('this...?', org.joined)
    return (
        <List.Item>
            <List.Icon name='github' size='big' verticalAlign='middle' />
            <List.Content>
                <List.Header as='a'>{ org.name }</List.Header>
            </List.Content>
            { org.joined ? 'View Org' : 'Join Org' }
        </List.Item>
    )
}

export default OrgListItem
