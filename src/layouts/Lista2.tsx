import React, { useState } from 'react';
import { View, TextInput, Button, FlatList, Text, StyleSheet, TouchableOpacity } from 'react-native';

type Item = {
  texto: string;
};

const Lista = () => {
  const [texto, setTexto] = useState('');
  const [itens, setItens] = useState<Item[]>([]);
  const [fraseSelecionada, setFraseSelecionada] = useState<string | null>(null);

  const adicionarItem = () => {
    if (texto.trim() !== '') {
      const novoItem: Item = { texto };
      setItens([...itens, novoItem]);
      setTexto('');
    }
  };

  const selecionarFrase = (frase: string) => {
    setFraseSelecionada(frase);
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
          <TouchableOpacity onPress={() => selecionarFrase(item.texto)}>
            <View style={styles.itemContainer}>
              <Text style={styles.itemTexto}>{item.texto}</Text>
            </View>
          </TouchableOpacity>
        )}
      />

      {fraseSelecionada && (
        <Text style={styles.fraseSelecionada}>
          Frase selecionada: {fraseSelecionada}
        </Text>
      )}
    </View>
  );
};

export default Lista;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginTop: 30,
    paddingHorizontal: 20,
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
  fraseSelecionada: {
    marginTop: 20,
    fontSize: 16,
    fontStyle: 'italic',
    color: '#333'
  }
});
