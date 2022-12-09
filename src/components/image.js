import { StyleSheet, Text, View, Image } from 'react-native';

export const ImageViewer = ({ sourceFile }) => {
  return(
    <View style={styles.imageContainer}>
      <Image source={sourceFile} style={styles.image}/>
    </View>
  );
}

const styles = StyleSheet.create({
  imageContainer: {
    paddingTop: 50,
  },
  image:{
    width: 100,
    height: 100,
    borderRadius: 18,
  },
});
