import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import styles from './styles';

const Accordion = ({ isExpanded, onToggle }) => {
  return (
    <TouchableOpacity onPress={onToggle} style={styles.viewStyle}>
      <Text style={styles.textStyle}>{isExpanded ? '▼' : '▲'}</Text>
    </TouchableOpacity>
  );
};

export default Accordion;