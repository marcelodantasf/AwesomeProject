import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

const App = () => {

  const [number, setNumber] = useState<number>(0);

  const Aumenta = () => {
      setNumber(number+1);
  }

  const Diminui = () => {
      setNumber(number-1);
  }

  return (
    <View style={style.container}>
      <Text style={style.text}>{number}</Text>
      <View style={style.buttonmenu}>
      <TouchableOpacity style={style.button} onPress={Aumenta}>
        <Text style={style.text}>+</Text>
      </TouchableOpacity>
      <TouchableOpacity style={style.button} onPress={Diminui}>
        <Text style={style.text}>-</Text>
      </TouchableOpacity>
      </View>
    </View>
  )
}

const style = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "space-evenly",
    flex: 1,
    backgroundColor: "#FEEEAB"
  },
  text: {
    fontSize: 32,
    fontWeight: "bold"
  },
  button: {
    backgroundColor: "#F99A54",
    paddingHorizontal:"10%",
    borderRadius: 20,
    marginBottom: '5%'
  },
  buttonmenu: {
    //height: "20%",
    //justifyContent: 'space-between',
  }
})

export default App;