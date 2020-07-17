import React from 'react';

import Header from '~/components/Header';
import Tabs from '~/components/Tabs';
import Menu from '~/components/Menu';
import { Container,Content,Title,Annotation,Card,CardContent,CardFooter,CardHeader,Description } from './styles';
import Icon from 'react-native-vector-icons/MaterialIcons';





export default function Main(){
  return(
    <Container>
      <Header></Header>
      <Content>
        <Menu/>
        <Card>
          <CardHeader>
            <Icon name="attach-money" size={28} color="#666"/>
            <Icon name="visibility-off" size={28} color="#666"/>
          </CardHeader>
          <CardContent>
            <Title>Saldo disponiver</Title>
            <Description>AU$213,221,333.00</Description>
          </CardContent>
          <CardFooter>
            <Annotation>
              Tranferencia de AU$30.00 de Danilo
            </Annotation>
          </CardFooter>
        </Card>
      </Content>
      <Tabs></Tabs>
    </Container>
  );
}
