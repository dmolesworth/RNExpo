import React from 'react';
import { Container, Header, Content, Card, CardItem, Text, Body, Left, Right, Button, Title, Icon } from 'native-base';
import {
  Image,
  Linking,
  Platform,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';

import { MonoText } from '../components/StyledText';

export default class HomeScreen extends React.Component {
  static route = {
    navigationBar: {
      visible: false,
    },
  };

    render() {
        return (
            <Container>
                  <Header>
                    <Left />
                    <Body>
                        <Title>Header</Title>
                    </Body>
                    <Right />
                </Header>
                <Content>
                    <Card>
                        <CardItem header>
                            <Text>Card Header</Text>
                              <Right>
                                <TouchableOpacity>
                                  <Icon active name='bookmark' />
                                </TouchableOpacity>
                              </Right>
                        </CardItem>
                        
                        <CardItem>
                            <Body>
                                <Text>
                                    Card Content
                                </Text>
                            </Body>
                        </CardItem>
                        <CardItem footer>
                            <Text>Card Footer</Text>
                        </CardItem>
                   </Card>

                    <Card>
                        <CardItem header>
                            <Text>Card Header</Text>
                              <Right>
                                <TouchableOpacity>
                                  <Icon active name='bookmark' />
                                </TouchableOpacity>
                              </Right>
                        </CardItem>
                        
                        <CardItem>
                            <Body>
                                <Text>
                                    Card Content
                                </Text>
                            </Body>
                        </CardItem>
                        <CardItem footer>
                            <Text>Card Footer</Text>
                        </CardItem>
                   </Card>
                </Content>
            </Container>
        );
    }
}