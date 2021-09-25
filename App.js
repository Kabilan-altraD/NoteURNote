import React, { useEffect, useState } from "react";
import { 
  View,
  Text,
  TouchableOpacity
} from "react-native";
import asyncStorage from "./app/components/utils/asyncStorage";

export default App = (props) => {

  const [name, setName] = useState("");
  useEffect(async() => {
    await asyncStorage.saveItem("user","kabilan");
    var i = await asyncStorage.getItem("user")
    console.log(await i);
  })
  async function clicker() {
    var k = await asyncStorage.getItem("user")
    setName(k);
  }
  return (
          <View>
            <Text>hello</Text>
          </View>)
}