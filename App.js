import React from 'react'; 
import styled from 'styled-components/native'
import { Text, View } from 'react-native';

const Tela = styled.View`
  flex : 1;
  align-items: center;
`

const Titulo = styled.Text`
  font-size: 25px;
  margin-top: 30px;
`
const Input = styled.TextInput`
  width: 90%;
  background-color: #c4c4c4;
  font-size: 25px;
  margin-top: 20px;
  padding-left: 15px;
  border-radius: 15px;
`
const CalcularBotao = styled.Button`

`
const CalcularView = styled.View`
  margin-top: 50px;
`

const ResultadoView = styled.View`
  background-color: green;
  margin-top: 50px;
  padding: 20px;
  align-items: center;
  border-radius: 10px;
`

const ResultadoTexto = styled.Text`
  font-size: 20px;
`

export default function App() {
  return (
    <Tela >
      <Titulo>Calculadora de IMC</Titulo>
      <Input placeholder="Peso" keyboardType="Numeric"/>
      <Input placeholder="Altura" keyboardType="Numeric"/>
      <CalcularView>
        <CalcularBotao title="Calcular" onPress={ () => {} } />
      </CalcularView>
      <ResultadoView>
        <ResultadoTexto>30</ResultadoTexto>
        <ResultadoTexto>Normal</ResultadoTexto>
      </ResultadoView>
    </Tela>
  );
}
