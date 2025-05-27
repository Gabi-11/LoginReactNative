import React from "react";
import { View, Image, Text, TextInput, ScrollView, Button } from "react-native";

export default function App() {
  return (
    <View style={{ flex: 1, padding: 20, backgroundColor: "#0000ff" }}>
      <Text style={{ fontSize: 24, color: "#fff", marginBottom: 20 }}>
        Olá Mundo! Vamos fazer seu login
      </Text>

      <Image
        source={require('@/assets/images/Mine.png')}
        style={{ width: 100, height: 100, marginBottom: 20 }}
      /> 
     

      <TextInput
        placeholder="Insira seu e-mail:"
        style={{
          marginTop: 20,
          borderWidth: 2,
          padding: 10,
          backgroundColor: "#fff",
        }}
      />
      <TextInput
        placeholder="Insira sua senha:"
        secureTextEntry
        style={{
          marginTop: 20,
          borderWidth: 2,
          padding: 10,
          backgroundColor: "#fff",
        }}
      />

      <ScrollView style={{ marginTop: 20 }}>
        <Text>
          Que os notebooks do Senac nos ajudem
        </Text>
        <Text>
          Que o Expo rode de boa em vossos celulares
        </Text>
        <Text>
          Que a rede não nos atrapalhe
        </Text>
        <Text>
          VS Code funcionando lindamente
        </Text>
      </ScrollView>

      <View style={{ marginTop: 20 }}>
        <Button title="Entrar" onPress={() => alert("Botão clicado!")} />
      </View>
    </View>
  );
}
