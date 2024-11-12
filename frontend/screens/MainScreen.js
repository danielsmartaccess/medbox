import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native';

export default function MainScreen({ navigation }) {
  const [boxes, setBoxes] = useState([]);

  const addBox = () => setBoxes([...boxes, `Caixa ${boxes.length + 1}`]);

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
        <Text>Voltar</Text>
      </TouchableOpacity>
      <Text style={styles.title}>Medbox</Text>
      <Button title="Adicionar Caixa" onPress={addBox} />
      <View style={styles.boxesContainer}>
        {boxes.map((box, index) => (
          <TouchableOpacity key={index} style={styles.box} onPress={() => navigation.navigate('Medicines')}>
            <Text>{box}</Text>
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
  boxesContainer: { flexDirection: 'row', flexWrap: 'wrap', marginTop: 20 },
  box: { padding: 10, backgroundColor: '#FFF', margin: 5, borderRadius: 5 }
});
