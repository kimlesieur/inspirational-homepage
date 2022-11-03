import { Button, StyleSheet, Text, View, Pressable, GestureResponderEvent} from "react-native"
import {useState} from 'react';


const Todo = ({todo}: {todo: Todo}) => {

    const [done, setDone] = useState(todo.done);


    const handleDelete = () => {
        console.log('delete');
    };

    const handleToggle = (e: GestureResponderEvent) => {
        console.log(done);
        setDone(!done);
    }


    return (
        <View style={styles.container}>
            <Text style={[styles.textTodo, done && {color: '#c4c4c4'}]} >{todo.text}</Text>
            <Pressable
                onPress={handleDelete}
                style={styles.button}
            >
                <Text style={styles.buttonInner}>X</Text>
            </Pressable>
            <Pressable
                onPress={(e) => handleToggle(e)}
                style={[styles.buttonToggle, done && { backgroundColor: 'rgba(50, 135, 188, 0.3)',}]}
            >
                { done ? 
                <Text style={styles.buttonInner}>Undone</Text>
                :
                <Text style={styles.buttonInner}>Done</Text>

                }

            </Pressable>

        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        margin: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignContent: 'space-between'

    },
    textTodo: {
        fontSize: 20,
    },
    button: {
        backgroundColor: 'rgba(201, 0, 50, 0.4)',
        borderRadius: 50,
        marginLeft: 10

    },
    buttonToggle: {
        backgroundColor: 'rgba(50, 135, 188, 0.8)',
        borderRadius: 20,
        marginLeft: 10

    },
    buttonInner: {
        fontSize: 18,
        paddingLeft: 5,
        paddingRight: 5
    }

});

export default Todo;