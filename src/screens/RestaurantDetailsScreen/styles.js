import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    page: {
      flex: 1,
    },
    container: {
      margin: 10,
    },
    image: {
      width: "100%",
      aspectRatio: 5 / 3,
    },
    iconContainer: {
      position: 'absolute',
      top: 40,
      left: 10,
    },
    title: {
      fontSize: 35,
      fontWeight: "600",
      marginVertical: 10,
    },
    subtitle: {
      fontSize: 15,
      color: "grey",
    },
    menuTitle: {
      marginVertical: 10,
      fontSize: 16,
      letterSpacing: .6,
  }
  });

  export default styles;