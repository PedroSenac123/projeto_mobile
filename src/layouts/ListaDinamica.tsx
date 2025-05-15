// components/ListaDinamica.tsx
import React, { useState } from 'react';
import { View, TextInput, Button, FlatList, Text, StyleSheet } from 'react-native';

type Item = {
  texto: string;
  dataHora: string;
};

const ListaDinamica = () => {
  const [texto, setTexto] = useState('');
  const [itens, setItens] = useState<Item[]>([]);

  const adicionarItem = () => {
    if (texto.trim() !== '') {
      const agora = new Date();
      const dataHoraFormatada = agora.toLocaleString('pt-BR', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
      });

      const novoItem: Item = {
        texto,
        dataHora: dataHoraFormatada,
      };

      setItens([...itens, novoItem]);
      setTexto('');
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Digite algo"
        value={texto}
        onChangeText={setTexto}
      />
      <Button title="Adicionar" onPress={adicionarItem} />

      <FlatList
        data={itens}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <Text style={styles.itemTexto}>{item.texto}</Text>
            <Text style={styles.itemData}>{item.dataHora}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default ListaDinamica;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginTop: 30,
  },
  input: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ccc',
    marginBottom: 10
  },
  itemContainer: {
    padding: 10,
    backgroundColor: '#ddd',
    borderRadius: 5,
    marginVertical: 4
  },
  itemTexto: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  itemData: {
    fontSize: 14,
    color: '#555'
  }
});
