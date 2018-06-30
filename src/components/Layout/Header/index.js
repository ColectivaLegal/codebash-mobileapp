import React from 'react'
import { Header as Head, Left, Body, Right, Title, Picker, Icon } from 'native-base';
import { Text } from 'react-native'

const Header = ({ changeLanguage, language }) => (
  <Head>
    <Left/>
    <Body>
      <Title>WAISN</Title>
    </Body>
    <Right>
      <Picker
        mode="dropdown"
        iosHeader="Select your SIM"
        selectedValue={language}
        onValueChange={(value) => changeLanguage(value)}
      >
        <Picker.Item label="English" value="en" />
        <Picker.Item label="Español" value="es" />
      </Picker>
    </Right>
  </Head>
)

export default Header
