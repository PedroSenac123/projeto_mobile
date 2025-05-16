import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/HomeNavigator';
import { MediaProps } from '../navigation/HomeNavigator';

type Props = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'MediaAluno'>;
};

const MediaAluno = ( props : MediaProps ) => {
  const nome = 'Pedro';
  const nota1 = 6;
  const nota2 = 9;
  const media = (nota1 + nota2) / 2;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Resultado do Aluno</Text>
      <Text style={styles.texto}>Nome: {nome}</Text>
      <Text style={styles.texto}>Nota 1: {nota1}</Text>
      <Text style={styles.texto}>Nota 2: {nota2}</Text>
      <Text style={styles.texto}>Média: {media.toFixed(1)}</Text>

      {media >= 7 ? (
        <>
          <Text style={styles.aprovado}>Aprovado ✅</Text>
          <Text style={styles.texto2}>Parabéns, você passou!</Text>
        </>
      ) : (
        <>
          <Text style={styles.reprovado}>Reprovado ❌</Text>
          <Text style={styles.texto2}>Que pena, você não passou, estude mais para a próxima vez.</Text>
        </>
      )}

      <Button title="Voltar" onPress={() => props.navigation.goBack()} />
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
    color:"black",
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
  texto:{
    fontSize: 18,
    marginTop: 10,
    color:"black",
  },
  texto2:{
    fontSize: 18,
    marginTop: 10,
    color:"black",
    marginBottom: 80,
  },
});

export default MediaAluno;
