//React
import React from 'react';

//Semantic 
import { Button, Card, Icon, Image, Label, Tab } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css'

//Stories
import { storiesOf } from '@storybook/react';

// Add-ons
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { setOptions } from '@storybook/addon-options'



storiesOf('Button', module)
  .add('with text', () => <Button onClick={action('clicked')}>Hello Button</Button>)
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

storiesOf('orgprofile', module)
.add('example org segment', () => (
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
  