import React from 'react';
import { Alert, Button, StyleSheet, View } from 'react-native';
import { PrincipalProps } from '../navigation/HomeNavigator';
import { styles } from '../styles/styles';
import CampoDeTexto from './CampoDeTexto';
import MediaAluno from './MediaAluno';
import Lista from './Lista';
import Atividade3 from './CampoDeTexto';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from './HomeNavigator';

type Props = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'TelaPrincipal'>;
};

const TelaPrincipal = ({ navigation }: Props) => {
  return (
    <View style={styles_local.container}>
      <Button
        title="Ir para Lista"
        onPress={() => navigation.navigate('Lista')}
      />
    </View>
  );
};

const styles_local = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 20,
    gap: 15,
  },
});

export default TelaPrincipal;
