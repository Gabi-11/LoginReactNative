import { Background, Button } from "@react-navigation/elements";
import React from "react";
import { View, Image, Text } from "react-native";
import { ScrollView, TextInput } from "react-native-gesture-handler";

export default function app() {
  return (
    <View style={{ padding: 100, backgroundColor: "#0000ff" }}>
      <Text style={{ fontSize: 30 }}>Olá Mundo! Bem vindo ao app da 23-2N</Text>
      {/* <Image
        source={require("my-app/assets/images/Mine.png")}
        style={{ width: 100, height: 100 }}
      /> */}
      <TextInput
        placeholder="Digite o texto aqui:"
        style={{ marginTop: 20, borderWidth: 3, padding: 8 }}
      />
      <ScrollView>
        <Text> Que os notebooks do Senac nos ajudem</Text>
        <Text> Que o Expo rode de boa emvossos celulares</Text>
        <Text> Que a rede não nos atrapalhe</Text>
        <Text> VS Code funcionando lindamente</Text>
      </ScrollView>
      {/* Aqui colocamos o componente Button*/}
    <Button
        title = "Clique aqui" onPress={() => alert('Botão clicado!')}
    />
    </View>
  )
}
