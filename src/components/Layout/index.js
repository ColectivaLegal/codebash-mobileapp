import React, { Component } from 'react'
import Header from './Header'
import Footer from './Footer'
import { Container, Content } from 'native-base'


export default class Layout extends Component {

  render() {
    return (
      <Container>
        <Header changeLanguage={this.props.changeLanguage} language={this.props.language} />
        <Content>
          { this.props.children }
        </Content>
        <Footer />
      </Container>
    )
  }
}