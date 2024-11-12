import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity, TextInput } from 'react-native';

export default function ScheduleScreen({ route, navigation }) {
  const { medicine } = route.params;
  const [selectedDays, setSelectedDays] = useState([]);
  const [time, setTime] = useState('');

  const days = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'];

  const toggleDay = (day) => {
    setSelectedDays((prev) =>
      prev.includes(day) ? prev.filter((d) => d !== day) : [...prev, day]
    );
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
        <Text>Voltar</Text>
      </TouchableOpacity>
      <Text style={styles.title}>Medbox</Text>
      <Text style={styles.medicineName}>{medicine}</Text>
      <View style={styles.daysContainer}>
        {days.map((day, index) => (
          <TouchableOpacity
            key={index}
            style={[
              styles.dayButton,
              selectedDays.includes(day) && styles.dayButtonSelected
            ]}
            onPress={() => toggleDay(day)}
          >
            <Text>{day}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <TextInput 
        style={styles.input} 
        placeholder="Horário (Ex: 08:00)" 
        value={time} 
        onChangeText={setTime} 
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', backgroundColor: '#ADD8E6' },
  title: { fontSize: 20, marginVertical: 20 },
  backButton: { position: 'absolute', top: 20, left: 20 },
  medicineName: { fontSize: 24, marginVertical: 10 },
  daysContainer: { flexDirection: 'row', marginVertical: 20 },
  dayButton: { padding: 10, margin: 5, borderRadius: 5, backgroundColor: '#FFF' },
  dayButtonSelected: { backgroundColor: '#87CEFA' },
  input: { borderColor: '#000', borderWidth: 1, padding: 5, marginVertical: 10, width: '80%' }
});
