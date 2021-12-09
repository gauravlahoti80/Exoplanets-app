import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Header } from "react-native-elements";
import axios from "axios";

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      data: [],
    };
  }
  fetchnewdata = () => {
    axios.get('http://127.0.0.1:5000/getheaders').then((response)=>{
      return this.setState({
        data: data,
      });
    }).catch((error)=>{
      alert(error.message)
    })
  }
  fetchData = async () => {
    var response = await fetch("http://127.0.0.1:5000/getheaders");
    var data = await response.json();
    this.setState({
      data: data,
    });
  };
  componentDidMount(){
    this.fetchnewdata()
  }
  render() {
    console.log(this.state.data)
    return (
      <View style={styles.container}>
        <Header
          centerComponent={{
            text: "Exoplanets App",
            style: { fontSize: 20, fontWeight: "bold" },
          }}
        ></Header>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {},
});
