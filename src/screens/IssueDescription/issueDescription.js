import React, { Component } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { navBackButton } from "../../GlobalStyle";
import styles from "./styles";

export default class IssueDescription extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerLeft: (
        <TouchableOpacity style={navBackButton.button}>
          <Icon name="ios-arrow-back" style={navBackButton.icon} />
          <Text style={navBackButton.buttonText}>All Issues</Text>
        </TouchableOpacity>
      )
    };
  };
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Buy New Tables</Text>
        <Text style={styles.desc}>
          Lets Buy New Tables to work standing. I think it would be great!
        </Text>
        <TouchableOpacity style={styles.imageContainer}>
          <Image
            source={require("../../assets/initial.jpg")}
            style={styles.image}
          />
        </TouchableOpacity>
        <View style={styles.dataAndProgress}>
          <Text style={styles.date}>22 Jul, 2017</Text>
          <Text style={styles.progress}>In progress</Text>
        </View>
      </View>
    );
  }
}
