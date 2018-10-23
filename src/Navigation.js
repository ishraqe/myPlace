import React from "react";
import { View, Text } from "react-native";
import {
  createStackNavigator,
  createBottomTabNavigator
} from "react-navigation";

//Screens
import Initial from "./screens/Initial/InitialScreen";

// TAB
import Create from "./screens/Tab/create/create";
import Issues from "./screens/Tab/Issues/Issues";
import Profile from "./screens/Tab/Profile/profile";
import Idea from "./screens/Tab/Ideas/ideas";
import Alert from "./screens/Tab/Alerts/alert";

export const RootNavigation = navParams => {
  return createStackNavigator(
    {
      Initial: {
        screen: Initial,
        navigationOptions: {
          header: null
        }
      },
      TabScreens: createBottomTabNavigator(
        {
          Issues: {
            screen: Issues
          },
          Idea: {
            screen: Idea
          },
          Create: {
            screen: Create
          },
          Alert: {
            screen: Alert
          },
          Profile: {
            screen: Profile
          }
        },
        {
          order: ["Issues", "Idea", "Create", "Alert", "Profile"],
          animationEnabled: true,
          tabBarPosition: "bottom"
        }
      )
    },
    {
      initialRouteName: "TabScreens",
      navigationOptions: navigation => {
        title: "Hello";
      }
    }
  );
};
