import React from 'react';
import { List } from 'semantic-ui-react';

const UserCard = ({ user }) => {
    return (
    <Card>
      <Card.Content>
        <Image floated='left' size='medium' src='/images/avatar/large/steve.jpg' />
        <Card.Header>Steve Sanders</Card.Header>
        <Card.Meta>Friends of Elliot</Card.Meta>
        <Card.Description>
          Steve wants to add you to the group <strong>best friends</strong>
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
          <Button basic color='green'>
            Approve
          </Button>        
      </Card.Content>
    </Card>
    )
}

export default OrgListItem
