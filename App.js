import React from 'react';
import { Button, View, Text } from 'react-native';
import { createBottomTabNavigator, createAppContainer, createStackNavigator } from 'react-navigation'; // Version can be specified in package.json
import HelloStaff from './components/HelloStaff';
import { Icon } from 'native-base';
import MapsAwal from './components/MapsAwal';
import ViewAllUser from './components/ViewAllUser';
import DataRekap from './components/DataRekap';
import DataBulan from './components/DataBulan';

// const RootStack = createStackNavigator(
//   {
//     Home: {
//       screen: Home,
//     },
//     Grid: {
//       screen: Grid,
//     },
//   },
//   {
//     initialRouteName: 'Home',
//   }
// );

const BotBar = createBottomTabNavigator({
  Home: {
    screen: ViewAllUser,
    navigationOptions:{     
      tabBarLabel:'LIST',
      tabBarIcon:({tintColor})=>(
        <Icon name="md-jet"/>
      )
    }
  },
  Rekap: {
    screen: DataRekap,
    navigationOptions:{
      tabBarLabel:'Catatan',
      tabBarIcon:({tintColor})=>(
        <Icon name="md-search"/>
      )
    }    
  },
  Awal: {
    screen: MapsAwal,    
    navigationOptions:{
      tabBarVisible : false,
      tabBarLabel:'Maps',
      tabBarIcon:({tintColor})=>(
        <Icon name="md-search"/>
      )
    }    
  },
  Bul: {
    screen: DataBulan,    
    navigationOptions:{
      tabBarLabel:()=>null,     
    }    
  }
}, {
  tabBarOptions: {
    activeTintColor: '#e91e63',
    labelStyle: {
      fontSize: 12,
    },
    style: {
      backgroundColor: '#353b48',
    },
  }
}

)

const AppContainer = createAppContainer(BotBar);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}