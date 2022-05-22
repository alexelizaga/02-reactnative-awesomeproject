import { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Fab } from "../components/Fab";

export const ContadorScreen = () => {

    const [contador, setContador] = useState(10)

    return (
        <View style={style.container}>
            <Text style={style.title}>Contador: { contador }</Text>

            <Fab
                title="+1"
                position="br"
                onPress={ () => setContador( contador + 1 ) }
            />

            <Fab
                title="-1"
                position="bl"
                onPress={ () => setContador( contador - 1 ) }
            />
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    title: {
        fontSize: 40
    }
})