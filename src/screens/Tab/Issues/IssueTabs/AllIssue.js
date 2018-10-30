import React, { Component } from "react";
import { View, Text, ScrollView } from "react-native";
import styles from "./styles";

import SearchComponent from "../../../../components/IssueSearch";
import List from "../../../../components/IssueList";

export default class AllIssues extends Component {
  renderList = () => {
    const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 14];
    return array.map(res => <List onPressDetail={this.navigateDesc} />);
  };
  navigateDesc = () => {
    this.props.navigation.navigate("IssueDescription");
  };
  render() {
    return (
      <View style={styles.container}>
        <SearchComponent placeholder="Search All Issues" />
        <ScrollView>{this.renderList()}</ScrollView>
      </View>
    );
  }
}
