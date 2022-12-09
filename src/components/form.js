import { StyleSheet, View, Pressable, Text } from 'react-native';

export const Form = () => {
  return(
    <View style={styles.formContainer}>
      <Text style={styles.heading}>Submit Form</Text>
    </View>
  );
}

let styles = StyleSheet.create({
  formContainer: {
    width: "500px",
    height: "200px",
    borderRadius: "20px",
    backgroundColor: "rgba(255,255,255,0.3)",
  },
  heading: {
    fontSize: "x-large",
    padding: "5px",
    color: "#fff",
  },
});
