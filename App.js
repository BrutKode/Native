import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View} from 'react-native';
import { ImageViewer } from './src/components/image';
import { Button } from './src/components/button';
import { Form } from './src/components/form';

export default function App() {
  return (
    <View style={styles.container}>
      <Form />
      <ImageViewer sourceFile={require('./src/components/assets/images/metamask.png')} />
      <Text style={styles.text}>Hi There using react native for the first time, excited to write hello world!</Text>
      <Button label="click" />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0a0a0a',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#ffff00',
  },
});
