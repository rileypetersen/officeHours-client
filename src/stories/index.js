//React
import React from 'react';

//Semantic 

import 'semantic-ui-css/semantic.min.css'
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
  Dropdown
} 
from 'semantic-ui-react';


//Stories
import { storiesOf } from '@storybook/react';

// Add-ons
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { setOptions } from '@storybook/addon-options'



//                //
//                //
//     Stories    //
//                //
//                //




 //Button
storiesOf('Button', module)
  .add('with text', () => 
    <Button onClick={action('clicked')}>Hello Button</Button>)
  .add('with some emoji', () => (
    <Button onClick={action('clicked')}>
      <span role="img" aria-label="so cool">
        😀 😎 👍 💯
      </span>
    </Button>
  ))
  .add('Primary', () => <Button primary>Test Primary</Button>)


storiesOf('Card', module)
.add('example card', () => (
  <Card>
    <Image src='https://via.placeholder.com/150x150' />
    <Card.Content>
      <Card.Header>Matthew</Card.Header>
      <Card.Meta>
        <span className='date'>Joined in 2015</span>
      </Card.Meta>
      <Card.Description>Matthew is a musician living in Nashville.</Card.Description>
    </Card.Content>
    <Card.Content extra>
      <a>
        <Icon name='user' />
        22 Friends
      </a>
    </Card.Content>
  </Card>
))

storiesOf('Profile', module)
.add('profile_card', () => (
  // Group Profile "card" 

    <Card>
      <Card.Content>
        <Image floated='left' size='tiny' src='https://react.semantic-ui.com/images/avatar/large/steve.jpg' />
        <Card.Header>Steve Sanders</Card.Header>
        <Card.Meta>Friends of Elliot</Card.Meta>
        <Card.Description>
          Steve wants to add you to the group <strong>best friends</strong>
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <div className='ui button'>
          <Button basic color='green'>
            Approve
          </Button>
        </div>
      </Card.Content>
    </Card>
))

storiesOf('session card', module)
.add('session card', () => (
  // 
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
))

var  panes = [
  { menuItem: 'Sessions', render: () => <Tab.Pane attached={false}><Button>Test2</Button></Tab.Pane> },
  { menuItem: 'Members', render: () => <Tab.Pane attached={false}>Tab 2 Content</Tab.Pane> },
  { menuItem: 'Admin', render: () => <Tab.Pane attached={false}>Tab 3 Content</Tab.Pane> },
]

storiesOf('tabs', module)
// .add('tabs', () => (
  .add('TabExampleSecondaryPointing', () => (
    <Tab menu={{ secondary: true, pointing: true }} panes={panes} />))


//Forms

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
