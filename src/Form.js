import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

const Form=()=> {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleNameChange = (text) => {
    setName(text);
  };

  const handleEmailChange = (text) => {
    setEmail(text);
  };

  const handleSubmit = () => {
    console.log('Name:', name);
    console.log('Email:', email);
    
  };

  return (
    <View style={styles.container}>
        <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Name"
        value={name}
        onChangeText={handleNameChange}
      />
        </View>
      <TextInput
        style={styles.input}
        placeholder="Email"
        width="100%"
        value={email}
        onChangeText={handleEmailChange}
      />
      <Button title="Submit" onPress={handleSubmit} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 0,
    justifyContent: 'center',
    alignItems: 'center',
    // padding: 16,
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 8,
  },
});

export default Form;
