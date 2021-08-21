import React, {useState} from 'react';
import styled from 'styled-components/native';

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
  background-color: ${ props => props.cor};
  margin-top: 50px;
  padding: 20px;
  align-items: center;
  border-radius: 10px;
`

const ResultadoTexto = styled.Text`
  font-size: 20px;
`

export default function App() {
  const [peso, alteraPeso] = useState ('60');
  const [altura, alteraAltura] = useState ('1.73');
  const [imc, alteraIMC] = useState(0);
  const [categoria, alteraCategoria] = useState ('Obesidade');
  const [cor, alteraCor] = useState ('blue')

  const calcularIMC = () => {
    const indice = (parseFloat(peso) / ( parseFloat (altura) * parseFloat(altura) ) );
    alteraIMC(indice.toFixed(1));
    if (indice < 18.5){
      alteraCategoria('Magreza');
      alteraCor('blue');
    } else if (indice  < 24.9){
        alteraCategoria('Normal');
        alteraCor('green');
    } else if (indice < 29.9){
        alteraCategoria('Sobrepeso');
        alteraCor('orange');
    } else if (indice < 39.9){
        alteraCategoria('Obesidade');
        alteraCor('yellow');
    } else {
        alteraCategoria('Obesidade Grave');
        alteraCor('red');
    }

    };
    
  
  return (
    <Tela >
      <Titulo>Calculadora de IMC</Titulo>
      <Input placeholder="Peso" keyboardType="Numeric" value = {peso} onChangeText = { (p) => {alteraPeso(p)} }/>
      <Input placeholder="Altura" keyboardType="Numeric" value = {altura} onChangeText = { (a) => {alteraAltura(a)} }/>
      <CalcularView>
        <CalcularBotao title="Calcular" onPress={ calcularIMC } />
      </CalcularView>

      { imc > 0 && (
      <ResultadoView cor = {cor}>
        <ResultadoTexto>{imc}</ResultadoTexto>
        <ResultadoTexto>{categoria}</ResultadoTexto>
      </ResultadoView>
      )}

    </Tela>
  );
};
