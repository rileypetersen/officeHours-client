import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { Card, Image, Grid, Label, Button } from 'semantic-ui-react';
import { usersActions } from '../../state/actions';

const {  } = usersActions;

class SessionCard extends Component {
    constructor(props) {
        super(props)
    }

    componentDidMount = async () => {
        
    }

    render() {
        let meetings = this.props.session.meetings || []
        let { date, location } = this.props.session
        let { profile_img_url, first_name, last_name } = this.props.session.host || { profile_img_url: 'https://avataaars.io/?avatarStyle=Circle&topType=LongHairNotTooLong&accessoriesType=Blank&hairColor=PastelPink&facialHairType=Blank&facialHairColor=BlondeGolden&clotheType=GraphicShirt&clotheColor=Black&graphicType=Resist&eyeType=WinkWacky&eyebrowType=SadConcernedNatural&mouthType=Default&skinColor=DarkBrown', first_name: 'Bob', last_name: 'Dole' }
        return (
            <Grid.Column>
                <Card>
                    <Card.Content>
                        <Image floated='left' size='tiny' src={ profile_img_url } />
                        <Card.Header> { first_name } { last_name } </Card.Header>
                        <Card.Meta> { location } </Card.Meta>
                        <Label size='mini' padded>Product</Label>
                        <Label size='mini' padded>Design</Label>
                        <Label size='mini' padded>Software</Label>
                    </Card.Content>
                    <Card.Content extra>
                        <Card.Meta> { date } </Card.Meta>
                        { meetings.length ? meetings.map((meeting, i) => <Button key={ i } color="green" size="mini" compact>{ meeting.location }</Button>) : <Button color="green" size="mini" compact>n/a</Button> }
                    </Card.Content>
                </Card>
            </Grid.Column>
        )
    }
};

const mapStateToProps = (state) => {
    return { 
        
    }
};

const mapDispatchToProps = (dispatch) => bindActionCreators({  }, dispatch);

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SessionCard));