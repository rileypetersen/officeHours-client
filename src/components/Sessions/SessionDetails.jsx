import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { Item, Header, Label, Button } from 'semantic-ui-react';
import { usersActions } from '../../state/actions';
import moment from 'moment'

const {  } = usersActions;

class SessionDetails extends Component {
    constructor(props) {
        super(props)
    }

    componentDidMount = async () => {
        
    }

    render() {
        console.log(this.props.session)
        let meetings = this.props.session.meetings || []
        let { date, location } = this.props.session
        
        let profile_img_url = this.props.session.host.profile_img_url || 'http://profilepicturesdp.com/wp-content/uploads/2018/06/default-profile-picture-circle-5.png'
        let first_name = this.props.session.host.first_name || 'HOST'
        let last_name = this.props.session.host.last_name || 'NEEDED' 
        return (
            <Item.Group>
                <Item>
                <Item.Content>
                
                <Header>
                { moment(date).format('dddd, MMMM Do') }
                <Header.Subheader> { location }</Header.Subheader>
                </Header>
                
                <Item.Extra>
                { meetings.length ? meetings.map((meeting, i) => <Button key={ i } color="green" size="mini" compact>{ moment(meetings.start_time).format('h:mm a')}</Button>) : <Button color="green" size="mini" compact>n/a</Button> }
                </Item.Extra>
              </Item.Content>
            </Item>
          </Item.Group>
        )
    }
};

const mapStateToProps = (state) => {
    return { 
        
    }
};

const mapDispatchToProps = (dispatch) => bindActionCreators({  }, dispatch);

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SessionDetails));