import React from 'react'
import { Header as Head, Left, Body, Right, Title } from 'native-base';
import { Text } from 'react-native'

const Header = ({ changeLanguage }) => (
  <Head>
    <Left/>
    <Body>
      <Title>WAISN</Title>
    </Body>
    <Right>
      <Text onPress={() => changeLanguage('en')}>English </Text>
      <Text onPress={() => changeLanguage('es')}>Espanol</Text>
    </Right>
  </Head>
)

export default Header
