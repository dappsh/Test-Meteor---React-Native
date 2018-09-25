import React, { Component } from 'react';

import { Text, View, StyleSheet, AsyncStorage, TouchableOpacity } from 'react-native'
import { Card, Avatar } from 'react-native-elements';
import { Container, Button } from 'native-base';
import Header from './../component/Header';
import Axios from 'axios'



class profile extends Component {
    constructor() {
        super()
        this.state = {
            userName: '',
            userPhoto: '',
            userIdCard: '',
            coordinator: '',
            userPhone: '',
            userEmail: '',
            userStatus: ''
        }
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
                // alert('JALAN')
                console.log('Cek user tokennya', this.state.userTok)

                let url = `https://serviceapi.myboost.id/canvasser/v1/profile`;
                //SET AUTHORIZATION
                let config = {
                    headers: { 'Authorization': `Bearer ${this.state.userTok}` }
                };

                Axios.get(url, config)
                    .then((getData) => {
                        this.setState({
                            userName: getData.data.message.data.name,
                            userPhoto: getData.data.message.data.photo,
                            userIdCard: getData.data.message.data.cavasser.idcard,
                            coordinator: getData.data.message.data.cavasser.user_coordinator.name,
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

    };


    logOut = () => {

        AsyncStorage.removeItem('userToken')
        this.props.navigation.navigate('Login')
    }

    render() {
        var teks = 'Profile'

        const { userName, userIdCard, coordinator, userPhone, userStatus, userEmail, userPhoto } = this.state


        return (
            <Container>

                <Header judul={teks} fungsingBack={() => this.props.navigation.goBack()} />

                <View style={styles.container}>
                    <Card>
                        <Avatar
                            source={{ uri: `${userPhoto}` }}
                            rounded
                            xlarge />

                    </Card>
                </View>

                <View style={{
                    flex: 1,
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>

                    <Text>{userName}</Text>
                    <Text>{userIdCard}</Text>
                    <Text>{userPhone}</Text>
                    <Text>{userEmail}</Text>
                    <Text noted>Status</Text>
                    <Text>{userStatus}</Text>
                    <Text noted>Coordinator</Text>
                    <Text>{coordinator}</Text>
                    <View>
                        <Button style={{ backgroundColor: '#EE3124' }}><Text>EDIT PROFILE</Text></Button>
                    </View>
                    <Text style={{ color: '#EE3124' }}>CHANGE PASSWORD</Text>


                    <TouchableOpacity onPress={()=>{this.logOut()}}><Text style={{ color: '#EE3124' }}>SIGN OUT</Text></TouchableOpacity>


                </View>




            </Container>

        );
    }
}
export default profile

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ecf0f1',
    },

});