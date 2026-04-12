import React from 'react';
import { Modal, View, Text, TouchableOpacity } from 'react-native';
import styles from '../styles/modal_design';

export default function PieceModal({ piece, onClose, onEdit }) {
  if (!piece) return null;

  return (
    <Modal visible={true} transparent animationType="fade">
      <View style={styles.overlay}>
        <View style={styles.modal}>
          <View style={styles.modalHeader}>
            <View style={styles.headerAccent} />
            <Text style={styles.title}>Detalle de la pieza</Text>
          </View>
          <View style={styles.divider} />

          <View style={styles.row}>
            <Text style={styles.label}>Pieza:</Text>
            <Text style={styles.value}>{piece.type}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>Marca:</Text>
            <Text style={styles.value}>{piece.brand}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>No Serie:</Text>
            <Text style={styles.value}>{piece.serial}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>Precio:</Text>
            <Text style={styles.value}>${piece.price}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>Fecha de Cambio:</Text>
            <Text style={styles.value}>{piece.date}</Text>
          </View>

          <View style={styles.btnRow}>
            <TouchableOpacity style={styles.btnEdit} onPress={() => onEdit(piece)}>
              <Text style={styles.btnEditText}>Actualizar</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn} onPress={onClose}>
              <Text style={styles.btnText}>Cerrar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
}
