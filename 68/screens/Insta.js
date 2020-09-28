import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Iframe from 'react-iframe';
import {Header} from 'react-native-elements'

export default class Insta extends React.Component {
  render(){
  return( 
    <View>
      <Header
            backgroundColor={'#9c8210'}
            centerComponent={{
              text: 'Instagram',
              style: { color: 'white', fontSize: 20 },
            }}
      />
      <Text style={styles.t1}>Hi, welcome to Instagram</Text>
    </View>
  );
  
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