import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Iframe from 'react-iframe';
import {Header} from 'react-native-elements'


export default class Fb extends React.Component {
  render(){
    return( 
      <View>
      <Header
            backgroundColor={'#9c8210'}
            centerComponent={{
              text: 'Facebook',
              style: { color: 'white', fontSize: 25 },
            }}
      />
      <Text style={styles.t1}>Hi, welcome to Facebook</Text>
    </View>    )

  }
}

const styles = StyleSheet.create({
  t1:{
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf:"center",
    textAlign:"center",
    marginTop:252,
  }
});