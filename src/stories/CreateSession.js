//React
import React from 'react';

import { DateInput, TimeInput } from 'semantic-ui-calendar-react';

//Semantic
import { Container, Form, Input } from 'semantic-ui-react';

import 'semantic-ui-css/semantic.min.css'

//Stories
import { storiesOf } from '@storybook/react';

storiesOf('Calendars/CreateSession', module)
  .add('default', () => (
    <Container>
        <Form>
            <Form.Group widths='equal'>
                <Form.Field>
                    <DateInput
                        label='Date:'
                        required
                        name="date"
                        placeholder="Date"
                        value=""
                        iconPosition="left"
                    />
                </Form.Field>
                <Form.Field>
                    <TimeInput
                        label='Time:'
                        required
                        name="time"
                        placeholder="Time"
                        value=""
                        iconPosition="left"
                    />
                </Form.Field>
                <Form.Field>
                    <TimeInput
                        label='Duration:'
                        required
                        name="time"
                        placeholder="Duration"
                        value=""
                        iconPosition="left"
                    />
                </Form.Field>
            </Form.Group>
        </Form>
    </Container>

))
