import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, ScrollView } from 'react-native';
import uuid from 'react-native-uuid';
import styles from '../styles/form_design';

export default function AddPieceScreen({ onSave, onCancel, editingPiece }) {
  const [type, setType] = useState(editingPiece ? editingPiece.type : '');
  const [brand, setBrand] = useState(editingPiece ? editingPiece.brand : '');
  const [serial, setSerial] = useState(editingPiece ? editingPiece.serial : '');
  const [price, setPrice] = useState(editingPiece ? editingPiece.price : '');
  const [date, setDate] = useState(editingPiece ? editingPiece.date : '');

  const handleSave = () => {
  // Campos obligatorios vacíos
  if (!type || !brand || !serial || !date) {
    alert('Por favor completa todos los campos');
    return;
  }

  // Precio: debe ser un número positivo
  const parsedPrice = parseFloat(price);
  if (price && (isNaN(parsedPrice) || parsedPrice < 0)) {
    alert('El precio debe ser un número válido y positivo');
    return;
  }

  // Fecha: formato YYYY-MM-DD
  const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
  if (!dateRegex.test(date)) {
    alert('La fecha debe tener el formato YYYY-MM-DD (Ej: 2024-05-20)');
    return;
  }
  const parsedDate = new Date(date);
  if (isNaN(parsedDate.getTime())) {
    alert('La fecha ingresada no es válida');
    return;
  }

  // No. Serie: solo letras y números (sin espacios ni símbolos)
  const serialRegex = /^[a-zA-Z0-9]+$/;
  if (!serialRegex.test(serial)) {
    alert('El No. de Serie solo puede contener letras y números, sin espacios');
    return;
  }

  onSave({ id: editingPiece ? editingPiece.id : uuid.v4(), type, brand, serial, price: parsedPrice.toFixed(2), date });
};

  return (
    <ScrollView style={styles.container} keyboardShouldPersistTaps="handled">
      <View style={styles.header}>
        <View style={styles.accent} />
        <Text style={styles.title}>{editingPiece ? 'Actualizar pieza' : 'Registro de piezas'}</Text>
      </View>
      <Text style={styles.subtitle}>{editingPiece ? 'Modifica los datos del repuesto' : 'Complete los datos del repuesto'}</Text>

      <Text style={styles.label}>Pieza</Text>
      <TextInput style={styles.input} placeholder="Ej: Bujía" placeholderTextColor="#3d4f63" value={type} onChangeText={setType} />

      <Text style={styles.label}>Marca</Text>
      <TextInput style={styles.input} placeholder="Ej: Bosch" placeholderTextColor="#3d4f63" value={brand} onChangeText={setBrand} />

      <Text style={styles.label}>No. Serie</Text>
      <TextInput style={styles.input} placeholder="Ej: S013523" placeholderTextColor="#3d4f63" value={serial} onChangeText={setSerial} />

      <Text style={styles.label}>Precio</Text>
      <TextInput style={styles.input} placeholder="Ej: 25.00" placeholderTextColor="#3d4f63" keyboardType="numeric" value={price} onChangeText={setPrice} />

      <Text style={styles.label}>Fecha de Cambio</Text>
      <TextInput style={styles.input} placeholder="YYYY-MM-DD" placeholderTextColor="#3d4f63" value={date} onChangeText={setDate} />

      <View style={styles.btnRow}>
        <TouchableOpacity style={styles.btn} onPress={handleSave}>
          <Text style={styles.btnText}>{editingPiece ? 'Actualizar' : 'Guardar'}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btnCancel} onPress={onCancel}>
          <Text style={styles.btnCancelText}>Cancelar</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
