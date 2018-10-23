import React, { Component } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import LinearGradient from "react-native-linear-gradient";
import ImagePicker from "react-native-image-crop-picker";

import { navTitleStyle } from "../../GlobalStyle";
import styles from "./style";

export default class CeateIssue extends Component {
  static navigationOptions = ({ navigation }) => {
    let title = "";
    if (navigation.state.params.page == "idea") {
      title = "New Idea";
    } else {
      title = "New Issue";
    }
    return {
      headerTitle: (
        <Text style={[navTitleStyle, { marginLeft: -20 }]}>{title}</Text>
      ),
      headerLeft: (
        <Icon
          name="ios-close"
          size={35}
          style={{
            color: "#000",
            marginLeft: 20
          }}
        />
      )
    };
  };
  handleUpload = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true
    }).then(image => {
      console.log(image);
    });
  };
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.uploadContainer}>
          <TouchableOpacity onPress={() => this.handleUpload()}>
            <LinearGradient
              colors={["#F93E45", "#E71A86"]}
              style={styles.linearGradient}
            >
              <Icon
                name="ios-camera"
                size={45}
                style={{
                  color: "#fff"
                }}
              />
              <View style={styles.uploadTextContainer}>
                <Icon
                  name="ios-add"
                  size={20}
                  style={{
                    color: "#fff"
                  }}
                />
                <Text style={styles.uploadText}>Add photo</Text>
              </View>
            </LinearGradient>
          </TouchableOpacity>
        </View>
        <View style={styles.inputContainer} />
      </View>
    );
  }
}
