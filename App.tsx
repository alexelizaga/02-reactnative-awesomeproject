// import { HolaMundoScreen } from './src/screens/HolaMundoScreen';
// import { ContadorScreen } from "./src/screens/ContadorScreen";
import { SafeAreaView, StyleSheet } from 'react-native';
// import { BoxObjectModelScreen } from './src/screens/BoxObjectModelScreen';
// import DimensionesScreen from './src/screens/DimensionesScreen';
// import PositionScreen from './src/screens/PositionScreen';
// import FlexScreen from './src/screens/FlexScreen';
import TareaScreen from './src/screens/TareaScreen';

export default function App() {
  return (
    <SafeAreaView style={ styles.container }>
      {/* <HolaMundoScreen /> */}
      {/* <ContadorScreen /> */}
      {/* <BoxObjectModelScreen /> */}
      {/* <DimensionesScreen /> */}
      {/* <PositionScreen /> */}
      {/* <FlexScreen /> */}
      <TareaScreen />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#28425B'
    }
});