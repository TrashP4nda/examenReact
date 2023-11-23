import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Boton from '../boton/boton';
import FilaBotones from '../filabotones/filabotones';
import Pantallaresultado from '../pantallaresultado/pantallaresultado';
export default function partemedio({vaciarpantalla,textopantalla,cambiarpantalla}) {


    const fila1 = [0,1,2]
    const fila2 = [3,4,5]
    const fila3 = [6,7,8]
    const fila4 = [9,0,"-"];
    const fila5 = ["+","/","*"];

    const styles = StyleSheet.create({
      partemedio:{
        flex: 1,
        gap:30
        },
      texto:{
        color:'white',
        padding:10,
        fontSize:30
      },
      filaespecial:{
        alignItems:'center',
        flexDirection:'row',
        justifyContent:'space-around'
      }  

      
    });

  return (
    <View style={styles.partemedio}>
        <Pantallaresultado textopantalla = {textopantalla}/>
       <FilaBotones numerobotones={fila1} cambiarpantalla={cambiarpantalla}/>
       <FilaBotones numerobotones={fila2} cambiarpantalla={cambiarpantalla}/>
       <FilaBotones numerobotones={fila3} cambiarpantalla={cambiarpantalla}/>
       <FilaBotones numerobotones={fila4} cambiarpantalla={cambiarpantalla}/>
       <FilaBotones numerobotones={fila5} cambiarpantalla={cambiarpantalla}/>
       <View style={styles.filaespecial}>
            <Boton texto="C" cambiarpantalla={vaciarpantalla}/>
       </View>
    </View>
  );
}
