import { Text, SafeAreaView, StyleSheet, TextInput } from 'react-native';
import {useState} from 'react';

// You can import supported modules from npm
import { Card } from 'react-native-paper';

// or any files within the Snack
import DisplayQRCode from './components/DisplayQRCode';

export default function App() {

  const [code, setCode] = useState();

  return (
    <SafeAreaView style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={setCode}
        value={code}
        placeholder="Enter your code here"
      />
      <Card>
        <DisplayQRCode code={code} />
      </Card>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
