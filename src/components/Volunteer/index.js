import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { Link } from 'react-router-native'
import { Button, Icon, H1 } from 'native-base'
import styled from 'styled-components'

const StyledView = styled.View`
  flex-direction: row;
  align-content: center;
  justify-content: space-around;
  width: 100%;
`;

const StyledButton = styled(Button)`
  flex-direction: column;
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
          <StyledButton info><StyledIcon name="camera" type="FontAwesome" /><Text>Take Pic</Text></StyledButton>
          <StyledButton danger><StyledIcon name="video-camera" type="FontAwesome" /><Text>Record</Text></StyledButton>
          <StyledButton success><StyledIcon name="report" type="MaterialIcons" /><Text>File Report</Text></StyledButton>
        </StyledView>

        <H1>Welcome, Volunteer!</H1>
      </View>
    )
  }
}