import React from 'react';
import {View, Text} from 'react-native';
import {createStackNavigator, SwitchNavigator, TabNavigator } from 'react-navigation';

//Screens 
import Initial from './screens/Initial/InitialScreen';

// TAB
import Home from './screens/Home/Home';
import Issues from './screens/Issues/Issues';

const stackNavigator = createStackNavigator({
    Initial: {
        screen: Initial,
        navigationOptions: {
            header: null
        }
    }
});

const HomeTab = TabNavigator({
    TabA: {
        screen: Home
    },
    TabB: {
        screen: Issues
    }
},{
    order: ['TabA', 'TabB'],
    animationEnabled: true,
    tabBarPosition: 'bottom'
})


export const RootNavigation = SwitchNavigator({
    Stack: {
        screen: stackNavigator
    },
    Tab: {
        screen: HomeTab
    }
},
{
    initialRouteName: 'Stack',
    navigationOptions: {
        header: null
    }
});
