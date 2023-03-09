import React from 'react';
import {View, StyleSheet} from 'react-native';

interface Props {
  color: string;
}

const Circle = (props: Props) => {
  const {color} = props;

  return <View style={[styles.circle, {backgroundColor: color}]} />;
};

const styles = StyleSheet.create({
  circle: {
    width: 100,
    height: 100,
    borderWidth: 2,
    borderColor: '#000',
    borderRadius: 100,
  },
});

export default Circle;
