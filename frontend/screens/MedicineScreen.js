import React, { useState } from 'react';
import { View, Text, Button, TextInput, StyleSheet, TouchableOpacity } from 'react-native';

export default function MedicinesScreen({ navigation }) {
  const [medicines, setMedicines] = useState([]);
  const [newMedicine, setNewMedicine] = useState('');

  const addMedicine = () => {
    if (newMedicine) {
      setMedicines([...medicines, newMedicine]);
      setNewMedicine('');
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
        <Text>Voltar</Text>
      </TouchableOpacity>
      <Text style={styles.title}>Medbox</Text>
      <TextInput 
        style={styles.input} 
        placeholder="Nome do Remédio" 
        value={newMedicine} 
        onChangeText={setNewMedicine} 
      />
      <Button title="Adicionar Remédio" onPress={addMedicine} />
      <View style={styles.medicinesContainer}>
        {medicines.map((medicine, index) => (
          <TouchableOpacity 
            key={index} 
            style={styles.medicineBox} 
            onPress={() => navigation.navigate('Schedule', { medicine })}
          >
            <Text>{medicine}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', backgroundColor: '#ADD8E6' },
  title: { fontSize: 20, marginVertical: 20 },
  backButton: { position: 'absolute', top: 20, left: 20 },
  input: { borderColor: '#000', borderWidth: 1, padding: 5, marginVertical: 10, width: '80%' },
  medicinesContainer: { flexDirection: 'row', flexWrap: 'wrap', marginTop: 20 },
  medicineBox: { padding: 10, backgroundColor: '#FFF', margin: 5, borderRadius: 5 }
});
