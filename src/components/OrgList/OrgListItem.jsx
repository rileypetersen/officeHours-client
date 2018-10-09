import React from 'react';
import { Item, Button } from 'semantic-ui-react';

const OrgListItem = ({ org, getOneOrg }) => {
    return (
        <Item onClick={ () => getOneOrg(org.id) } >
            <Item.Image size='small' src={ org.logo_img_url } />
            <Item.Content verticalAlign='middle'>
                <Item.Header>{ org.name }</Item.Header>
                <Item.Description>{ org.short_description }</Item.Description>
            </Item.Content>
            <Item.Content>
                <Item.Extra>
                    <Button floated='right'>{ org.joined ? 'Leave' : 'Join' }</Button>
                </Item.Extra>
            </Item.Content>
        </Item>
    )
}

export default OrgListItem
