import React, { Component } from 'react'
import styled from 'styled-components'

const Container = styled.View`
  flex: 1;
  background-color: #fff;
  padding: 50px 0 0 20px; 
`

export default class Layout extends Component {

  render() {
    return (
      <Container>
        { this.props.children }
      </Container>
    )
  }
}