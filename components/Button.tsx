import React from 'react';
import {Text, StyleSheet, TouchableOpacity} from 'react-native';

const Button = ({label, onPress}: {label: string; onPress?: () => void}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Text style={styles.textStyle}>{label}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  textStyle: {fontWeight: '500', fontSize: 18, color: 'white'},
  container: {
    padding: 15,
    alignItems: 'center',
    borderRadius: 5,
    backgroundColor: 'black',
  },
});
