import React, { Component } from "react";
import { Text, Image, View } from "react-native";


class MinhaImagem extends Component {
  render() {
    let url = {uri:this.props.caminho};
    let css = {height:200};
    return (
      <Image source={url}  style={css}></Image>
    );
  }
}

const App = () => {
  let url = "https://firebasestorage.googleapis.com/v0/b/teste-63577.appspot.com/o/Imagens%2Fc3a5a15585487bd43a308928532f19c69fa818db_hq.gif?alt=media&token=8a826ab2-8709-489c-8bf0-dd3ff94c846b";
let url2="https://firebasestorage.googleapis.com/v0/b/teste-63577.appspot.com/o/Imagens%2Fbandeiras-da-republica-da-irlanda_1232-3047.jpg?alt=media&token=7d440646-8275-4ea9-82a9-bba05ee1d314";

  return (
    <View>
      <Text>XXX</Text>
      <MinhaImagem caminho={url} />
      <MinhaImagem caminho={url2} />
    </View>
  );
}

export default App;