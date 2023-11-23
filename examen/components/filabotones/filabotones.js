import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Boton from '../boton/boton';

export default function header({numerobotones,cambiarpantalla}) {

    const styles = StyleSheet.create({
      fila:{
        
        alignItems:'center',
        flexDirection:'row',
        justifyContent:'space-around'
        },
       
      
    });


  return (
    <View style={styles.fila} >
         {
      
      numerobotones.map((item, index) => (
          <Boton key={index} texto={item} cambiarpantalla={cambiarpantalla} />
        ))}

    </View>
  );
}
