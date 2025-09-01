import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function Detalhes({ data, voltar }) {
  return (
    <View style={styles.container}>
      <View style={styles.modalContainer}>
        <TouchableOpacity style={styles.btnVoltar} onPress={voltar}>
          <Text style={styles.btnVoltarTexto}>Voltar</Text>
        </TouchableOpacity>
        <Text style={styles.titulo}>{data.nome}</Text>
        <Text style={styles.sinopseTitulo}>Sinopse:</Text>
        <Text style={styles.sinopseTexto}>{data.sinopse}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  modalContainer: {
    height: '80%',
    backgroundColor: '#121212',
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
  },
  btnVoltar: {
    backgroundColor: '#e52246',
    padding: 10,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
  },
  btnVoltarTexto: {
    color: '#FFF',
    fontSize: 16,
  },
  titulo: {
    textAlign: 'center',
    color: '#FFF',
    padding: 10,
    fontSize: 28,
    fontWeight: 'bold',
  },
  sinopseTitulo: {
    color: '#FFF',
    marginBottom: 8,
    marginLeft: 10,
    fontSize: 18,
  },
  sinopseTexto: {
    color: '#FFF',
    marginLeft: 10,
    marginRight: 10,
  },
});
