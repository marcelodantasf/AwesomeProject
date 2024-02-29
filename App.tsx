import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { SvgXml } from "react-native-svg";
import Icon from "./src/assets/2640303-removebg-preview 1.svg";
import iconsm from "./src/assets/iconsm.svg";



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
      <Icon height={50} />
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