import * as React from 'react';
import { NavigationContainer, NavigationIndependentTree } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { light, dark } from "../assets/colours"
// import CarControlScreen from '@/screens/CarControlScreen';

const home = 'Home'

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

export function OGNavigation() {

    return (
        <Tab.Navigator
            initialRouteName={home}
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;
                    let rn = route.name;

                    if (rn === home) {
                        iconName = focused ? 'home' : 'home-outline'
                    // } else if (rn === carSelection) {
                    //     iconName = focused ? 'car-sport' : 'car-sport-outline'
                    }
                    return <Ionicons name={iconName} size={size} color={color} />
                },
                tabBarActiveTintColor: light.accent,
                tabBarInactiveTintColor: '#545454',
                labelStyle: { paddingBottom: 4, fontSize: 10 },
                tabBarStyle: { backgroundColor: light.box },
                headerStyle: { backgroundColor: light.box },
                headerTitleAlign: 'center',
            })}
        >
            <Tab.Screen name={home} component={HomeScreen} />
        </Tab.Navigator>
    )
}

export default function Navigation() {

    return (
        <Stack.Navigator
            screenOptions={() => ({
                tabBarActiveTintColor: 'black',
                tabBarInactiveTintColor: '#545454',
                labelStyle: { paddingBottom: 4, fontSize: 10 },
                headerStyle: { backgroundColor: light.box },
                headerTitleAlign: 'center',
            })}
        >
            <Stack.Screen
                name="OGNavigation"
                component={OGNavigation}
                options={{ headerShown: false }}
            />

        </Stack.Navigator>
    )
}