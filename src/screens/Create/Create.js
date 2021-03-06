import _ from "lodash";
import React, { Component } from "react";
import { TextInput, View, Text, TouchableOpacity, Image } from "react-native";
import CircleCheckBox, { LABEL_POSITION } from "react-native-circle-checkbox";
import Icon from "react-native-vector-icons/Ionicons";
import LinearGradient from "react-native-linear-gradient";
import ImagePicker from "react-native-image-crop-picker";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";

import { navTitleStyle, primaryFontColor, themeColor } from "../../GlobalStyle";
import styles from "./style";
import Modal from "../../components/Modal";
import Switch from "../../components/Switch";
import DatePicker from "./DatePicker";

export default class CeateIssue extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imageUrl: "",
      title: "",
      description: "",
      isModalVisible: false,
      palcesModal: false,
      categories: [
        { name: "Technical", value: 1 },
        { name: "Kitchen", value: 2 },
        { name: "Work Place", value: 3 },
        { name: "Home", value: 4 },
        { name: "School", value: 5 },
        { name: "Other", value: 6 }
      ],
      selecetdCategories: [],
      switchValue: false,
      datetime: "2018-09-30 20:00"
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
  _selectCategories = category => {
    if (!_.includes(this.state.selecetdCategories, category)) {
      this.setState({
        selecetdCategories: [...this.state.selecetdCategories, category]
      });
    }
    if (_.includes(this.state.selecetdCategories, category)) {
      const updateCategory = _.filter(this.state.selecetdCategories, function(
        newObj
      ) {
        return newObj.name !== category.name;
      });
      console.log(updateCategory, "updated");
      this.setState({ selecetdCategories: updateCategory });
    }
  };
  toggleSwitch = value => {
    this.setState({ switchValue: value });
  };
  render() {
    return (
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
          <TouchableOpacity
            onPress={() =>
              this.setState({
                palcesModal: true
              })
            }
            style={styles.Input}
          >
            <Icon name="ios-pin" size={30} style={styles.InputIcon} />
            <Text style={styles.text}>Add Location</Text>
          </TouchableOpacity>
          <View style={styles.switchContainer}>
            <View style={styles.switchText}>
              <Icon name="ios-clock" size={25} style={styles.InputIcon} />
              <DatePicker
                isReminderTrue={this.state.switchValue}
                Input={styles.Input}
                text={styles.text}
                switchText={styles.switchText}
                InputIcon={styles.InputIcon}
                datetime={this.state.datetime}
                DatePickerStyle={styles.DatePickerStyle}
              />
            </View>
            <Switch
              toggleSwitch={this.toggleSwitch}
              switchValue={this.state.switchValue}
            />
          </View>
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
        <Modal isVisible={this.state.palcesModal}>
          <View style={styles.modalStyle}>
            <GooglePlacesAutocomplete
              placeholder="Search"
              minLength={2} // minimum length of text to search
              autoFocus={true}
              returnKeyType={"search"} // Can be left out for default return key https://facebook.github.io/react-native/docs/textinput.html#returnkeytype
              listViewDisplayed="auto" // true/false/undefined
              fetchDetails={true}
              renderDescription={row => row.description} // custom description render
              onPress={(data, details = null) => {
                // 'details' is provided when fetchDetails = true
                console.log(data, details);
              }}
              getDefaultValue={() => ""}
              query={{
                // available options: https://developers.google.com/places/web-service/autocomplete
                key: "AIzaSyD1-1TpolMdL-NjP54cRakj74QLsjLC-gQ",
                language: "en", // language of the results
                types: "(cities)" // default: 'geocode'
              }}
              styles={{
                textInputContainer: {
                  width: "100%",
                  backgroundColor: themeColor
                },
                description: {
                  fontWeight: "bold"
                },
                predefinedPlacesDescription: {
                  color: "#1faadb"
                }
              }}
              currentLocation={true}
              nearbyPlacesAPI="GooglePlacesSearch"
              debounce={200}
            />
          </View>
        </Modal>
        <Modal isVisible={this.state.isModalVisible}>
          <View style={styles.modalStyle}>
            {_.map(this.state.categories, (category, index) => {
              return (
                <CircleCheckBox
                  key={index}
                  checked={_.includes(this.state.selecetdCategories, category)}
                  onToggle={() => this._selectCategories(category)}
                  labelPosition={LABEL_POSITION.RIGHT}
                  label={category.name}
                  outerColor={themeColor}
                  innerColor={themeColor}
                  styleLabel={styles.chckboxLabel}
                  styleCheckboxContainer={styles.eachCheckBox}
                />
              );
            })}
            <View style={styles.modalButtons}>
              <TouchableOpacity
                style={[styles.modalButton, styles.cancleButton]}
                onPress={this._toggleModal}
              >
                <Text style={styles.modalButtonText}>Cancle</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.modalButton, styles.saveButton]}
                onPress={this._toggleModal}
              >
                <Text style={styles.modalButtonText}>Save</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </View>
    );
  }
}
