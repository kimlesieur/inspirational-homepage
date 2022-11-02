import { StatusBar } from 'expo-status-bar';
import { store } from './features/store/store';
import { Provider } from 'react-redux';
import { StyleSheet, Text, View } from 'react-native';
import Todos from './features/todos/Todos';

export default function App() {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <Text>Open up App.tsx to start working on your app!</Text>
        <StatusBar style="auto" />
      </View>
      <Todos />
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
