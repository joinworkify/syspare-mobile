// app/(tabs)/index.tsx
import { StyleSheet, View } from 'react-native'; // Import View and StyleSheet
import { WebView } from 'react-native-webview'; // Import WebView

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <WebView
        source={{ uri: 'https://syspare.vercel.app/en' }}
        style={styles.webView}
        originWhitelist={['*']}
        javaScriptEnabled
        domStorageEnabled
        setSupportMultipleWindows={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    width: '100%',
    height: '100%',
    paddingTop: 30,
  },
  webView: {
    width: '100%',
    height: '100%',
  },
});
