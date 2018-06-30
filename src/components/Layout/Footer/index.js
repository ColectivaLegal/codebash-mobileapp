import React from 'react';
import { Footer as Foot, FooterTab, Button, Icon, Text } from 'native-base';
import { withRouter } from 'react-router-native'
import { injectIntl } from 'react-intl'

const Footer = ({ history, intl }) => (
  <Foot>
    <FooterTab>
      <Button vertical onPress={() => history.push('/')}>
          <Icon name="home" />
          <Text>{  intl.formatMessage({ id: 'footer.home' }) }</Text>
      </Button>
      <Button vertical onPress={() => history.push('/volunteer')}>
        <Icon name="globe" />
        <Text>{ intl.formatMessage({ id: 'footer.volunteer' }) }</Text>
      </Button>
    </FooterTab>
  </Foot>
)

export default injectIntl(withRouter(Footer))