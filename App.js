import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  Image,
  ImageBackground,
} from "react-native";

/*  estilos */
import styles from "./src/styles/stylecomponent";
/* componentes */
import Componente1 from "./src/componentes/firstcomponent";
import Componente2 from "./src/componentes/secondcomponent";
import Componente3 from "./src/componentes/thirdcomponent";

export default function App() {
  return (
    <View style={styles.container}>

      <StatusBar style="auto" />

   {/*  cabecalho */}
      <Componente1/>

    {/*   corpo */}
      <Componente2/>

     {/*  rodape */}
      <Componente3/>

    </View>
  );
}