import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

const Header = ({ title }) => {
  return (
    <View style={styles.headerView}>
      <Text style={styles.headerText}>{title}</Text>
    </View>
  );
};

export default Header;