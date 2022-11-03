import { store } from './features/store/store';
import { Provider } from 'react-redux';
import { StyleSheet, View } from 'react-native';
import Todos from './features/todos/Todos';

export default function App() {
  return (
    <Provider store={store}>
      <View style={styles.container}>
         <Todos /> 
      </View>
    </Provider>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});


