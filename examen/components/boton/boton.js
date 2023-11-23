import { StatusBar } from "expo-status-bar";
import { Pressable, StyleSheet, Text, View } from "react-native";

export default function boton({texto,cambiarpantalla}) {
  const styles = StyleSheet.create({
    boton: {
      backgroundColor: "#2B6ED2",
      width: 50,
      height: 50,
      alignItems: "center",
      justifyContent: "center",
    },
    texto: {
      color: "white",
      fontSize: 30,
      
    },
  });
  

  return (
    <View>
      <Pressable style={styles.boton} onPress={()=>cambiarpantalla(texto)}>
        <Text style={styles.texto}>{texto}</Text>
      </Pressable>
    </View>
  );
}
