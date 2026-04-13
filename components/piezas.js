import { Alert, Text, TouchableOpacity, View } from "react-native";
import styles from "../styles/design_pieces";

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
        onPress={() => {
          Alert.alert(
            "Eliminar pieza",
            "¿Estás seguro que deseas eliminar esta pieza?",
            [
              { text: "Cancelar", style: "cancel" },
              { text: "Eliminar", onPress: onDelete, style: "destructive" },
            ],
          );
        }}
        onStartShouldSetResponder={() => true}
      >
        <Text style={styles.deleteText}>Eliminar</Text>
      </TouchableOpacity>
    </TouchableOpacity>
  );
}
