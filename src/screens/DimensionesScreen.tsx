import { View, Text, StyleSheet, Dimensions, useWindowDimensions } from 'react-native'

export default function DimensionesScreen() {
    const { width, height } = useWindowDimensions();
    return (
        <View>
            <View style={styles.container}>
                <View style={{
                    ...styles.cajaMorada,
                    width: width * 0.50
                }}></View>
                <View style={styles.cajaNaranja}></View>
            </View>
            <Text style={styles.title}>W: { width }, H: { height }</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 200,
        backgroundColor: 'red'
    },
    cajaMorada: {
        backgroundColor: "#5856D6",
        height: '50%',
        minHeight: 100,
        minWidth: 100
    },
    cajaNaranja: {
        backgroundColor: "#F0A23B"
    },
    title: {
        textAlign: 'center'
    }
});