import { NativeStackScreenProps, createNativeStackNavigator } from "@react-navigation/native-stack";
import TelaPrincipal from "../layouts/TelaPrincipal";
import MediaAluno from "../layouts/MediaAluno";
import CampoDeTexto from "../layouts/CampoDeTexto";
import Lista from "../layouts/Lista";

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


//cria as propriedades da TelaPrincipal, que nesse caso é undefined
//essas propriedades são usadas lá em layouts/TelaPincipal.tsx
type PrincipalProps = NativeStackScreenProps<RootStackParamList,
  'TelaPrincipal'>;

type MediaProps = NativeStackScreenProps<RootStackParamList,
  'MediaAluno'>;

type CampoProps = NativeStackScreenProps<RootStackParamList,
  'CampoDeTexto'>;

type ListaProps = NativeStackScreenProps<RootStackParamList,
  'Lista'>;


//exporta o navegador da pilha para ficar visível para outros arquivos    
export default HomeNavigator;

//exporta os tipos de dados para ficar visível para outros arquivos
export type {
  PrincipalProps,
  MediaProps,
  CampoProps,
  ListaProps
};