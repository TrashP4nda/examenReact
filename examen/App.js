import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Header from './components/header/header';
import Partemedio from './components/partemedio/partemedio'
import { useState } from 'react';
import Footer from './components/footer/footer';



export default function App() {

  const [textopantalla,setTextoPantalla] = useState("");
  
  var guardarResultadoSuma = 0;
  var guardarResultadoSuma2 = 0;
  var guardarResultadoResta = 0;
  var guardarResultadoResta2 = 0;
  var guardarResultadoMultiplicacion = 0;
  var guardarResultadoMultiplicacion2 = 0;
  var guardarResultadoDivision = 0;
  var guardarResultadoDivision2 = 0;
  var resultadofinal = 0;
  const cambiarpantalla = (loquesea) =>{

    if (guardarResultadoSuma != 0) {
     // var resultado = parseInt(guardarResultadoSuma) + parseInt(loquesea);
      // setTextoPantalla(resultado)

       guardarResultadoSuma2 = guardarResultadoSuma2.toString() + loquesea.toString();
       
      
    }
    else if (guardarResultadoResta != 0) {
     
      //var resultadoresta = parseInt(guardarResultadoResta) - parseInt(loquesea);
      //setTextoPantalla(resultadoresta)
      guardarResultadoResta2 = guardarResultadoResta2.toString() + loquesea.toString();
      
    }else if( guardarResultadoMultiplicacion != 0){
      //var resultadomultiplicacion = parseInt(guardarResultadoMultiplicacion) * parseInt(loquesea);
      //setTextoPantalla(resultadomultiplicacion)
      guardarResultadoMultiplicacion2 = guardarResultadoMultiplicacion2.toString() + loquesea.toString();
    }else if( guardarResultadoDivision != 0){
      //var resultadodivision = parseInt(guardarResultadoDivision) / parseInt(loquesea);
      //setTextoPantalla(resultadodivision)
      guardarResultadoDivision2 = guardarResultadoDivision2.toString() + loquesea.toString();
    }
    
    if (loquesea == "+") {
    
    guardarResultadoSuma = parseInt(textopantalla);
    
   }else if(loquesea == "-"){
    guardarResultadoResta = parseInt(textopantalla);

   }else if(loquesea == "*"){
    guardarResultadoMultiplicacion = parseInt(textopantalla);
  
   }
   else if(loquesea == "/"){
    guardarResultadoDivision = parseInt(textopantalla);
  
   }else if(loquesea == "=" && guardarResultadoSuma2 != 0){
    
    setTextoPantalla(guardarResultadoSuma + parseInt(guardarResultadoSuma2));
   
   }
   else if(loquesea == "=" && guardarResultadoResta2 != 0){
    
    setTextoPantalla(guardarResultadoResta - parseInt(guardarResultadoResta2));
   
   }
   else if(loquesea == "=" && guardarResultadoMultiplicacion2!= 0){
    
    setTextoPantalla(guardarResultadoMultiplicacion2 * parseInt(guardarResultadoMultiplicacion2));
   
   }
   else if(loquesea == "=" && guardarResultadoDivision2 != 0){
    
    setTextoPantalla(guardarResultadoDivision2 / parseInt(guardarResultadoDivision2));
   
   }

   
   
   else if(guardarResultadoSuma == 0 && guardarResultadoResta == 0 && guardarResultadoMultiplicacion == 0 && guardarResultadoDivision == 0){
    setTextoPantalla(textopantalla+loquesea)
   }
     
      
    
    
  }

  const vaciarpantalla = () =>{
    setTextoPantalla("");
  }
  
  
  return (
    <View style={styles.container}>
      <Header/>
      <Partemedio vaciarpantalla={vaciarpantalla} textopantalla={textopantalla} cambiarpantalla={cambiarpantalla}/>
      <Footer/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    gap:20,
    
  },
});
