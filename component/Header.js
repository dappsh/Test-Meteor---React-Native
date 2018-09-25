import React, { Component } from 'react';
import {
    Container, Header, Left, Body, Text,
    Button, Icon, Title
} from 'native-base';


class head extends Component {
    render() {
        return (

            <Header style={{ backgroundColor: '#EE3124' }}>
                <Left><Button transparent onPress={this.props.fungsingBack}><Icon name='arrow-back' />
                </Button>
                </Left>
                <Body>
                    <Title> {this.props.judul} </Title>
                </Body>

            </Header>

        );
    }
}
export default head