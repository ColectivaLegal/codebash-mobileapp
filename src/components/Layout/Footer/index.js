import React from 'react';
import { Footer as Foot, FooterTab, Button, Icon, Text } from 'native-base';
import { withRouter } from 'react-router-native'

const Footer = ({ history }) => (
  <Foot>
    <FooterTab>
      <Button vertical onPress={() => history.push('/')}>
          <Icon name="home" />
          <Text>Home</Text>
      </Button>
      <Button vertical onPress={() => history.push('/volunteer')}>
        <Icon name="globe" />
        <Text>Volunteer</Text>
      </Button>
    </FooterTab>
  </Foot>
)

export default withRouter(Footer)