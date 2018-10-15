//React
import React from 'react';


//Semantic 
import { 
  Label, 
  Container,
  Item,
  Segment,
  Header,
  Divider,
  Image,
  Button,
  Icon
} 
from 'semantic-ui-react';

import 'semantic-ui-css/semantic.min.css'

//Stories
import { storiesOf } from '@storybook/react';

storiesOf('Session/SessionCard/SessionHost', module)
    .add('default', () =>(
      <Container>
        <Item.Group>
          <Item>
            <Item.Content>
              <Image floated='left' size='tiny' src='https://react.semantic-ui.com/images/avatar/large/steve.jpg' />
              <Header>
                Steve Sanders
                <Header.Subheader>Product Manager at Amazon</Header.Subheader>
              </Header>
              <Item.Meta>
                <Label size='tiny'>Product</Label>
                <Label size='tiny'>Design</Label>
                <Label size='tiny'>Marketing</Label>
              </Item.Meta>
              <Divider hidden />
              <Item.Description>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </Item.Description>
              <Item.Extra>
                <Button floated='right' primary>
                  Full Profile
                  <Icon name='right chevron' />
                </Button>
              </Item.Extra>
            </Item.Content>
          </Item>
        </Item.Group>
      </Container>
    ))


