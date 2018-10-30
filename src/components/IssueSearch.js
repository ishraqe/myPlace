import React, { Component } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { primaryFontColor } from "../GlobalStyle";

const issueSearch = props => {
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput style={styles.input} placeholder={props.placeholder} />
        <Icon style={styles.searchIcon} name={"ios-search"} />
      </View>
      <Icon style={styles.sortIcon} name="md-funnel" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: "white",
    flexDirection: "row",
    height: 60,
    paddingLeft: "5%",
    paddingRight: "5%"
  },
  inputContainer: {
    width: "90%",
    justifyContent: "center"
  },
  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    paddingLeft: "15%",
    height: 40,
    borderRadius: 50,
    color: primaryFontColor
  },
  searchIcon: {
    position: "absolute",
    fontSize: 20,
    color: "#ddd",
    left: 15
  },
  sortIcon: {
    fontSize: 25,
    color: "#ddd",
    left: 15,
    alignSelf: "center"
  }
});

export default issueSearch;
