import { StyleSheet, View, Text, ScrollView } from "react-native";
import Todo from "../../components/Todo";
import { useAppSelector } from "../store/hooks";
import { selectTodos } from "./todosSlice";

export default function Todos() {
    const todos = useAppSelector(selectTodos);
    return (
        <View style={styles.container}>
            <Text>Todos list</Text>
            {todos.map((todo: Todo, index: number) => {
                return (
                    <Todo todo={todo} key={index} />
                )
            })}
        </View>
    )
};


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
