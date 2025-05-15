import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from './HomeNavigator';

type Props = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'MediaAluno'>;
};

const MediaAluno = ({ navigation }: Props) => {
  const nome = 'Pedro';
  const nota1 = 6;
  const nota2 = 9;
  const media = (nota1 + nota2) / 2;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Resultado do Aluno</Text>
      <Text>Nome: {nome}</Text>
      <Text>Nota 1: {nota1}</Text>
      <Text>Nota 2: {nota2}</Text>
      <Text>Média: {media.toFixed(1)}</Text>

      {media >= 7 ? (
        <>
          <Text style={styles.aprovado}>Aprovado ✅</Text>
          <Text>Parabéns, você passou!</Text>
        </>
      ) : (
        <>
          <Text style={styles.reprovado}>Reprovado ❌</Text>
          <Text>Que pena, você não passou, estude mais para a próxima vez.</Text>
        </>
      )}

      <Button title="Voltar" onPress={() => navigation.goBack()} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#eef',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  aprovado: {
    color: 'green',
    fontWeight: 'bold',
    marginTop: 10,
  },
  reprovado: {
    color: 'red',
    fontWeight: 'bold',
    marginTop: 10,
  },
});

export default MediaAluno;
