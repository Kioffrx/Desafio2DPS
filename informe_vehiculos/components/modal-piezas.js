

import React from 'react';
import { Modal, View, Text, TouchableOpacity } from 'react-native';
import styles from '../styles/modal_design';

export default function PieceModal({ piece, onClose }) {
  if (!piece) return null;

  return (
    <Modal visible={true} transparent animationType="fade">
      <View style={styles.overlay}>
        <View style={styles.modal}>

          <Text style={styles.title}>{piece.type}</Text>
          <Text>Marca: {piece.brand}</Text>
          <Text>Serie: {piece.serial}</Text>
          <Text>Precio: ${piece.price}</Text>
          <Text>Fecha: {piece.date}</Text>

          <TouchableOpacity style={styles.btn} onPress={onClose}>
            <Text style={styles.btnText}>Cerrar</Text>
          </TouchableOpacity>

        </View>
      </View>
    </Modal>
  );
}