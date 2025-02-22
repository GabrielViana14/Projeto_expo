import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Alert, StyleSheet, Text, View } from 'react-native';
import SimpleButton from './componente/simpleButton';


export default function App() {
  const [back_color, setback_color] = useState("#fff")
  const [textColor, settextColor] = useState("#000")

  const changeColor = () => {setback_color(back_color === "#fff" ? "#000": "#fff");}
  const changeTextColor = () => {settextColor(textColor === "#000" ? "#fff": "#000");}

  return (
    <View style={[styles.container, {backgroundColor : back_color}]}>
      <Text style={styles.title}>Open up App.tsx to start working on your app</Text>
      <SimpleButton titulo='titulo' onPress = {() => {Alert.alert("Alerta","botão apertado")}}/>
      <StatusBar style="auto" />
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: "#699DF0",
    fontSize: 24,


  }
});
