import { Text, View, StyleSheet, Image } from 'react-native';
import QRCode from 'react-qr-code';

export default function DisplayQRCode({ code }) {
  console.log(code);

  const getDisplay = (code) => {
    if (!code || code.length === 0) {
      return <Text>QR Code will be displayed here</Text>;
    }
    return <QRCode value={code} />;
  };

  return <View style={styles.container}>{getDisplay(code)}</View>;
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
});
