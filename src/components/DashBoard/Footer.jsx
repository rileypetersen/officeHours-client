import React, { Component } from 'react';
import { Container, Divider, Image, List, Segment } from 'semantic-ui-react';
import './Footer.css';

class Footer extends Component {
    constructor(props) {
        super(props)
    };

    render() {
        return (
            <div className='footer-desktop'>
                <Segment inverted vertical>
                    <Container textAlign='center'>
                        <Image centered size='mini' src='/oh.png' />
                        <Divider inverted section />
                        <List horizontal inverted divided link>
                        <List.Item as='a' href='#'>
                            Site Map
                        </List.Item>
                        <List.Item as='a' href='#'>
                            Contact Us
                        </List.Item>
                        <List.Item as='a' href='#'>
                            Terms and Conditions
                        </List.Item>
                        <List.Item as='a' href='#'>
                            Privacy Policy
                        </List.Item>
                        </List>
                    </Container>
                </Segment>
            </div>
        );
    };
};
  

export default Footer;



