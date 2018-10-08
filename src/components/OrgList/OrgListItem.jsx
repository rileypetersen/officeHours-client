import React from 'react';
import { Item, Button, List } from 'semantic-ui-react';

const OrgListItem = ({ org }) => {
    return (
        <Item.Group>
            <Item>
                <Item.Image size='small' src='https://via.placeholder.com/300x300' />

                <Item.Content verticalAlign='middle'>
                    <Item.Header>{org.name}</Item.Header>
                    <Item.Description>{org.long_description}</Item.Description>
                </Item.Content>
                <Item.Content>
                    <Item.Extra>
                        <Button floated='right'>{org.joined ? 'View' : 'Join'}</Button>
                    </Item.Extra>
                </Item.Content>
            </Item>
        </Item.Group>
    )
}

export default OrgListItem
