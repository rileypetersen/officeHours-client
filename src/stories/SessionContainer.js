//React
import React from 'react';


//Semantic 
import { 
  Button, 
  Card, 
  Icon, 
  Image, 
  Label, 
  Tab, 
  Form,
  Input,
  Container,
  select,
  Dropdown,
  Item,
  Segment,
  Grid,
  Divider,
  Header,
  Accordion
} 
from 'semantic-ui-react';

import 'semantic-ui-css/semantic.min.css'


//Stories
import { storiesOf } from '@storybook/react';

import SessionHost from './SessionHost';
import SessionDetail from './MeetingList';

// class SessionCard extends Component {
//   constructor(props) {
//       super(props)
//   }


storiesOf('Session/SessionCard', module)
  .add('default', () => (
    
  
    <Container>

      {/* Border */}
      <Segment padded>

        {/* Arrangement */}
        <Grid stackable columns='equal' verticalAlign='top'>

          {/* Row - Main two sections */}
          <Grid.Row stretched>

            {/* Main left section */}
            <Grid.Column>

              {/* Main Profile layout*/}
              <Grid.Row>
      
                {/* Main profile */}
                
              
                
                <Item.Group>
                  <Item>
                    <Item.Content>
                      <Image floated='left' size='tiny' src= 'https://react.semantic-ui.com/images/avatar/large/steve.jpg'/>
                      <Header>
                      { first_name } { last_name }
                    <Header.Subheader> { short_description }</Header.Subheader>
                      </Header>
                      <Item.Meta>
                        <Label size='tiny'>Product</Label>
                        <Label size='tiny'>Design</Label>
                        <Label size='tiny'>Marketing</Label>
                      </Item.Meta>
                      <Divider hidden />
                      <Item.Description>
                      { long_description }
                      </Item.Description>
                      <Item.Extra>
                        {/* <Button floated='right' primary>
                          Full Profile
                          <Icon name='right chevron' />
                        </Button> */}
                      </Item.Extra>
                    </Item.Content>
                  </Item>
                </Item.Group>


              </Grid.Row>
              <Grid.Row>
      {/* Accordion */}
        </Grid.Row>
        </Grid.Column>
        <Grid.Column>
          session details
        </Grid.Column>
        
        </Grid.Row>
    </Grid>
    </Segment>
    </Container>
  ))
      
