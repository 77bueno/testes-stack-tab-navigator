import { Button, StyleSheet, Text, View, Image, Pressable } from "react-native";

import { auth } from "../../firebaseConfig";
import { signOut } from "firebase/auth";

export default function AreaLogada({ navigation }) {
  // Acessando dados do usuário logado
  // console.log(auth.currentUser);

  const { email } = auth.currentUser;
  console.log(email);

  const { displayName } = auth.currentUser;
  console.log(displayName);

  const { photoURL } = auth.currentUser;

  const logout = async () => {
    try {
      await signOut(auth);
      navigation.replace("Inicial");
    } catch (error) {
      console.error(error.code);
    }
  };

  return (
    <View style={estilos.container}>
      <Pressable>
        <Image
          source={{ uri: photoURL || "https://via.placeholder.com/150" }}
          style={[estilos.image, { borderRadius: 85, backgroundColor: "gray" }]}
        />
      </Pressable>

      <View style={estilos.topo}>
        <View style={estilos.geral}>
          <Text>Você está na área logada.</Text>
        </View>
        <Text style={estilos.bemVindo}>Bem-vindo(a)</Text>
        <Text>Seu email é: </Text>
        <Text style={{ fontWeight: "bold" }}>{email}</Text>
        <Text style={{ fontWeight: "bold" }}>{displayName}</Text>
        <Button
          onPress={() => navigation.navigate("Perfil")}
          title="Perfil"
          color="#D35400"
        />
      </View>
      <Button onPress={logout} title="Logout" color="#D35400" />
    </View>
  );
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  topo: {
    marginVertical: 32,
  },
  bemVindo: {
    fontSize: 24,
    marginVertical: 16,
  },
  image: {
    width: 64,
    height: 64,
    borderRadius: 50,
    marginTop: 20,
    position: "absolute",

    right: 20,
    top: 20,
  },
});
