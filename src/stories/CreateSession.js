//React
import React from 'react';

import { DateInput, TimeInput } from 'semantic-ui-calendar-react';

//Semantic
import { Container, Form, Input, Button, Checkbox } from 'semantic-ui-react';

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
                        label='Choose a date:'
                        required
                        name="date"
                        placeholder="Date"
                        value=""
                        iconPosition="left"
                        />
                </Form.Field>
                <Form.Field>
                    <TimeInput
                        label='Choose a starting time:'
                        required
                        name="time"
                        placeholder="Time"
                        value=""
                        iconPosition="left"
                        />
                </Form.Field>
                <Form.Field>
                    <TimeInput
                        label='Choose a duration:'
                        name="time"
                        placeholder="Duration"
                        value=""
                        iconPosition="left"
                        />
                </Form.Field>
                <Form.Field>
                    <label>Location</label>
                    <input placeholder='Location' />
                </Form.Field>
            </Form.Group>
            <Form.Group>
                <Form.Field>
                    <Checkbox label='Would you also like to schedule a meeting?' />
                </Form.Field>
            </Form.Group>
            <Button type='submit'>Submit</Button>
        </Form>
    </Container>

))
