import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

class Header extends Component {
  render() {
    return <View style={[styles.header, styles[this.props.color.toLowerCase()]]}>
      <Text style={styles.headerText}>
        {this.props.total} {this.props.color}
      </Text>
    </View>
  }
}

const styles = StyleSheet.create({
  header: {
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center'
  },
  headerText: {
    fontSize: 20,
    color: '#FFF'
  },
  red: {
    backgroundColor: 'red'
  },
  amber: {
    backgroundColor: 'orange'
  },
  green: {
    backgroundColor: 'green'
  },
});

export default Header;
