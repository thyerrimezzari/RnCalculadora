import React from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import { Appbar, Button, PaperProvider, TextInput } from "react-native-paper";

const MORE_ICON = Platform.OS === "ios" ? "dots-horizontal" : "dots-vertical";

export default function App() {
  const [altura, setAltura] = React.useState("");
  const [peso, setPeso] = React.useState("");
  const [resultado, setResultado] = React.useState("Preencha Altura e Peso");

  return (
    <PaperProvider>
      <Appbar.Header>
        <Appbar.Content title="Calculadora IMC" />
        <Appbar.Action icon={MORE_ICON} onPress={() => {}} />
      </Appbar.Header>
      <View style={styles.inputContainer}>
        <TextInput label="Altura" onChangeText={(text) => setAltura(text)} />
        <TextInput
          label="Peso"
          onChangeText={(text) => setPeso(text)}
          style={styles.inputView}
        />
        <Button
          icon="calculator"
          mode="contained"
          onPress={() => calculaImc()}
          style={{ marginTop: 30 }}
        >
          CALCULAR IMC
        </Button>

        <Text style={styles.textResult}>{resultado}</Text>
      </View>
    </PaperProvider>
  );

  function calculaImc() {
    console.log(peso);
    console.log(altura);
    const imc = (peso / (altura * altura)).toFixed(2);
    let classeImc = "";

    if (imc < 18.5) classeImc = "Magreza";
    else if (imc < 24.9) classeImc = "Normal";
    else if (imc < 29.9) classeImc = "Sobrepeso";
    else if (imc < 34.9) classeImc = "Obesidade I";
    else if (imc < 39.9) classeImc = "Obesidade II";
    else classeImc = "Obesidade III";

    setResultado(`O IMC é ${imc} - ${classeImc}`);
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  inputContainer: {
    padding: 10,
  },

  inputView: {
    marginTop: 10,
  },

  textResult: {
    marginTop: 30,
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
  },
});
