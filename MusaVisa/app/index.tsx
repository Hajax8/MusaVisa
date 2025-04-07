import { StatusBar } from 'expo-status-bar';
import { Text, View, StyleSheet } from "react-native";
import { light, dark } from "../assets/colours";
import { useState, useEffect } from 'react';
import Navigation from "../components/navigation";
import HomeScreen from '../screens/HomeScreen';
import LoginScreen from '../screens/LoginScreen';

export default function Index() {
  return (
        // <Navigation />
        <LoginScreen/>
  );
}

const styles = StyleSheet.create({

})
