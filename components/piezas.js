import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from '../styles/design_pieces';

export default function PieceItem({ piece, onDelete, onPress }) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.card}>
      <View style={styles.row}>
        <Text style={styles.type}>{piece.type}</Text>
      </View>
      <View style={styles.dateContainer}>
        <Text style={styles.dateLabel}>Fecha de Cambio:</Text>
        <Text style={styles.date}>{piece.date}</Text>
      </View>
      <View style={styles.divider} />
   <TouchableOpacity
  style={styles.deleteBtn}
  onPress={onDelete}
  onStartShouldSetResponder={() => true}
>
  <Text style={styles.deleteText}>Eliminar</Text>
</TouchableOpacity>
    </TouchableOpacity>
  );
}
