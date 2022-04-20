import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    page: {
      flex: 1,
      width: "100%",
      paddingVertical: 40,
      padding: 10,
    },
    name: {
      fontSize: 30,
      fontWeight: "600",
      marginVertical: 10,
    },
    description: {
      color: "#525252",
    },
    seperator: {
      height: 1,
      backgroundColor: "lightgrey",
      marginVertical: 10,
    },
    row: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      marginTop: 50,
    },
    quantity: {
      fontSize: 25,
      marginHorizontal: 20,
    },
    button: {
      backgroundColor: '#000',
      marginTop: 'auto',
      padding: 20,
      alignItems: 'center',
      borderRadius: 5
    },
    buttonText: {
      color: '#fff',
      fontWeight: '600',
      fontSize: 20
    }
  });

  export default styles;