import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import PieceItem from '../components/piezas';
import PieceModal from '../components/modal-piezas';
import styles from '../styles/homeStyles';

export default function HomeScreen({ pieces, onDelete, onAdd, onEdit }) {
  const [selectedPiece, setSelectedPiece] = useState(null);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.accent} />
        <Text style={styles.title}>Piezas</Text>
      </View>
      <Text style={styles.subtitle}>Historial de repuestos del vehículo</Text>

      <TouchableOpacity style={styles.addBtn} onPress={onAdd}>
        <Text style={styles.addBtnText}>+ Agregar Pieza</Text>
      </TouchableOpacity>

      {pieces.length === 0 ? (
        <View style={styles.empty}>
          <Text style={styles.emptyIcon}>🔧</Text>
          <Text style={styles.emptyText}>No hay piezas. Agregue una</Text>
        </View>
      ) : (
        <FlatList
          data={pieces}
          keyExtractor={(item) => item.id}
          contentContainerStyle={{ paddingBottom: 30 }}
          renderItem={({ item }) => (
            <PieceItem
              piece={item}
              onDelete={() => onDelete(item.id)}
              onPress={() => setSelectedPiece(item)}
            />
          )}
        />
      )}

      <PieceModal
        piece={selectedPiece}
        onClose={() => setSelectedPiece(null)}
        onEdit={(piece) => { setSelectedPiece(null); onEdit(piece); }}
      />
    </View>
  );
}
