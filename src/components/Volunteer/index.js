import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { Link } from 'react-router-native'


export default class Volunteer extends Component {
  render() {
    return (
      <View>
        <Text>Volunteer</Text>
        <Link to='/'><Text>Go home</Text></Link>
      </View>
    )
  }
}