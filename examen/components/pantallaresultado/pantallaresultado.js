import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';


export default function pantallaresultado({textopantalla}) {


    const styles = StyleSheet.create({
      pantalla:{
        borderColor:'black',
        borderWidth:1,
        alignItems:'center',
        margin:20
        },
      texto:{
        color:'black',
        padding:10,
        fontSize:30
      }  
      
    });


  return (
    <View style={styles.pantalla}>
       <Text style={styles.texto}>{textopantalla}</Text>
    </View>
  );
}
