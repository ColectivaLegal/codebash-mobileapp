import React, { Component } from 'react'
import { Card, View, Text } from 'react-native'
import { Link } from 'react-router-native'
import { Button, Icon } from 'native-base'
import styled from 'styled-components'

const StyledView = styled.View`
  flex-direction: row;
  align-content: center;
  justify-content: space-around;
  width: 100%;
`;

const StyledButton = styled(Button)`
  width: 30%;
`;

const StyledIcon = styled(Icon)`
  margin: auto;
`;

export default class Volunteer extends Component {

  render() {
    return (
      <View>
        <StyledView>
          <StyledButton info><StyledIcon name="camera" type="FontAwesome" /></StyledButton>
          <StyledButton danger><StyledIcon name="video-camera" type="FontAwesome" /></StyledButton>
          <StyledButton success><StyledIcon name="report" type="MaterialIcons" /></StyledButton>
        </StyledView>

        <Text>Volunteer</Text>
        <Link to='/'><Text>Go home</Text></Link>
      </View>
    )
  }
}