import React, {useEffect, useRef, useState} from 'react';
import {
  Pressable,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import {random as genRandomColor} from 'chroma-js';
import {Circle, Square} from './components';

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const [backgroundColor, setBackgroundColor] = useState<string>('#fff');
  const [shapeColors, setShapeColors] = useState<Array<string>>(new Array(50));
  const isMounted = useRef<boolean>(false);

  const updateColors = () => {
    const randomBackgroundColor = genRandomColor().hex();
    setBackgroundColor(randomBackgroundColor);

    const tempShapeColors: Array<string> = [];

    for (let i = 0; i < shapeColors.length; i++) {
      const color = genRandomColor().hex();
      tempShapeColors.push(color);
    }

    setShapeColors(tempShapeColors);
  };

  const onUpdateColorButtonClick = () => updateColors();

  useEffect(() => {
    if (isMounted.current) {
      return;
    }

    isMounted.current = true;

    updateColors();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <SafeAreaView style={[styles.container, {backgroundColor}]}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor="#fff"
      />
      <ScrollView
        style={styles.shapesConatainer}
        contentContainerStyle={styles.shapesContentConatiner}>
        {shapeColors.map((color, index) => {
          return (
            <View key={index}>
              {index % 2 === 0 ? (
                <Circle color={color} />
              ) : (
                <Square color={color} />
              )}
            </View>
          );
        })}
      </ScrollView>
      <View style={styles.buttonContainer}>
        <Pressable
          style={styles.updateButton}
          onPress={onUpdateColorButtonClick}>
          <Text style={styles.updateButtonText}>Update Colors</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  shapesConatainer: {
    height: '80%',
    paddingHorizontal: 10,
  },
  shapesContentConatiner: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
    justifyContent: 'center',
  },
  buttonContainer: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  updateButton: {
    paddingHorizontal: 15,
    paddingVertical: 10,
    backgroundColor: '#F7C04A',
    borderWidth: 2,
    borderColor: '#000',
    borderRadius: 10,
  },
  updateButtonText: {
    fontSize: 20,
    fontWeight: '500',
    letterSpacing: 2,
  },
});

export default App;
