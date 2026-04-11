
import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text } from 'react-native';
import uuid from 'react-native-uuid';
import styles from '../styles/form_design';

export default function AddPieceScreen({ onSave }) {
  const [type, setType] = useState('');
  const [brand, setBrand] = useState('');
  const [serial, setSerial] = useState('');
  const [price, setPrice] = useState('');
  const [date, setDate] = useState('');

  const handleSave = () => {
    onSave({
      id: uuid.v4(),
      type,
      brand,
      serial,
      price,
      date
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Agregar Repuesto</Text>

      <TextInput style={styles.input} placeholder="Tipo" onChangeText={setType} />
      <TextInput style={styles.input} placeholder="Marca" onChangeText={setBrand} />
      <TextInput style={styles.input} placeholder="Número de serie" onChangeText={setSerial} />
      <TextInput style={styles.input} placeholder="Precio" onChangeText={setPrice} />
      <TextInput style={styles.input} placeholder="Fecha" onChangeText={setDate} />

      <TouchableOpacity style={styles.btn} onPress={handleSave}>
        <Text style={styles.btnText}>Guardar</Text>
      </TouchableOpacity>
    </View>
  );
}