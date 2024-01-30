import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, ScrollView, StyleSheet, Text, View, Image } from 'react-native';
export default function App() {

  const data = [
    { id: 1, nome: "Pedra" },
    { id: 2, nome: "Papel"},
    { id: 3, nome: "Tesoura"}]

  const [escolha, setEscolha] = useState(" ")
  const [escolhaPc, setEcolhaPc] = useState(" ")
  const [status, setStatus] = useState(" ")

  const [userImageSource, setUserImageSource] = useState(require('./assets/default.jpg'));
  const [computerImageSource, setComputerImageSource] = useState(require('./assets/default.jpg'));



  //Encapsulamento da Função
  function Jokempo(escolher: any) {
    const pcAleatoria = Math.floor(Math.random() * data.length)

    setEscolha(escolher)
    setEcolhaPc(data[pcAleatoria].nome)

    if (data[pcAleatoria].nome == "Pedra" && escolher == "Papel") {
      setStatus("Você Ganhou")
    }
    else if (data[pcAleatoria].nome == "Papel" && escolher == "Tesoura") {
      setStatus("Você Ganhou")
    }
    else if (data[pcAleatoria].nome == "Tesoura" && escolher == "Pedra") {
      setStatus("Você Ganhou")
    }
    else if (data[pcAleatoria].nome == escolher) {
      setStatus("Empate")
    }
    else {
      setStatus("Você Perdeu")
    }
    updateImage(escolher, data[pcAleatoria].nome);

  }
  function updateImage(userChoice: any, computerChoice: any){
    switch (userChoice) {
      case 'Pedra':
        setUserImageSource(require('./assets/pedra.jpg'));
        break;
      case 'Papel':
        setUserImageSource(require('./assets/papel.jpg'));
        break;
      case 'Tesoura':
        setUserImageSource(require('./assets/Tesoura.png'));
        break;
      default:
        break;
    }
        switch (computerChoice) {
          case 'Pedra':
            setComputerImageSource(require('./assets/pedra.jpg'));
            break;
          case 'Papel':
            setComputerImageSource(require('./assets/papel.jpg'));
            break;
          case 'Tesoura':
            setComputerImageSource(require('./assets/Tesoura.png'));
            break;
          default:
            break;
        }
  }

  

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Jokempo</Text>
      <View style={styles.status}>
        <Text>Computador:{escolhaPc}</Text>

        <View style={styles.imagens}>
          <Image source={computerImageSource} />
        </View>

        <View>
          <Text style={styles.text}>{status}</Text>
        </View>

        <Text>Você: {escolha}</Text>

        <View style={styles.imagens}>
          <Image  source={userImageSource} />
        </View>

      </View>

      <StatusBar style="auto" />

      <View style={styles.buttons}>
        <Button title='Pedra' onPress={() => Jokempo("Pedra")} />
        <Button title='Papel' onPress={() => Jokempo("Papel")} />
        <Button title='Tesoura' onPress={() => Jokempo("Tesoura")} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    display: "flex",
    flexDirection: "column"
  },
  title: {
    fontSize: 40,
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    marginTop: 50
  },
  buttons: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    top: 50,
  },
  status: {
    justifyContent: "center",
    textAlign: "center",
    alignItems: "center",
    display: "flex",
    top: 10,
  },
  text: {
    marginVertical: 20,
    color: "red",
    fontSize: 25,
    fontWeight: "bold"
  },
  imagens:{
    marginTop:10
  }


});
