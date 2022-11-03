import { View, Text, Image, StyleSheet } from "react-native";


const Weather = () => {
    return (
        <View style={styles.container}>
            <View style={styles.containerImage}>
                <Image source={require('../../assets/pluvieux.png')} style={styles.image}/>
            </View>
            <View style={styles.containerText}>
                <Text>25°</Text>
                <Text>Nantes</Text>
                <Text>Pluvieux</Text>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        width: '80%',
        backgroundColor: 'rgba(255, 255, 255, 0.4)',
        margin: 'auto'
    },
    containerImage: {
        flex: 1,
        alignItems: 'flex-end',
        marginRight: 20,
    },
    containerText: {
        flex: 1,
        marginLeft: 20,
    
    },
    image: {
        width: 80,
        height: 80,
    },

})

export default Weather;