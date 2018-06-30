import React from 'react';
import Layout from './src/components/Layout'
import Home from './src/components/Home'
import Volunteer from './src/components/Volunteer'
import { NativeRouter, Route } from 'react-router-native'

export default class App extends React.Component {
  render() {
    return (
      <NativeRouter initialEntries={['/']} >
        <Layout>
          <Route exact path='/' component={Home} />
          <Route exact path='/volunteer'  component={Volunteer} />
        </Layout>
      </NativeRouter>
    );
  }
}
