import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    width: "100%",
    backgroundColor: "#e0ffff"
  },
  cabecalho: {
    backgroundColor: "#87cefa",
    fontWeight: "bold",
    width: "100%",
    height: 50,
    bottom: "42.5%",
  },
  rodape: {
    backgroundColor: "#87cefa",
    fontWeight: "bold",
    width: "100%",
    height: 50,
    top: "45%",
  },
  body: {
    backgroundColor: "#fff",
  },
});

export default styles;