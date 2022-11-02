import { Text, View } from "react-native"



const Todo = ({todo}: {todo: Todo}) => {
    return (
        <View>
            <Text>{todo.text}</Text>
            <Text>{todo.done}</Text>
        </View>
    )
}

export default Todo;