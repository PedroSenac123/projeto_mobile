import React, { useState } from 'react';
import { View, TextInput, Button, Alert, StyleSheet, Pressable } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { CampoProps, RootStackParamList } from '../navigation/HomeNavigator';

type Props = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'MediaAluno'>;
};

const CampoDeTexto = (Props : CampoProps) => {
  const [texto, setTexto] = useState('');

  const exibirTexto = () => {
    Alert.alert('Texto digitado:', texto);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Digite algo"
        value={texto}
        onChangeText={setTexto}
      />
      <Button title="Exibir texto" onPress={exibirTexto}/>
      <Button title="Voltar" onPress={() => Props.navigation.goBack()} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  input: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 6,
    marginBottom: 10,
  },
});

export default CampoDeTexto;
