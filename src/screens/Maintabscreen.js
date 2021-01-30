import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
//import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';
import Homescreen from './Homescreen';
import Detailscreen from './Detailscreen';
import Explorescreen from './Explorescreen';
import Profilescreen from './Profilescreen';
import Hallscreen from './Hallscreen';


const HomeStack = createStackNavigator();
const HallStack = createStackNavigator();
const DetailStack = createStackNavigator();

const Tab = createMaterialBottomTabNavigator();

const Maintabscreen = () => (
    <Tab.Navigator
        initialRouteName="Feed"
        activeColor="#fff"
    >

        <Tab.Screen
            name="Home"
            component={HomeStackscreen}
            options={{
                tabBarLabel: 'Home',
                tabBarColor: '#009387',
                tabBarIcon: ({ color }) => (
                    <Icon name="home" color={color} size={26} />
                ),
            }}
        />
        <Tab.Screen
            name="Notifications"
            component={DetailStackscreen}
            options={{
                tabBarLabel: 'Notifications',
                tabBarColor: '#1f65ff',
                tabBarIcon: ({ color }) => (
                    <Icon name="notifications-sharp" color={color} size={26} />
                ),
            }}
        />
        <Tab.Screen
            name="Profile"
            component={Profilescreen}
            options={{
                tabBarLabel: 'profile',
                tabBarColor: '#1A4B6E',
                tabBarIcon: ({ color }) => (
                    <Icon name="person-sharp" color={color} size={26} />
                ),
            }}
        />
        <Tab.Screen
            name="Explore"
            component={Explorescreen}
            options={{
                tabBarLabel: 'explore',
                tabBarColor: '#64244E',
                tabBarIcon: ({ color }) => (
                    <Icon name="open-sharp" color={color} size={26} />
                ),
            }}
        />
    </Tab.Navigator>
)
export default Maintabscreen;


const HomeStackscreen = ({ navigation }) => (
    <HomeStack.Navigator screenOptions={{
        headerStyle: {
            backgroundColor: '#009387',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold'
        }

    }}>
        <HomeStack.Screen name="Home" component={Homescreen} options={{
            title: "Overview",
            headerLeft: () => (
                <Icon.Button name="menu" size={25}
                    backgroundColor="#009387" onPress={() => navigation.openDrawer()}>
                </Icon.Button>)
        }} />

    </HomeStack.Navigator>
)

const DetailStackscreen = ({ navigation }) => (
    <DetailStack.Navigator screenOptions={{
        headerStyle: {
            backgroundColor: '#618A3F',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold'
        }

    }}>
        <DetailStack.Screen name="Details" component={Detailscreen} options={{
            headerLeft: () => (
                <Icon.Button name="menu" size={25}
                    backgroundColor="#618A3F" onPress={() => navigation.openDrawer()}>
                </Icon.Button>)
        }} />
    </DetailStack.Navigator>
)

// const HallStackscreen = ({ navigation }) => (
//     <HallStack.Navigator screenOptions={{
//         headerStyle: {
//             backgroundColor: '#009387',
//         },
//         headerTintColor: '#fff',
//         headerTitleStyle: {
//             fontWeight: 'bold'
//         }

//     }}>
//         <HallStack.Screen name="Home" component={Hallscreen} options={{
//             title: "Overview",
//             headerLeft: () => (
//                 <Icon.Button name="menu" size={25}
//                     backgroundColor="#009387" onPress={() => navigation.openDrawer()}>
//                 </Icon.Button>)
//         }} />

//     </HallStack.Navigator>
// )