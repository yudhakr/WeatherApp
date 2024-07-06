import React from 'react';
import { TextInput, StyleSheet, View } from 'react-native';

const CustomTextInput = ({ text, onChange, multiline, placeholder, numberOfLines }) => (
  <View style={styles.container}>
    <TextInput
      multiline={multiline}
      numberOfLines={numberOfLines}
      style={styles.input}
      placeholder={placeholder}
      onChangeText={onChange}
      value={text} // Menggunakan 'value' daripada 'defaultValue'
    />
  </View>
);

const styles = StyleSheet.create({
  input: {
    borderWidth: 2,
    borderColor: '#DDDDDD',
    padding: 10,
  },
  container: {
    marginTop: 20,
  },
});

CustomTextInput.defaultProps = {
  multiline: false,
  numberOfLines: 1,
};

export default CustomTextInput;
