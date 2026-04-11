import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from '../styles/design_pieces';

export default function PieceItem({ piece, onDelete, onPress }) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.card}>
      
      <View style={styles.row}>
        <Text style={styles.type}>{piece.type}</Text>
        <Text style={styles.price}>${piece.price}</Text>
      </View>

      <Text style={styles.brand}>{piece.brand}</Text>
      <Text style={styles.date}>Cambio: {piece.date}</Text>

      <TouchableOpacity style={styles.deleteBtn} onPress={onDelete}>
        <Text style={styles.deleteText}>Eliminar</Text>
      </TouchableOpacity>

    </TouchableOpacity>
  );
}