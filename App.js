import { AppRegistry } from 'react-native';
import React, { useState } from 'react';
import { View, StatusBar } from 'react-native';
import HomeScreen from './screens/HomeScreen';
import AddPieceScreen from './screens/lista-piezas.js';

function App() {
  const [pieces, setPieces] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [editingPiece, setEditingPiece] = useState(null);

  const addPiece = (piece) => {
    if (editingPiece) {
      setPieces(pieces
        .map(p => p.id === editingPiece.id ? { ...piece, id: editingPiece.id } : p)
        .sort((a, b) => new Date(b.date) - new Date(a.date))
      );
      setEditingPiece(null);
    } else {
      setPieces([...pieces, piece].sort((a, b) => new Date(b.date) - new Date(a.date)));
    }
    setShowForm(false);
  };

  const deletePiece = (id) => {
    setPieces(pieces.filter(p => p.id !== id));
  };

  const editPiece = (piece) => {
    setEditingPiece(piece);
    setShowForm(true);
  };

  return (
    <View style={{ flex: 1, backgroundColor: '#0f1923' }}>
      <StatusBar barStyle="light-content" backgroundColor="#0f1923" />
      {showForm ? (
        <AddPieceScreen
          onSave={addPiece}
          onCancel={() => { setShowForm(false); setEditingPiece(null); }}
          editingPiece={editingPiece}
        />
      ) : (
        <HomeScreen
          pieces={pieces}
          onDelete={deletePiece}
          onAdd={() => setShowForm(true)}
          onEdit={editPiece}
        />
      )}
    </View>
  );
}

AppRegistry.registerComponent('main', () => App);
export default App;
