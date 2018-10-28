import React from "react";
import { View, Switch, StyleSheet } from "react-native";

const SwitchComponent = props => {
  return (
    <View>
      <Switch onValueChange={props.toggleSwitch} value={props.switchValue} />
    </View>
  );
};

export default SwitchComponent;
