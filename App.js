import React from 'react';
import Layout from './src/components/Layout'
import Home from './src/components/Home'
import Volunteer from './src/components/Volunteer'
import { NativeRouter, Route } from 'react-router-native'
import { IntlProvider } from 'react-intl'
import {addLocaleData} from 'react-intl'
import en from 'react-intl/locale-data/en'
import es from 'react-intl/locale-data/es'
import locale from './src/locale'
import * as Expo from "expo";

addLocaleData([...en, ...es]);

export default class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = { locale: { messages: locale.en, key: 'en' }, isReady: false }
  }

  async componentWillMount() {
    await Expo.Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
      Ionicons: require("@expo/vector-icons/fonts/Ionicons.ttf")
    })

    this.setState({ isReady: true })
  }

  changeLanguage = (newLocale) => {
    const messages = locale[newLocale]
    this.setState({ locale: { messages, key: newLocale } })
  }

  render() {
    if (!this.state.isReady) {
      return <Expo.AppLoading />;
    }

    return (
      <IntlProvider
        locale={this.state.locale.key}
        messages={this.state.locale.messages}
      >
        <NativeRouter initialEntries={['/']} >
          <Layout changeLanguage={this.changeLanguage}>
            <Route exact path='/' component={Home} />
            <Route exact path='/volunteer'  component={Volunteer} />
          </Layout>
        </NativeRouter>
      </IntlProvider>
    );
  }
}
