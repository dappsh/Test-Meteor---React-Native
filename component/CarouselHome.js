import React, { Component } from 'react';
import Carousel from 'react-native-carousel';
import {
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native'



class CarouselHome extends Component {
  render() {

    return (

      <Carousel width={375}>
        <View style={styles.container}>
        <Image source={require('../img/pusp1.jpg')} style={styles.container}/>
        </View>
        <View style={styles.container}>
        <Image source={require('../img/pusp2.jpg')} style={styles.container}/>
        </View> 
        <View style={styles.container}>
        <Image source={require('../img/pusp3.jpg')} style={styles.container}/>
        </View> 
        <View style={styles.container}>
        <Image source={require('../img/pusp4.jpg')} style={styles.container}/>
        </View> 
        <View style={styles.container}>
        <Image source={require('../img/pusp5.jpg')} style={styles.container}/>
        </View> 
      </Carousel>


    )
  }
}


var styles = StyleSheet.create({
  container: {
    width: 375,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',

  }
})

export default CarouselHome