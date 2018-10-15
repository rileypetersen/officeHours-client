import React from 'react';
import { Item, Button } from 'semantic-ui-react';

const OrgListItem = ({ org, getOneOrg, history, addOrgUser, userId }) => {
    return (
        <Item onClick={ () => getOneOrg(org.id, org.name, history) } >
            <Item.Image size='small' src={ org.logo_img_url } />
            <Item.Content verticalAlign='middle'>
                <Item.Header>
                    { org.name }
                </Item.Header>
                <Item.Description>
                    { org.short_description }
                </Item.Description>
            </Item.Content>
            <Item.Content>
                <Item.Extra>
                    <Button onClick={ () => addOrgUser(org.id, { user_id: userId, organization_id: org.id }) } floated='right'>{ org.joined ? 'Leave' : 'Join' }</Button>
                </Item.Extra>
            </Item.Content>
        </Item>
    )
}

export default OrgListItem
