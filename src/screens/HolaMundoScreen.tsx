import { StyleSheet, Text, View } from 'react-native';

export const HolaMundoScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hola mundo</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    text: {
      fontSize: 45
    }
  });