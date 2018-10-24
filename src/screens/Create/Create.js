import React, { Component } from "react";
import {
  TextInput,
  View,
  Text,
  TouchableOpacity,
  Image,
  KeyboardAvoidingView
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import LinearGradient from "react-native-linear-gradient";
import ImagePicker from "react-native-image-crop-picker";
import Modal from "react-native-modal";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

import { navTitleStyle, primaryFontColor } from "../../GlobalStyle";
import styles from "./style";

export default class CeateIssue extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imageUrl: "",
      title: "",
      description: "",
      isModalVisible: false
    };
  }
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
      this.setState({
        imageUrl: image.path
      });
    });
  };
  renderImageUpload = () => {
    if (!this.state.imageUrl) {
      return (
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
      );
    } else {
      return (
        <View style={styles.imageContainer}>
          <Image
            source={{ uri: this.state.imageUrl }}
            style={styles.imagePreview}
          />
          <TouchableOpacity
            onPress={() => this.setState({ imageUrl: "" })}
            style={styles.removeImage}
          >
            <Icon name="md-trash" size={20} color="#494D53" />
          </TouchableOpacity>
        </View>
      );
    }
  };
  _toggleModal = () =>
    this.setState({ isModalVisible: !this.state.isModalVisible });

  render() {
    return (
      <KeyboardAwareScrollView style={{ flex: 1 }}>
        <View style={styles.container}>
          <View style={styles.uploadContainer}>{this.renderImageUpload()}</View>
          <View style={styles.inputContainer}>
            <TouchableOpacity
              style={styles.Input}
              onPress={() => this._toggleModal()}
            >
              <Icon name="ios-add" size={35} style={styles.InputIcon} />
              <Text style={styles.text}>Choose Category</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.Input}>
              <Icon name="ios-pin" size={35} style={styles.InputIcon} />
              <Text style={styles.text}>Choose Category</Text>
            </TouchableOpacity>
            <View style={styles.Input}>
              <TextInput
                style={[styles.text, styles.title]}
                value={this.state.title}
                placeholder="Title"
                onChangeText={text => this.setState({ title: text })}
              />
            </View>
            <View style={[styles.Input, styles.descInput]}>
              <TextInput
                multiline={true}
                style={[styles.text, styles.description]}
                value={this.state.description}
                placeholder="Description (Optional)"
                onChangeText={text => this.setState({ description: text })}
              />
            </View>
          </View>
          <TouchableOpacity style={styles.createButton}>
            <Text style={[styles.text, styles.createText]}>Create</Text>
          </TouchableOpacity>
          <Modal isVisible={this.state.isModalVisible}>
            <View style={styles.modalStyle}>
              <Text>Hello!</Text>
              <TouchableOpacity onPress={this._toggleModal}>
                <Text>Hide me!</Text>
              </TouchableOpacity>
            </View>
          </Modal>
        </View>
      </KeyboardAwareScrollView>
    );
  }
}
