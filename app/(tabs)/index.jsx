import { View,  StyleSheet, Text,Image } from 'react-native';
import Carousel from "../../componets/Carousel";

export default function HomeScreen() {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.leftContainer}>
        <Image 
          source={require('../../assets/images/Regras.png')} 
          style={styles.image}
        />
      </View>
      <View style={styles.rightContainer}>
        <Carousel />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "#fff",
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: "center",
  },
  leftContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 8, // Adicionando espaço entre os containers
  },
  rightContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    borderLeftWidth: 1,
    borderColor: "#000",
  },
  image: {
    flex: 1,
    width: '100%', // Garante que a imagem ocupe toda a largura do container
    resizeMode: "contain",
  },
});