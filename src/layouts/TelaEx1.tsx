import React, { useState } from 'react';
import { Alert, Image, Pressable, StyleSheet, Switch, Text, TextInput, View } from 'react-native';
import { styles } from '../styles/styles';

const TelaEx1 = () => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');
  const [ativado, setAtivado] = useState(false);

  const handleCadastrar = () => {
    Alert.alert(
      'Dados Cadastrados',
      `Nome: "${nome}"\nEmail: "${email}"\nTelefone: "${telefone}"\nComorbidade: "${ativado ? 'Sim' : 'Não'}"`
    );
  };

  const handleCancelar = () => {
    setNome('');
    setEmail('');
    setTelefone('');
    setAtivado(false);
  };

  return (
    <View>
      <View style={style_local.imagemCaixa}>
        <Image
          source={require("../images/userIcon.png")}
          style={style_local.icone}
        />
      </View>

      <Text style={style_local.subtextos}>Nome : </Text>
      <View style={style_local.campodetexto}>
        <TextInput
          placeholder='Insira seu Nome'
          style={style_local.caixaTexto}
          value={nome}
          onChangeText={setNome}
        />

        <Text style={styles.titulo_campos}>Email : </Text>
        <TextInput
          placeholder='Insira seu E-mail'
          style={style_local.caixaTexto}
          value={email}
          onChangeText={setEmail}
        />

        <Text style={styles.titulo_campos}>Telefone : </Text>
        <TextInput
          placeholder='Insira seu Telefone'
          style={style_local.caixaTexto}
          value={telefone}
          onChangeText={setTelefone}
        />

        <Text style={style_local.comorbidade}>Possui Comorbidade: </Text>
        <Switch
          value={ativado}
          onValueChange={setAtivado}
        />
      </View>

      <View style={style_local.campoBotoes}>
        <Pressable onPress={handleCadastrar} style={styles.botao}>
          <Text>Cadastrar</Text>
        </Pressable>

        <Pressable onPress={handleCancelar} style={styles.botao_vermelho}>
          <Text>Cancelar</Text>
        </Pressable>
      </View>
    </View>
  );
};

const style_local = StyleSheet.create({
  campoBotoes: {
    display: 'flex',
    flexDirection: 'row-reverse',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  comorbidade: {
    fontSize: 20,
    textAlign: 'center',
    color: 'black',
    marginTop: 30,
  },
  campodetexto: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'black',
  },
  icone: {
    display: 'flex',
    alignItems: 'center',
    width: 50,
    height: 50,
  },
  imagemCaixa: {
    display: 'flex',
    alignItems: 'center',
    marginTop: 20,
  },
  subtextos: {
    fontSize: 25,
    textAlign: 'center',
    color: 'black',
  },
  caixaTexto: {
    borderColor: 'black',
    borderWidth: 3,
    width: "75%",
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 20,
    color: 'black',
    marginBottom: 10,
  }
});

export default TelaEx1;
