import {useState, useEffect} from 'react';
import { StyleSheet, View, Pressable, Text, ScrollView, TextInput, ImageBackground, NativeSyntheticEvent, TextInputSubmitEditingEventData, Image } from "react-native";
import Todo from "../../components/Todo";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { selectTodos, addTodo } from "./todosSlice";
import { loadImages, selectUrls } from '../backgroundImages/backgroundImagesSlice';
import TodosContainer from './TodosContainer';
import Weather from '../weather/Weather';

export default function Todos() {
    const dispatch = useAppDispatch();
    const todos = useAppSelector(selectTodos);
    const urls = useAppSelector(selectUrls);
    const [input, setInput] = useState("");
    const [count, setCount] = useState(0);


    useEffect(() => {
       dispatch(loadImages());
    }, []);

    const handleChange = (text: string) => {
        setInput(text);
    }

    const handleSubmit = (e: NativeSyntheticEvent<TextInputSubmitEditingEventData>) => {
        const todo: Todo = {text: input, done: false};
        dispatch(addTodo(todo));
        setInput("");
    };

    const image = { uri: `${urls[count]}` };
    const handleLeftClick = () => {
        setCount(count-1);
    }
    const handleRightClick = () => {
        setCount(count+1);
    };


    return (
            <ImageBackground source={image} resizeMode="cover" style={styles.image}>
                <View style={styles.containerWeather}>
                    <Weather />
                </View>
                <View style={styles.containerTodos}>
                    <View style={styles.buttonContainer} > 
                        <Pressable
                            onPress={() => handleLeftClick()}
                            disabled={count < 1}
                        >
                        <Image source={require('../../assets/left-arrow.png')} style={styles.leftButtonIcon} />
                        </Pressable>
                    </View>
                    <TodosContainer handleChange={handleChange} handleSubmit={handleSubmit} input={input} todos={todos} />
                    <View style={styles.buttonContainer}>
                        <Pressable
                            onPress={() => handleRightClick()}
                            disabled={count > 3}
                        >
                        <Image source={require('../../assets/right-arrow.png')} style={styles.rightButtonIcon} />
                        </Pressable>
                    </View>
                </View>       
            </ImageBackground>
    )
};


const styles = StyleSheet.create({
    image: {
        flex: 1,
        justifyContent: "center",
    },
    text: {

    },
    containerWeather: {
        flex: 1,
        flexDirection: 'row',
        width: '50%',
        margin: 'auto',
    },
    containerTodos: {
        flex: 2,
        flexDirection: 'row',
        width: '80%',
        margin: 'auto',
        justifyContent: 'center'
    },
    buttonContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        paddingTop: 100
    }, 
    leftButtonIcon: {
        width: 50,
        height: 50
    },
    rightButtonIcon: {
        width: 50,
        height: 50
    },
  });
