import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, ScrollView, StyleSheet, Text, View,Image} from 'react-native';
export default function App() {

  const data = [
  { id: 1, nome: "Pedra", url: "./assets/pedra.jpg" },
  { id: 2, nome: "Papel", url: "./assets/papel.jpg"},
  { id: 3, nome: "Tesoura", url: "./assets/Tesoura.png" }]

  const [escolha, setEscolha] = useState(" ")
  const [escolhaPc, setEcolhaPc] = useState(" ")
  const [status,setStatus] = useState(" ")


  //Encapsulamento da Função
  function Jokempo(escolher: any) {
    const pcAleatoria = Math.floor(Math.random() * data.length)

    setEscolha(escolher)
    setEcolhaPc(data[pcAleatoria].url)

    if(data[pcAleatoria].nome == "Pedra" && escolher == "Papel"){
      setStatus("Você Ganhou")
    }
    else if(data[pcAleatoria].nome == "Papel" && escolher == "Tesoura"){
      setStatus("Você Ganhou")
    }
    else if(data[pcAleatoria].nome == "Tesoura" && escolher == "Pedra"){
      setStatus("Você Ganhou")
    }
    else if(data[pcAleatoria].nome ==  escolher ){
      setStatus("Empate")
    }
    else{
      setStatus("Você Perdeu")
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Jokempo</Text>
      <View>
        <Image source={{uri: escolhaPc}}/>
      </View>
      
      <Text>Escolha do Computador:{escolhaPc}
      </Text>
      <StatusBar style="auto" />
      <Text>Você Escolheu: {escolha}</Text>
        <View style={styles.buttons}>
          <Button title='Pedra' onPress={() => Jokempo("Pedra")} />
          <Button title='Papel' onPress={() => Jokempo("Papel")} />
          <Button title='Tesoura' onPress={() => Jokempo("Tesoura")} />
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    justifyContent:"center",
    display:"flex",
    flexDirection:"column"
  },
  title:{
    fontSize: 40,
    alignItems:"center",
    justifyContent:"center",
    textAlign:"center",
    marginTop: 50
  },
  buttons: {
    display: "flex",
    flexDirection:"row",
    justifyContent:"space-evenly",
    top:"130%",
  },
 
});
