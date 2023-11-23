import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';


export default function header({texto,cambiar}) {




  

    const styles = StyleSheet.create({
      header:{
        backgroundColor:'#2B6ED2',
        alignItems:'center'
        },
      texto:{
        color:'white',
        padding:10,
        fontSize:30
      }  
      
    });


  return (
    <View style={styles.header}>
       <Text style={styles.texto}>Calculadora</Text>
    </View>
  );
}
