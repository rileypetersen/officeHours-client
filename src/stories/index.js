//React
import React, { Component } from 'react';

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

import {
  DateInput,
  TimeInput,
  DateTimeInput,
  DatesRangeInput
} from 'semantic-ui-calendar-react';


//Stories
import { setAddon, storiesOf } from '@storybook/react';

// Add-ons
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

// Components
import { ProfilePage } from './ProfilePage';
import { SessionCard } from './SessionContainer';
import { SessionDetail } from './MeetingList';
import { SessionHost } from './SessionHost';
import { CreateSession } from './CreateSession';

//Profile Card
// storiesOf('SessionCardWide', module)
//   .add('default', () => (
//     <Container>
//       <Card centered fluid>
//         <Grid columns="equal" padded relaxed>
//           <Grid.Row divided="vertically">
//             <Grid.Column>
//               <Card.Content>
//                 <Image floated='left' size='tiny' src='https://react.semantic-ui.com/images/avatar/large/steve.jpg' />
//                 <Card.Header>Steve Sanders</Card.Header>
//                 <Card.Meta>Product Manager at Amazon</Card.Meta>
//                 <Card.Content extra>
//                   <Label size="tiny">Product</Label>
//                   <Label size="tiny">Design</Label>
//                   <Label size="tiny">Marketing</Label>
//                 </Card.Content>
//                 <Card.Description>
//                   Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
//                 </Card.Description>
//               </Card.Content>
//             </Grid.Column>
//             <Grid.Column>
//               <Card.Content>
//                 <Card.Header>October 31st</Card.Header>
//                 <Card.Meta>Galvanize Seattle -- 111 S Jackson St</Card.Meta>
//               </Card.Content>
//               <Card.Content extra>
//                 <Button basic color='green'>
//                   Approve
//                 </Button>
//               </Card.Content>
//             </Grid.Column>
//           </Grid.Row>
//         </Grid>
//       </Card>
//     </Container>
//   ))

storiesOf('SessionSegments2', module)
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
                {/* Main profile
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
                </Item.Group> */}
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
      
storiesOf('SessionCardStacked', module)
.add('SessionCardStacked', () => (
  <Card>
      <Card.Content>
        <Image floated='left' size='tiny' src='https://react.semantic-ui.com/images/avatar/large/steve.jpg' />
        <Card.Header>Steve Sanders</Card.Header>
        <Card.Meta>Friends of Elliot</Card.Meta>
        <Label size='mini' padded>Product</Label>
        <Label size='mini' padded>Design</Label>
        <Label size='mini' padded>Software</Label>
        <Card.Description>
          Steve wants to add you to the group <strong>best friends</strong>
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <Button color="green" size="mini" compact>12:00 AM</Button>
        <Button color="green" size="mini" compact>12:00 AM</Button>
        <Button color="green" size="mini" compact>12:00 AM</Button>
        <Button color="green" size="mini" compact>12:00 AM</Button>
      </Card.Content>
    </Card>
));

var panes = [
  { menuItem: 'Sessions', render: () => <Tab.Pane attached={false}><Button>Test2</Button></Tab.Pane> },
  { menuItem: 'Members', render: () => <Tab.Pane attached={false}>Tab 2 Content</Tab.Pane> },
  { menuItem: 'Admin', render: () => <Tab.Pane attached={false}>Tab 3 Content</Tab.Pane> },
]

storiesOf('tabs', module)
  .add('TabExampleSecondaryPointing', () => (
    <Tab menu={{ secondary: true, pointing: true }} panes={panes} />)),

storiesOf('createProfile', module)
.add('createProfile', () =>(
  <Container>
    <Form>
        <Form.Group widths='equal'>
          <Form.Input fluid label='First name' placeholder='First name' />
          <Form.Input fluid label='Last name' placeholder='Last name' />
        </Form.Group>
        <Form.Group widths='equal'>
          <Form.Input label='Title' placeholder='Product Designer at Amazon' />
          <Form.Input label='Linkedin' placeholder='http://www.linkedin.com/in/...' />
        </Form.Group>
        <Form.TextArea label='Bio' placeholder='Tell us more about you...' />
        <Form.Dropdown  label='Tags' placeholder='Tag' fluid multiple search selection options={[
          {key: "kills", value: 'kills', text: "kills"},
          {key: "Angular", value: 'Angular', text: "Angular"},
          {key: "CSS", value: 'CSS', text: "CSS"},
          {key: "Graphic", value: 'Graphic', text: "Graphic Design"},
          {key: "Ember", value: 'Ember', text: "Ember"},
          {key: "HTML", value: 'HTML', text: "HTML"},
          {key: "Information", value: 'Information', text: "Information Architecture"},
          {key: "Javascript", value: 'Javascript', text: "Javascript"},
          {key: "Mechanical", value: 'Mechanical', text: "Mechanical Engineering"},
          {key: "Meteor", value: 'Meteor', text: "Meteor"},
          {key: "NodeJS", value: 'NodeJS', text: "NodeJS"},
          {key: "Plumbing", value: 'Plumbing', text: "Plumbing"},
          {key: "Python", value: 'Python', text: "Python"},
          {key: "Rails", value: 'Rails', text: "Rails"},
          {key: "React", value: 'React', text: "React"},
          {key: "Kitchen", value: 'Kitchen', text: "Kitchen Repair"},
          {key: "Ruby", value: 'Ruby', text: "Ruby"},
          {key: "UI", value: 'UI', text: "UI Design"},
          {key: "User", value: 'User', text: "User Experience"}]}>
        </Form.Dropdown>
      <Button primary floated='right'>Submit</Button>
    </Form>
   </Container>
))

storiesOf('createSession', module)
.add('createSession', () =>(
  <Container>
    <Form>
        <Form.Group widths='equal'>
          <Form.Input fluid label='First name' placeholder='First name' />
          <Form.Input fluid label='Last name' placeholder='Last name' />
        </Form.Group>
        <Form.Group widths='equal'>
          <Form.Input label='Title' placeholder='Product Designer at Amazon' />
          <Form.Input label='Linkedin' placeholder='http://www.linkedin.com/in/...' />
        </Form.Group>
        <Form.TextArea label='Bio' placeholder='Tell us more about you...' />
        <Form.Dropdown  label='Tags' placeholder='Tag' fluid multiple search selection options={[
          {key: "kills", value: 'kills', text: "kills"},
          {key: "Angular", value: 'Angular', text: "Angular"},
          {key: "CSS", value: 'CSS', text: "CSS"},
          {key: "Graphic", value: 'Graphic', text: "Graphic Design"},
          {key: "Ember", value: 'Ember', text: "Ember"},
          {key: "HTML", value: 'HTML', text: "HTML"},
          {key: "Information", value: 'Information', text: "Information Architecture"},
          {key: "Javascript", value: 'Javascript', text: "Javascript"},
          {key: "Mechanical", value: 'Mechanical', text: "Mechanical Engineering"},
          {key: "Meteor", value: 'Meteor', text: "Meteor"},
          {key: "NodeJS", value: 'NodeJS', text: "NodeJS"},
          {key: "Plumbing", value: 'Plumbing', text: "Plumbing"},
          {key: "Python", value: 'Python', text: "Python"},
          {key: "Rails", value: 'Rails', text: "Rails"},
          {key: "React", value: 'React', text: "React"},
          {key: "Kitchen", value: 'Kitchen', text: "Kitchen Repair"},
          {key: "Ruby", value: 'Ruby', text: "Ruby"},
          {key: "UI", value: 'UI', text: "UI Design"},
          {key: "User", value: 'User', text: "User Experience"}]}>
        </Form.Dropdown>
      <Button primary floated='right'>Submit</Button>
    </Form>
   </Container>
))
