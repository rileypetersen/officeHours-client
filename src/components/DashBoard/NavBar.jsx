import React, { Component } from 'react'
import { Container, Divider, Dropdown, Grid, Header, Image, List, Menu, Segment } from 'semantic-ui-react'

class NavBar extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <Menu fixed='top' inverted>
                    <Container>
                        <Menu.Menu>
                            <Dropdown item simple text='Account'>
                                <Dropdown.Menu>
                                    <Dropdown.Item>Profile</Dropdown.Item>
                                    <Dropdown.Item>Calendar</Dropdown.Item>                                    
                                    <Dropdown.Item>Logout</Dropdown.Item>
                                    <Dropdown.Divider />
                                    <Dropdown.Header>Current Organization</Dropdown.Header>
                                    <Dropdown.Item>Current Org Calendar</Dropdown.Item>
                                    <Dropdown.Item direction='left'>
                                        <i className='dropdown icon' />
                                        <span className='text'>Your Organizations</span>
                                        <Dropdown.Menu direction='left'>
                                            <Dropdown.Item>Org #1</Dropdown.Item>
                                            <Dropdown.Item>Org #2</Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </Menu.Menu>
                        <Menu.Item position='right' as='a' href='/home' header>
                            Office Hours
                        </Menu.Item>
                    </Container>
                </Menu>
            </div>
        )
    }
}
  

export default NavBar