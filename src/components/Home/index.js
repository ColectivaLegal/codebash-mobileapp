import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { Link } from 'react-router-native'

export default class Home extends Component {

  render() {
    return (
      <View>
        <Text>Home</Text>
        <Link to='/volunteer'><Text>Go Volunteer</Text></Link>
      </View>
    )
  }
}