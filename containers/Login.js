import React, { Component } from 'react';
import { View, StyleSheet, AsyncStorage } from 'react-native'

import {
  Container,
  Form,
  Item,
  Input,
  Label,
  Text,
  Button,
  Content,
} from 'native-base';

import axios from 'axios';

class Login extends Component {

  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
    };
  };


  componentDidMount() {
    // Cek sudah login atau belum 
    this.userChecking();
  };

  userChecking = () => {
    AsyncStorage.getItem('userToken', (err, result) => {
      console.log('USER TOKEN', result)
      if (result) {
        this.props.navigation.navigate('Home')
      };
    }

    );

  };



  handleLogin = () => {
    const url = `https://serviceapi.myboost.id/canvasser/v1/login`;
    if (this.state.email === '') {
      alert('Username can not be blank')
    } else if (this.state.password === '') {
      alert('Password can not be blank')
    } else {
      axios.post(url, {
        username: this.state.email.toLocaleLowerCase(),
        password: this.state.password.toLocaleLowerCase(),
        device_id: "deviceid",
        imei: 123123123123,
        push_token: "pushnotificationtoken"
      }).then((respon) => {
        let userToken = respon.data.message.token
        AsyncStorage.setItem('userToken', userToken)
        // alert('sukses nih loginnya v._.v ')
        // COBA GET SEKALIAN
        // AsyncStorage.getItem('userToken', (err, result) => {
        //   console.log('USER TOKEN',result);
        // });
        // console.log('ini result ======',respon)
        // console.log('ini tokennya ====== ', respon.data.message.token)
        // REDIRECT KE MENU HOME
        this.props.navigation.navigate('Home')
        // console.log(response.message.token)
      }).catch((error) => {
        console.log(error)
        alert('Login Gagal')
      })

    }
  }


  render() {

    console.log('I can do it, Aaamiin')

    return (

      <Container style={styles.container}>

        <Text style={styles.judul}>
          PRE-TEST RN
        </Text>

        <Content style={{ flexDirection: 'column' }}>

          <Form style={{ paddingBottom: 50 }}>
            <Item floatingLabel >
              <Label>Email Address</Label>
              <Input onChangeText={(userInput) => { this.setState({ email: userInput }) }} />
            </Item>
            <Item floatingLabel >
              <Label>Password </Label>
              <Input onChangeText={(userInput) => { this.setState({ password: userInput }) }} />
            </Item>
          </Form>



          <View style={{ flexDirection: 'row', justifyContent: 'flex-end', paddingBottom: 25 }}>
            <Text note> Forget your password? </Text>
          </View>


          <Button onPress={() => { this.handleLogin() }}
            block
            title="LOGIN"
            style={{ backgroundColor: "#EE3124", height: 60 }}>
            <Text>LOGIN</Text>
          </Button>


        </Content>


      </Container>

    )
  }
}
export default Login;

const styles = StyleSheet.create({
  container: {
    paddingTop: 100,
    padding: 15,
    paddingBottom: 100,
  },
  judul: {
    color: '#EE3124',
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingBottom: 25
    // padding:25,
    // margin:15
  },
  button: {
    alignItems: 'center',
    color: '#EE3124',
    padding: 20
  },
  View: {
    margin: 100
  }
})