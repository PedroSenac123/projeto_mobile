import React, { useState } from 'react';
import { View, TextInput, Button, FlatList, Text, StyleSheet } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from './HomeNavigator';

type Props = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'Lista'>;
};

type Item = {
  texto: string;
};

const Lista = ({ navigation }: Props) => {
  const [texto, setTexto] = useState('');
  const [itens, setItens] = useState<Item[]>([]);

  const adicionarItem = () => {
    if (texto.trim() !== '') {
      setItens([...itens, { texto }]);
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
          </View>
        )}
      />

      <Button title="Voltar" onPress={() => navigation.goBack()} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    marginTop: 30,
  },
  input: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ccc',
    marginBottom: 10,
  },
  itemContainer: {
    padding: 10,
    backgroundColor: '#ddd',
    borderRadius: 5,
    marginVertical: 4,
  },
  itemTexto: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default Lista;
