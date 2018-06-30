import React from 'react';
import { View } from 'react-native';
import Layout from './src/components/Layout'
import Home from './src/components/Home'
import Volunteer from './src/components/Volunteer'
import { NativeRouter, Route } from 'react-router-native'

export default class App extends React.Component {
  render() {
    return (
      <Layout>
        <NativeRouter initialEntries={['/']} >
          <View>
            <Route exact path='/' component={Home} />
            <Route exact path='/volunteer'  component={Volunteer} />
          </View>
        </NativeRouter>
      </Layout>
    );
  }
}
