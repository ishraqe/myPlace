import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import LinearGradient from "react-native-linear-gradient";

import {
  primaryFontSize,
  primaryFontColor,
  issueGradientColor
} from "../GlobalStyle";

const issueList = props => {
  return (
    <TouchableOpacity onPress={props.onPressDetail} style={styles.container}>
      <View style={styles.issueContainer}>
        <LinearGradient
          colors={[issueGradientColor.green, "#fff"]}
          style={styles.linearGradient}
        />
        <View style={styles.eachIssue}>
          <View style={styles.issueInfo}>
            <Text style={styles.issueTitle}>Water is going to my....</Text>
            <Text style={styles.desc}>Im going to do that with my lol</Text>
          </View>
          <View style={styles.dateAndProgress}>
            <Text style={styles.progress}>Resolved</Text>
            <Text style={styles.date}>18 Frb 2010</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: "white",
    marginBottom: 20
  },
  issueContainer: {
    flexDirection: "row",
    width: "100%",
    paddingLeft: "5%",
    paddingRight: "5%"
  },
  linearGradient: {
    height: "100%",
    width: 4
  },
  eachIssue: {
    flexDirection: "row",
    paddingLeft: 10,
    width: "100%",
    justifyContent: "space-between"
  },
  issueInfo: {
    width: "70%"
  },
  issueTitle: {
    color: "#000",
    fontSize: primaryFontSize + 3
  },
  desc: {
    color: primaryFontColor,
    fontSize: primaryFontSize - 1
  },
  dateAndProgress: {
    width: "30%",
    alignItems: "flex-end"
  },
  progress: {
    color: issueGradientColor.green,
    fontSize: primaryFontSize + 3
  },
  date: {
    color: primaryFontColor,
    fontSize: primaryFontSize - 1
  }
});

export default issueList;
