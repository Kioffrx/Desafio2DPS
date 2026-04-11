import React, { useState } from 'react';
import { View } from 'react-native';
import HomeScreen from './screens/HomeScreen';
import AddPieceScreen from './screens/lista-piezas.js';

export default function App() {
  const [pieces, setPieces] = useState([]);
  const [showForm, setShowForm] = useState(false);

  const addPiece = (piece) => {
    setPieces([...pieces, piece].sort((a, b) => new Date(b.date) - new Date(a.date)));
    setShowForm(false);
  };

  const deletePiece = (id) => {
    setPieces(pieces.filter(p => p.id !== id));
  };

  return (
    <View style={{ flex: 1 }}>
      {showForm ? (
        <AddPieceScreen onSave={addPiece} />
      ) : (
        <HomeScreen 
          pieces={pieces} 
          onDelete={deletePiece} 
          onAdd={() => setShowForm(true)}
        />
      )}
    </View>
  );
}