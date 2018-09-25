import React, { Component } from 'react';
import { Image, AsyncStorage } from 'react-native'
import Header from './../component/Header';
import {
    Container, Content, Card, CardItem,
    Text, Button, Left, Body
} from 'native-base';
import Axios from 'axios'


class merchant extends Component {
    constructor() {
        super()
        this.state = {
            userTok: "",
            dataMerchant: []
        }
    }

    componentDidMount() {
        // Cek sudah login atau belum 
        console.log('MASUK KE MERCHANT')
        this.getDataMerchant();


    }

    getDataMerchant = () => {
        AsyncStorage.getItem('userToken', (err, result) => {
            console.log('USER TOKENnnnnnnnnnnn', result)
            if (result) {
                this.setState({ userTok: result })
                // alert('JALAN')
                // console.log('Cek user tokennya <3', this.state.userTok)

                let url = `https://serviceapi.myboost.id/canvasser/v1/merchant?page=1&limit=10`;
                //SET AUTHORIZATION
                let config = {
                    headers: { 'Authorization': `Bearer ${this.state.userTok}` }
                };

                Axios.get(url, config)
                    .then((getData) => {
                        // alert('Ajeng get data')
                        this.setState({ dataMerchant: getData.data.message.data })
                        console.log('result data', getData.data.message.data);
                    })
                    .catch((error) => {
                        console.log(error)
                    })

            }
        }

        );

    }


    render() {
        var teks = 'Merchant Name'

        const data = this.state.dataMerchant.map((data, index) => {
            let merchName = data.name;
            let merchAdd = data.merchant.address
            let merchPhoto = data.merchant.picture_1;

            return (
                <Card key={index}>
                    <CardItem >
                        <Left>
                            <Image source={{ uri: `${merchPhoto}` }}
                                style={{ height: 175, width: null, flex: 1 }} />
                        </Left>
                        <Body style={{
                            flexDirection: 'column',
                            justifyContent: 'space-between',
                            paddingLeft: 10
                        }}>
                            <Content>
                                <Text style={{ fontWeight: 'bold'}}>{merchName.toUpperCase()}</Text>
                                <Text>{merchAdd}</Text>
                                <Text>Distance</Text>
                            </Content>

                            <Button block  style={{ backgroundColor: "#EE3124" }}>
                                <Text> VISIT </Text>
                            </Button>
                        </Body>
                    </CardItem>
                </Card>



            )
        })


        return (
            <Container>
                <Header judul={teks} fungsingBack={() => this.props.navigation.goBack()} />
                
                <Content>
                    {data}
                </Content>
            </Container>

        );
    }
}
export default merchant