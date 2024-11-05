import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const InitialScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>MedBox</Text>
      <View style={styles.buttonContainer}>
        <Button
          title="Criar Usuário"
          onPress={() => navigation.navigate('CreateUserScreen')}
        />
        <Button
          title="Fazer Login"
          onPress={() => navigation.navigate('LoginScreen')}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0000FF',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 40,
  },
  buttonContainer: {
    width: '80%',
    marginVertical: 10,
  },
});

export default InitialScreen;
