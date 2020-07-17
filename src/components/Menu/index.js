import React from 'react';
import QRCode from 'react-native-qrcode-svg';
import { Container,Code,Nav,NavItem,NavText,SignOutButton,SignOutButtonText} from './styles';
import Icon from 'react-native-vector-icons/MaterialIcons';
let base64Logo = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAA..';
import {Animated} from 'react-native';
export default function Main({translateY}){
  return(
    <Container
    style={{
      opacity:translateY.interpolate({
        inputRange:[0,150],
        outputRange:[0,1],
      })
    }}
    >
      <Code>
        <QRCode
        value = "https://google.com"
        size={80}
          color="#8b10ae"
          backgroundColor="#fff"



        />
      </Code>
      <Nav>
        <NavItem>
          <Icon name="help-outline" size={20} color="#fff"/>
          <NavText>Me ajuda</NavText>
        </NavItem>
        <NavItem>
          <Icon name="person-outline" size={20} color="#fff"/>
          <NavText>Perfil</NavText>
        </NavItem>
        <NavItem>
          <Icon name="credit-card" size={20} color="#fff"/>
          <NavText>Configurar card</NavText>
        </NavItem>
        <NavItem>
          <Icon name="smartphone" size={20} color="#fff"/>
          <NavText>Configuraçao do app</NavText>
        </NavItem>
      </Nav>
      <SignOutButton onPress={() => {}}>
        <SignOutButtonText>SAIR DO APP</SignOutButtonText>
      </SignOutButton>

    </Container>
  );
}
