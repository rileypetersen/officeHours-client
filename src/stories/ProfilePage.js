//React
import React from 'react';


//Semantic 
import { 
  Label, 
  Container,
  Item,
  Segment} 
from 'semantic-ui-react';

import 'semantic-ui-css/semantic.min.css'

//Stories
import { storiesOf } from '@storybook/react';


storiesOf('ProfilePage', module)
  .add('Profile', () => (
    <Container>
      <Segment>
        <Item.Group>      
          <Item>
          <Item.Image floated='left' size='small' src='https://via.placeholder.com/160x160' />
            <Item.Content>
              {/* Name */}
              <Item.Header as='a' as='h2'>Header</Item.Header> 
              {/* Short description */}
              <Item.Meta>Product Manager at Amazon</Item.Meta>
              {/* Tags, etc */}
              <Item.Extra>
                <Label compact>Product</Label>
                <Label compact>Design</Label>
                <Label compact>Marketing</Label>
              </Item.Extra>
              {/* Long description */}
              <Item.Description>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </Item.Description>         
            </Item.Content>
          </Item>
          </Item.Group>
        </Segment>
      </Container>
      
))

