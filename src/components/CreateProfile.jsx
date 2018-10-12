import React from 'react';
import { Form } from 'semantic-ui-react';

const createProfile = () => {
  return (
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
  )
}

export default createProfile