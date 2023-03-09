import React from 'react';
import {View, StyleSheet} from 'react-native';

interface Props {
  color: string;
}

const Square = (props: Props) => {
  const {color} = props;

  return <View style={[styles.square, {backgroundColor: color}]} />;
};

const styles = StyleSheet.create({
  square: {
    width: 100,
    height: 100,
    borderWidth: 2,
    borderColor: '#000',
    borderRadius: 10,
  },
});

export default Square;
