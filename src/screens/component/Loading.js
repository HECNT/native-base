import React, { Component } from 'react';
import { View, StatusBar } from 'react-native';
import { Container, Header, Button, Icon, Body, Text, Content, Spinner } from "native-base";

export class loading extends Component {
  render() {
    return (
      <Container style={{marginTop: StatusBar.currentHeight}}>
       <Header style = {{ backgroundColor: this.props.colorHeader }}/>
       <Content>
         <Spinner color={this.props.colorHeader} />
         <Body>
           
         </Body>
       </Content>
     </Container>
    );
  }
}

export default loading;
