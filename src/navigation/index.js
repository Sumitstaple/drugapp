import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import SplashScreen from '../screens/SplashScreen';
import LoginScreen from '../screens/auth/LoginScreen';
import ContactScreen from '../screens/Contact';
import AboutScreen from '../screens/Move';
import AddContactScreen from '../screens/AddContact';
import UpdateContactScreen from '../screens/UpdateContact';
import MakeMoveScreen from '../screens/MakeMove';
import TrapSpotScreen from '../screens/TrapSpot';
import AddTrapSpotScreen from '../screens/AddTrapSpot';
import SettingsScreen from '../screens/Settings';
import ContactTransactionScreen from '../screens/ContactTransaction';
import HomeScreen from '../screens/Home';
import ChopAndCuffScreen from '../screens/ChopAndCuff';
import SpotDetailScreen from '../screens/SpotDetail';
import ContactEditPacScreen from '../screens/ContactEditPac';
import GetPaidScreen from '../screens/GetPaid';


function MovesScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>MovesScreen!</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
function TabNavigation() {
  return (
    
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused
                ? 'apps-sharp'
                : 'apps-sharp';
            } else if (route.name === 'Settings') {
              iconName = focused ? 'settings-sharp' : 'settings-sharp';
            }

            else if (route.name === 'Contact') {
              iconName = focused ? 'people-sharp' : 'people-sharp';
            }
            else if (route.name === 'Trap Spots') {
              iconName = focused ? 'navigate-circle-sharp' : 'navigate-circle-sharp';
            }
            else if (route.name === 'Moves') {
              iconName = focused ? 'move' : 'move';
            }
            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray',
        }}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Contact" component={ContactScreen} />
        <Tab.Screen name="Trap Spots" component={TrapSpotScreen} />
        <Tab.Screen name="Moves" component={MovesScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>

  );
}

export default function App(){
  return(

        <Stack.Navigator>
          <Stack.Screen
          name="SplashScreen"
          component={SplashScreen}
          // Hiding header for Splash Screen
          options={{headerShown: false}}
        />
          <Stack.Screen name="Home" component={TabNavigation} options={{headerShown: false}}/>
          <Stack.Screen name="About" component={AboutScreen} />
          <Stack.Screen name="Login" component={LoginScreen} options={{headerShown: false}}/>
          <Stack.Screen name="New Contact" component={AddContactScreen} options={{
          headerStyle: {
            backgroundColor: '#fff',
            elevation:0,
          },
          headerTitleStyle: {
            textAlign: 'center',
            position:'absolute',
            top:-12,
            left:'20%',
          },

        }}/>
          <Stack.Screen name="Edit contact name" component={UpdateContactScreen} />
          <Stack.Screen name="Make Move" component={MakeMoveScreen} />
          <Stack.Screen name="AddTrapSpot" component={AddTrapSpotScreen} />
          <Stack.Screen name="ContactEditPac" component={ContactEditPacScreen} options={{headerShown: false}}/>
          <Stack.Screen name="ContactTransaction" component={ContactTransactionScreen} options={{headerShown: false}}/>
          <Stack.Screen name="ChopAndCuff" component={ChopAndCuffScreen} options={{headerShown: false}}/>
          <Stack.Screen name="SpotDetail" component={SpotDetailScreen} options={{headerShown: false}}/>
          <Stack.Screen name="GetPaid" component={GetPaidScreen} options={{headerShown: false}}/>
         </Stack.Navigator>

  );
}