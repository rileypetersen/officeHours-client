//React
import React from 'react';

//Semantic 
import { 
  Label, 
  Container,
  Item,
  Header,
  Segment} 
from 'semantic-ui-react';

import 'semantic-ui-css/semantic.min.css'

//Stories
import { storiesOf } from '@storybook/react';


storiesOf('Session/SessionCard/SessionDetail', module)
  .add('default', () => (
    <Container>
      <Header>Thursday, October 31st
        <Header.Subheader>Galvanize Seattle, 111 S Jackson St Seattle Wa</Header.Subheader>
      </Header>
    </Container>
      
))