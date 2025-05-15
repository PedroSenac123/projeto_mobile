import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TelaPrincipal from './TelaPrincipal';
import MediaAluno from './MediaAluno';
import CampoDeTexto from './CampoDeTexto';
import Lista from './Lista';

export type RootStackParamList = {
  TelaPrincipal: undefined;
  MediaAluno: { nome: string; nota1: number; nota2: number };
  CampoDeTexto: undefined;
  Lista: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const HomeNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="TelaPrincipal">
      <Stack.Screen name="TelaPrincipal" component={TelaPrincipal} />
      <Stack.Screen name="MediaAluno" component={MediaAluno} />
      <Stack.Screen name="CampoDeTexto" component={CampoDeTexto} />
      <Stack.Screen name="Lista" component={Lista} />
    </Stack.Navigator>
  );
};

export default HomeNavigator;
