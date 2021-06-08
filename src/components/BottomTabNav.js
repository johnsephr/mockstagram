import React, { Component } from 'react';
import { Footer, FooterTab, Button, Icon } from 'native-base';
import { StyleSheet, View } from 'react-native';


export default class FooterTabsIconExample extends Component {
  render() {
    return (
      // <View style={styles.footer}>
        <Footer>
          <FooterTab>
            <Button>
              <Icon name="apps" />
            </Button>
            <Button>
              <Icon name="camera" />
            </Button>
            <Button active>
              <Icon active name="navigate" />
            </Button>
            <Button>
              <Icon name="person" />
            </Button>
          </FooterTab>
        </Footer>
      // </View>
    );
  }
}

const styles = StyleSheet.create({
  footer: {
    position: 'absolute',
    bottom: 50,
    // left: 0
  },
});