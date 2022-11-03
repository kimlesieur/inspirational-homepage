import { Text, View, TextInput, StyleSheet, NativeSyntheticEvent, TextInputSubmitEditingEventData } from "react-native";
import Todo from "../../components/Todo";

interface Props {
    handleChange: (text: string) => void,
    handleSubmit: (e: NativeSyntheticEvent<TextInputSubmitEditingEventData>) => void,
    input: string,
    todos: Todo[];
}

const TodosContainer = ({handleChange, handleSubmit, input, todos } : Props) => {
    return (
        <View style={styles.container} >
            <Text style={styles.title}>Qu'avez-vous en tête aujoud'hui ?</Text>
            <TextInput
                style={styles.input}
                onChangeText={handleChange}
                placeholder="faire de l'exercice..."
                onSubmitEditing={handleSubmit}
                value={input}
            />
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
        flex: 3,
        alignItems: 'center',
        backgroundColor: 'rgba(255, 255, 255, 0.4)',
    },
    title: {
        fontSize: 30,
        fontWeight: "700",
        textAlign: 'center'
    },
    input: {
        margin: 20,
        width: '80%',
        height: 40,
        fontSize: 18,
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
    }
});

export default TodosContainer;