import React, { Component } from 'react';
import { Image, ScrollView, AsyncStorage, TouchableOpacity } from 'react-native'
import Header from './../component/Header';
import {
    Container, View, Text, Content, Button, Icon, Left, Body, Right, Title
} from 'native-base';
import Axios from 'axios'



class profile extends Component {
    constructor() {
        super()
        this.state = { dataUser: [] }
    }


    componentDidMount() {
        // Cek sudah login atau belum 
        console.log('MASUK KE MERCHANT')
        this.getDataUser();


    }

    getDataUser = () => {
        AsyncStorage.getItem('userToken', (err, result) => {
            console.log('USER TOKEN PAGE PROFILE', result)
            if (result) {
                this.setState({ userTok: result })
                alert('JALAN')
                console.log('Cek user tokennya <3', this.state.userTok)

                let url = `https://serviceapi.myboost.id/canvasser/v1/profile`;
                //SET AUTHORIZATION
                let config = {
                    headers: { 'Authorization': `Bearer ${this.state.userTok}` }
                };

                Axios.get(url, config)
                    .then((getData) => {
                        alert('Ajeng get data')
                        this.setState({
                            userName: getData.data.message.data.name,
                            // userIdCard: getData.data.message.data.cavasser
                            // coordinator: getData.data.message.data.cavasser.user_coordinator.name,
                            userPhone: getData.data.message.data.phone,
                            userEmail: getData.data.message.data.email,
                            userStatus: 'Active'

                        })
                    })
                    .catch((error) => {
                        console.log(error)
                    })

            }
        }

        );

    }


    // logOut = () => {
    //     AsyncStorage.removeItem('userToken')
    //     // this.props.navigation.navigate('Login')
    // }

    render() {
        var teks = 'Profile'

        const { userName, userIdCard, coordinator, userPhone, userStatus, userEmail } = this.state

        // return (

        //     <Content>
        //                 <Text>{userName}</Text>
        //                 <Text>{userIdCard}</Text>
        //                 <Text>{userPhone}</Text>
        //                 <Text>{userEmail}</Text>
        //                 <Text noted>Status</Text>
        //                 <Text>{userStatus}</Text>
        //                 <Text noted>Coordinator</Text>
        //                 <Text>{coordinator}</Text>
        //             </Content>

        // )
        // })





        return (
            <Container>

                <Header judul={teks} fungsingBack={() => this.props.navigation.goBack()} />


                <View style={{
                    flex: 1,
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>



                    {/* {data} */}
                    {/* <Text>{userName}</Text> */}
                    <Text>{userName}</Text>
                    <Text>{userIdCard}</Text>
                    <Text>{userPhone}</Text>
                    <Text>{userEmail}</Text>
                    <Text noted>Status</Text>
                    <Text>{userStatus}</Text>
                    <Text noted>Coordinator</Text>
                    <Text>{coordinator}</Text>

                    <Button style={{ backgroundColor: '#EE3124' }}><Text>EDIT PROFILE</Text></Button>
                    <Text style={{ color: '#EE3124' }}>CHANGE PASSWORD</Text>


                    <TouchableOpacity ><Text style={{ color: '#EE3124' }}>SIGN OUT</Text></TouchableOpacity>


                </View>




            </Container>

        );
    }
}
export default profile