import React from 'react';
import QRCode from 'react-native-qrcode-svg';
import { Container,Code} from './styles';
let base64Logo = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAA..';

export default function Main(){
  return(
    <Container>
      <Code>
        <QRCode
        value = "https://google.com"
        logiSize={100}
        logo={{uri: base64Logo}}
        backgroundColor="transparent"
        color="white"

        />
      </Code>

    </Container>
  );
}
