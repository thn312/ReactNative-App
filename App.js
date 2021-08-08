/* eslint-disable prettier/prettier */
import React, { useState } from "react";
import { StyleSheet, View, TouchableOpacity, Text } from "react-native";
import Counter from "./components/Counter";
import Button from "./components/Button";
const App = () => {
  const [count, setCount] = useState(0);
  const onPress = () => setCount(prevCount => prevCount + 1);

  return (
    <View style={styles.container}>
      <Counter count = {count}></Counter>
      <Button
        onPress={onPress}
      >
        <Text>Press Here</Text>
      </Button>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    position: 'relative',
  },
});
export default App;