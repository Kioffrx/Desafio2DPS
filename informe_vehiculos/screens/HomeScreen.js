

import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import PieceItem from '../components/piezas';
import PieceModal from '../components/modal-piezas';
import styles from '../styles/homeStyles';

export default function HomeScreen({ pieces, onDelete, onAdd }) {
  const [selectedPiece, setSelectedPiece] = useState(null);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Repuestos del Vehículo</Text>

      <FlatList
        data={pieces}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ paddingBottom: 80 }}
        renderItem={({ item }) => (
          <PieceItem 
            piece={item}
            onDelete={() => onDelete(item.id)}
            onPress={() => setSelectedPiece(item)}
          />
        )}
      />

      <TouchableOpacity style={styles.fab} onPress={onAdd}>
        <Text style={styles.fabText}>+</Text>
      </TouchableOpacity>

      <PieceModal 
        piece={selectedPiece}
        onClose={() => setSelectedPiece(null)}
      />
    </View>
  );
}