import React, { Component } from 'react'
import { View, Text, Image, Linking, Dimensions } from 'react-native'
import { Link } from 'react-router-native'
import { Button } from 'native-base'
import styled from 'styled-components'

const FullWidthView = styled.View`
  width: ${props => props.width};
`;

export default class Home extends Component {
  render() {
    let {height, width} = Dimensions.get('window');

    return (
      <View>
        <Image
          style={{width: '100%', marginTop: -125, marginBottom: -125}}
          resizeMode="contain"
          source={require('../../../assets/images/english/WhatToDo.png')}
        />
        <View>
          <Button
            full
            style={{backgroundColor: '#e21b1b'}}
            //TODO: put in hotline number below
            onPress={() => {
              Linking.openURL('tel:1-844-724-3737');
            }}
          >
            <Text>Call Hotline</Text>
          </Button>
        </View>
      </View>
    )
  }
}
