import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    page: {
      flex: 1,
      width: "100%",
      paddingVertical: 40,
      padding: 10,
    },
    name: {
      fontSize: 24,
      fontWeight: "600",
      marginVertical: 10,
    },
    header: {
      fontWeight: "bold", 
      marginVertical: 20, 
      fontSize: 19 
    },
    seperator: {
      height: 1,
      backgroundColor: "lightgrey",
      marginVertical: 10,
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
    },
  });

  export default styles;