import React from "react";
import { Text, StyleSheet } from "react-native";
import {
  createStackNavigator,
  createBottomTabNavigator
} from "react-navigation";
import Icon from 'react-native-vector-icons/MaterialIcons';
import {renderTabIcon} from './util';
import {themeColor, navFontSize, appBackgroundColor, fontFamily, primaryFontColor} from './GlobalStyle';
import CusomHeader from './components/CustomHeader';
//Screens
import Initial from "./screens/Initial/InitialScreen";

// TAB
import Create from "./screens/Tab/create/create";
import Issues from "./screens/Tab/Issues/Issues";
import Profile from "./screens/Tab/Profile/profile";
import Idea from "./screens/Tab/Ideas/ideas";
import Alert from "./screens/Tab/Alerts/alert";
// Create Issue
import CreateIssue from './screens/Create/Create';


const tabNav = createBottomTabNavigator(
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
      tabBarPosition: "bottom",
      swipeEnabled: false,
      initialRouteName: 'Create',
      tabBarOptions: {
        activeTintColor: themeColor,
        inactiveTintColor: 'gray',
        style: {
            borderTopWidth:0,
            backgroundColor: '#FAFAFA'
        },
      },
      navigationOptions: ({ navigation }) => ({
        header: null,
        tabBarIcon: ({ focused, tintColor }) => {
          const { routeName } = navigation.state;
          return <Icon name={renderTabIcon(routeName)} size={25} color={tintColor} />;
        },
      })
    }
  );


export const RootNavigation = () => {
  return createStackNavigator(
    {
      Initial: {
        screen: Initial,
        navigationOptions: {
          header: null
        }
      },
      TabScreens: {
        screen: tabNav,
        navigationOptions: {
          header: null
        }
      },
      CreateIssue: {
        screen: CreateIssue
      }
    },
    {
      initialRouteName: "TabScreens",
      navigationOptions: ({navigation}) => {
        return {
          headerStyle: navigationStyles.headerStyle,
          headerTintColor: 'white'
        }
      }
    }
  );
};



const navigationStyles =StyleSheet.create( {
  title: {
    fontSize: navFontSize,
    color: appBackgroundColor,
    fontFamily: fontFamily,
    textAlign: 'center',
    alignSelf: 'center',
    flex:1
  },
  headerStyle: {
    backgroundColor: 'white',
    elevation: 0
  }
});