import React, { Component } from 'react';
import { TouchableOpacity } from 'react-native'
import {
    Container,
    Content,
    Header,
    FooterTab,
    Footer,
    Text,
    Left,
    Button,
    Icon,
} from 'native-base';
import Carousel from '../component/CarouselHome'
import { Col, Grid } from 'react-native-easy-grid';


class bottomNav extends Component {
    render() {
        return (

            <Container>
                {/* header search */}
                <Header style={{ backgroundColor: '#EE3124', justifyContent: 'flex-start' }}>
                    <Left><Text style={{ color: "white" }}> PRETEST RN </Text></Left>
                </Header>
                <Carousel />
                {/* <Content>                
 
                </Content> */}

                <Content style={{ fontSize: 12 }}>
                    <Grid>

                        <Col onPress={() => this.props.navigation.navigate('Merch')} style={{ height: 100, alignItems: 'center', justifyContent: 'center' }}>
                            <Icon name="home" />
                            <Text style={{ fontSize: 12 }}> Merchat </Text>
                        </Col>
                        <Col style={{ height: 100, alignItems: 'center', justifyContent: 'center' }}>
                            <Icon name="calculator" />
                            <Text style={{ fontSize: 12 }}> Simulasi Kredit </Text>
                        </Col>
                        <Col style={{ height: 100, alignItems: 'center', justifyContent: 'center' }}>
                            <Icon name="grid" />
                            <Text style={{ fontSize: 12 }}> Kredit </Text>
                        </Col>
                    </Grid>
                    <Grid>
                        <Col style={{ height: 100, alignItems: 'center', justifyContent: 'center' }}>
                            <Icon name="cash" />
                            <Text style={{ fontSize: 12 }}> Cash In </Text>
                        </Col>
                        <Col style={{ height: 100, alignItems: 'center', justifyContent: 'center' }}>
                            <Icon name="paper" />
                            <Text style={{ fontSize: 12 }}> Bayar Tagihan </Text>
                        </Col>
                        <Col style={{ height: 100, alignItems: 'center', justifyContent: 'center' }}>
                            <Icon name="chatboxes" />
                            <Text style={{ fontSize: 12 }}> Contact Care </Text>
                        </Col>
                    </Grid>
                </Content>

                <Footer style={{ color: 'white' }}>
                    <FooterTab style={{ backgroundColor: '#EE3124' }}>
                        {/* button home */}
                        <Button vertical ><Icon name="home" style={{ color: 'black' }} />
                            <Text style={{ color: 'white' }}> Beranda </Text></Button>
                        {/* button help */}
                        <Button vertical ><Icon name="help" style={{ color: 'white' }} />
                            <Text style={{ color: 'white' }}> Help </Text></Button>
                        {/* button profile */}
                        <Button vertical onPress={() => this.props.navigation.navigate('Profile')}><Icon style={{ color: 'white' }} active name="person" />
                            <Text style={{ color: 'white' }}> Account </Text></Button>
                    </FooterTab>
                </Footer>
            </Container>

        )
    }
}
export default bottomNav;

